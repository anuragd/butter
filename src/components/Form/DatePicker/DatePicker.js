import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './Datepicker.less'
import { CalendarSVG, DropdownSVG, CloseSVG } from '../../../utilities/Icons/Icons'
import Dropdown from '../Dropdown/Dropdown'
import { months, getMonth, getYears, getYear, monthToString, checkEdge, processMonthsForEdge, processYearsForEdge } from './calendarData'

/**
 * Custom DatePicker component that allows for a custom format manual entry via a text box. This is a [controlled react input](/#/Form).
 *
 * The text input uses the `moment(string)` from the excellent [Moment.js](https://momentjs.com/) library to parse the string entered in the input into a Javascript date and hence is subject to format restrictions as described [here](https://momentjs.com/docs/#/parsing/string/). This is a fairly robust functions and manages to catch most date formats making this a flexible way to enter dates.
 * @version 0.0.1
 */
export default class Datepicker extends Component {

  static propTypes = {
    /**
     * Label for the datepicker. Try to keep this within 25 characters
     */
    label: PropTypes.string.isRequired,
    /**
     * The currently active value of the component. Pass a null value to render component in a default state
     */
    value: PropTypes.instanceOf(Date),
    /**
     * Callback fired when the user changes the date using one of two methods. The callback takes the form
     *  `callback(value, change_method)`
     * where
     * 
     * * __value__ :Date chosen by user. A Javascript Date value will be passed
     * * __change_method__ : Method used by user to change the date. Possible values are 'CALENDAR\_CLICK' and 'MANUAL\_ENTRY'
     * 
     * __Remember to update the `value` prop everytime this callback is fired__
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Javascript Date value indicating the earliest possible date that can be selected
     */
    min: PropTypes.instanceOf(Date),
    /**
     * Javascript Date value indicating the latest possible date that can be selected
     */
    max: PropTypes.instanceOf(Date),
    /**
     * Boolean for disabling the control.
     */
    disabled: PropTypes.bool,

    /**
     * The `onMouseEnter` callback is fired when the mouse is moved over the button. Mouse event is passed as a param.
     */
    onMouseEnter: PropTypes.func,
    /**
     * The `onMouseLeave` callback is fired when the mouse is moved out of the buttons hit area. Mouse event is passed as a param.
     */
    onMouseLeave: PropTypes.func,
    /**
     * Callback for user focus event. Mouse event is passed as a param.
     */
    onFocus: PropTypes.func,
    /**
     * Callback for loss of focus from the component. Mouse event is passed as a param. onBlur has been disabled for this component since firing it causes focus conflicts with its child dropdowns
     */
    onBlur: PropTypes.func,
  }

  constructor(props) {
    super(props)
    let calendar = props.value?this.getMonthCalendar(props.value):this.getMonthCalendar(new Date())
    this.state = {
      open: false,
      calendarChangeLeft:false,
      calendarChangeRight:false,
      currentMonth: calendar,
      hoverLocation: {x:0,y:0},
      showSelectBubble:false,
      internalValue:props.value?moment(props.value).format('D MMM YYYY'):'',
    }

    this.selectedDayCell = React.createRef()

    this.iconClickHandler = this.iconClickHandler.bind(this)
    this.headerClickHandler = this.headerClickHandler.bind(this)
    this.hoverHandler = this.hoverHandler.bind(this)
    this.endHover = this.endHover.bind(this)
    this.selectDate = this.selectDate.bind(this)
    this.manualChange = this.manualChange.bind(this)
    this.convertDate = this.convertDate.bind(this)
    this.manualDateEntryHandler = this.manualDateEntryHandler.bind(this)
    this.goToMonth = this.goToMonth.bind(this)
    this.getDeltaMonthCalendar = this.getDeltaMonthCalendar.bind(this)
    this.monthSelectHandler = this.monthSelectHandler.bind(this)
    this.yearSelectHandler = this.yearSelectHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
  }


  componentDidUpdate(prevProps, prevState) {
    let newDate;
    if(prevProps.value !== this.props.value)
      newDate = this.convertDate(this.props.value)
    if(newDate) {
      this.setState({
        currentMonth:this.getMonthCalendar(newDate),
        internalValue:this.props.value?moment(this.props.value).format('D MMM YYYY'):'',
      })
    }
  }

  getMonthCalendar(inputDate) {
    let currentDay = moment(inputDate)
    let currentMonth = moment(inputDate).month()
    let currentYear = moment(inputDate).year()
    let calendarStartDate = moment(inputDate).startOf('month').startOf('week')
    let calendarEndDate = moment(inputDate).endOf('month').endOf('week')
    let currentMonthCalendar = [];
    for(var index = calendarStartDate, i = 0;  index.isSameOrBefore(calendarEndDate); index.add(1, 'days'), i++) {
      currentMonthCalendar.push({id:i,day:index.toDate(),diffMonth:(index.month()===currentMonth?false:true)})
    }
    return {month:currentMonth,calendar:currentMonthCalendar,year:currentYear}
  }

  getDeltaMonthCalendar(day, delta) {
    let inputDate
    if(delta===1)
      inputDate = moment(day).add(1,'month').toDate()
    else
      inputDate = moment(day).subtract(1,'month').toDate()
    return this.getMonthCalendar(inputDate)
  }

  // Close icon
  iconClickHandler(e) {
    this.setState({open:false, internalValue: null})
  }

  headerClickHandler(e) {
    if(!this.state.open && !this.props.disabled) this.setState({open:true})
  }
  
  blurHandler(e) {
    // if(this.props.onBlur instanceof Function) this.props.onBlur(e)
    if(this.state.open && !this.props.disabled) this.setState({open:false})
  }

  hoverHandler(e) {
    let bounds = e.currentTarget.getBoundingClientRect()
    this.setState({
      showSelectBubble: true,
      hoverLocation: {
        x: e.currentTarget.offsetLeft,
        y: e.currentTarget.offsetTop
      }
    })
  }

  endHover(e) {
    this.setState({showSelectBubble:false})
  }

  // Data entry using text input box
  manualDateEntryHandler(e) {
    if(e.keyCode===13 || e.type === 'blur') {
      let newDate = this.convertDate(e.target.value)
      if(newDate) {
        this.setState({open: false, internalValue:null})
        this.props.onChange(newDate, 'MANUAL_ENTRY')
      }
    }
  }

  manualChange(e) {
    this.setState({internalValue:e.target.value, showSelectBubble: false})
  }

  selectDate(selectedDay) {
    this.props.onChange(selectedDay, 'CALENDAR_CLICK')
    this.setState({open: false,internalValue:null})
  }

  convertDate(manualDate) {
    let testDate = moment(manualDate)
    if(testDate.isValid())
      return testDate.toDate()
    else
      return
  }

  goToMonth(delta) {
    let calendarChangeLeft = (delta === -1)?true:false
    let calendarChangeRight = (delta === 1)?true:false
    let newDate = moment().month(this.state.currentMonth.month).year(this.state.currentMonth.year)
    let newCalendar = this.getDeltaMonthCalendar(newDate.toDate(),delta)
    this.setState({
      calendarChangeLeft:calendarChangeLeft,
      calendarChangeRight: calendarChangeRight,
      showSelectBubble: false
    })
    setTimeout(() => {
      this.setState({
        calendarChangeLeft:false,
        calendarChangeRight: false,
        currentMonth: newCalendar
      })
    }, 200)
  }

  monthSelectHandler(month) {
    let newDate = moment().month(month.id).year(this.state.currentMonth.year)
    let calendarChangeLeft = month.id < this.state.currentMonth.month
    let calendarChangeRight = month.id > this.state.currentMonth.month
    this.setState({
      calendarChangeLeft: calendarChangeLeft,
      calendarChangeRight: calendarChangeRight
    })
    setTimeout(() => {
      this.setState({
        calendarChangeLeft:false,
        calendarChangeRight: false,
        currentMonth: this.getMonthCalendar(newDate.toDate())
      })
    }, 200)
  }

  yearSelectHandler(year) {
    let newDate = moment().month(this.state.currentMonth.month).year(year.value)
    let calendarChangeLeft = year.value < this.state.currentMonth.year
    let calendarChangeRight = year.value > this.state.currentMonth.year
    this.setState({
      calendarChangeLeft: calendarChangeLeft,
      calendarChangeRight: calendarChangeRight
    })
    setTimeout(() => {
      this.setState({
        calendarChangeLeft:false,
        calendarChangeRight: false,
        currentMonth: this.getMonthCalendar(newDate.toDate())
      })
    }, 200)
  }

  render() {
    const {
      label,
      min,
      max,
      disabled
    } = this.props

    let value
    if(this.props.value instanceof Date)
      value = this.props.value

    /** Build Calendar **/
    let calendar;
    
    if(this.state.open) {
      let calendarControls =
        <div className={styles.control_bar}>
          <div 
            className={checkEdge(this.state.currentMonth.month, this.state.currentMonth.year, min, max)===-1?
              styles.month_control_disabled:styles.last_month_control} 
            onClick={() => this.goToMonth(-1)}>
            <img src={DropdownSVG} />
          </div>
          <div className={styles.month_year_select}>
            <Dropdown 
              label="Month" 
              options={processMonthsForEdge(months,this.state.currentMonth.year,min,max)} 
              value={months.filter((month) => month.value === monthToString(this.state.currentMonth.month))[0]} 
              onChange={this.monthSelectHandler} 
              mini/>
            <Dropdown 
              label="Year" 
              options={processYearsForEdge(getYears(min,max), this.state.currentMonth.month, min, max)} 
              value={getYears(min,max).filter((year) => year.value === this.state.currentMonth.year)[0]} 
              onChange={this.yearSelectHandler} 
              mini/>
          </div>
          <div 
            className={checkEdge(this.state.currentMonth.month, this.state.currentMonth.year, min, max)===1?
              styles.month_control_disabled:styles.next_month_control} 
            onClick={() => this.goToMonth(1)}>
            <img src={DropdownSVG} />
          </div>
        </div>

      let calendarBody = this.state.currentMonth.calendar.map((day) => 
          <div 
            key={ day.id } 
            className={moment(value).isSame(moment(day.day),'day')?styles.active_cell:(day.diffMonth?styles.diff_day_cell:styles.day_cell)} 
            onMouseOver={this.hoverHandler}
            ref={moment(value).isSame(moment(day.day),'day')?this.selectedDayCell:null} 
            onClick={() => this.selectDate(day.day)}>
            { moment(day.day).date() }
          </div>
      )

      calendar = 
        <div className={styles.calendar_container}>
          {calendarControls}
          <div className={styles.calendar_body}>
            <div className={styles.day_names}>
              <div className={styles.day_name}>S</div>
              <div className={styles.day_name}>M</div>
              <div className={styles.day_name}>T</div>
              <div className={styles.day_name}>W</div>
              <div className={styles.day_name}>T</div>
              <div className={styles.day_name}>F</div>
              <div className={styles.day_name}>S</div>
            </div>
            <div className={styles.day_cells} onMouseLeave={this.endHover}>
              { this.state.showSelectBubble &&
                  <div 
                    className={styles.selection_bubble}
                    style={{
                      left:this.state.hoverLocation.x,
                      top:this.state.hoverLocation.y
                    }}>
                  </div>
              }
              <div className={
                (this.state.calendarChangeLeft || this.state.calendarChangeRight)?
                (this.state.calendarChangeLeft?styles.active_month_changing_left:styles.active_month_changing_right):
                styles.active_month}>{calendarBody}</div>
            </div>
          </div>
        </div>
    }

    let internalValue = ''
    if(this.state.internalValue != null)
      internalValue = this.state.internalValue
    else if(value)
      internalValue = moment(value).format('D MMM YYYY')

    return (
      <div className={styles.datepicker_container} tabIndex={disabled?"":"0"}>
        <div 
        className={disabled?styles.disabled_datepicker:(this.state.open?styles.open_datepicker:styles.datepicker)} 
        onBlur={this.blurHandler}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onFocus={this.props.onFocus}>
          <div className={this.state.open?styles.open_header:styles.header} onClick={this.headerClickHandler}>
            <input 
              className={styles.manual_entry} 
              type="text" 
              placeholder="Type a date in any format"
              value={internalValue} 
              onChange={this.manualChange} 
              onKeyUp={this.manualDateEntryHandler}
              onBlur={this.manualDateEntryHandler}/>
            <div className={value?styles.small_label:(disabled?styles.disabled_label:styles.label)}>{label}</div>
            <div className={styles.icon}>
              <img src={CalendarSVG} className={this.state.open?styles.hide_icon:(disabled?styles.disabled_icon:styles.show_icon)}/>
              <img src={CloseSVG}  className={this.state.open?styles.show_icon:styles.hide_icon} onClick={this.iconClickHandler}/>
            </div>
          </div>
          {calendar}
        </div>
      </div>
    )
  }
}

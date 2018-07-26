import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './DatePicker.less'
import { CalendarSVG, DropdownSVG, CloseSVG } from '../../utilities/Icons/Icons'
import Dropdown from '../Dropdown/Dropdown'
import { months, years } from './calendarData'

/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 *
 * Requires a minimum width of 280px
 * @version 0.0.1
 */
export default class DatePicker extends Component {

  static propTypes = {
    /**
     * Description of prop "label".
     */
    label: PropTypes.string.isRequired,
    /**
     * Description of prop "value".
     */
    value: PropTypes.instanceOf(Date),
    /**
     * Function fired whenever user moves slider or manually enters a value in the input. Must be used to pass the modified value back to the component
     */
    changeHandler: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      monthSelect: null,
      yearSelect: null,
      open: false,
      calendarChange:false,
      currentMonth: props.value?this.getMonthCalendar(props.value):this.getMonthCalendar(new Date()),
      hoverLocation: {x:0,y:0},
      showSelectBubble:false,
      internalValue:props.value?moment(props.value).format('D MMM YYYY'):''
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
  }


  componentDidUpdate(prevProps, prevState) {
    let newDate;
    if(prevProps.value !== this.props.value)
      newDate = this.convertDate(this.props.value)
    if(newDate) {
      this.setState({currentMonth:this.getMonthCalendar(newDate)})
    }
    if(!prevState.open && this.state.open) {
      let bounds = this.selectedDayCell.current
      this.setState({
        showSelectBubble: true,
        hoverLocation: {
          x: bounds.offsetLeft,
          y: bounds.offsetTop
        }
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
    return {month:currentMonth,calendar:currentMonthCalendar}
  }

  iconClickHandler(e) {
    if(this.state.open) this.setState({open:false, internalValue: null})
  }

  headerClickHandler(e) {
    if(!this.state.open) this.setState({open:true})
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

  manualDateEntryHandler(e) {
    if(e.keyCode===13 || e.type === 'blur') {
      let newDate = this.convertDate(e.target.value)
      if(newDate) {
        this.setState({open: false, internalValue:null})
        this.props.changeHandler(newDate)
      }
    }
  }

  manualChange(e) {
    this.setState({internalValue:e.target.value})
  }

  selectDate(selectedDay) {
    this.props.changeHandler(selectedDay)
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
    this.setState({calendarChange:true})
    setTimeout(() => {
      let newDate = moment().month(this.state.currentMonth.month + delta)
      this.setState({calendarChange:false,currentMonth:this.getMonthCalendar(newDate.toDate())})
    }, 400)
  }

  render() {

    const {
      label
    } = this.props

    let value
    if(this.props.value instanceof Date)
      value = this.props.value

    /** Build Calendar **/
    let calendar;
    

    if(this.state.open) {
      let calendarControls =
        <div className={styles.control_bar}>
          <div className={styles.last_month_control} onClick={() => this.goToMonth(-1)}><img src={DropdownSVG} /></div>
          <div className={styles.month_year_select}>
            <Dropdown 
              label="Month" 
              options={months} 
              value={this.state.monthSelect} 
              changeHandler={(val) => this.setState({monthSelect:val})} 
              mini
              className={styles.month_select}/>
            <Dropdown label="Year" options={years} value={this.state.yearSelect} changeHandler={(val) => this.setState({yearSelect:val})} mini/>
          </div>
          <div className={styles.next_month_control} onClick={() => this.goToMonth(1)}><img src={DropdownSVG} /></div>
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
            { this.state.showSelectBubble &&
                <div 
                  className={styles.selection_bubble}
                  style={{
                    left:this.state.hoverLocation.x,
                    top:this.state.hoverLocation.y
                  }}>
                </div>
            }
            <div className={styles.day_names}>
              <div className={styles.day_name}>S</div>
              <div className={styles.day_name}>M</div>
              <div className={styles.day_name}>T</div>
              <div className={styles.day_name}>W</div>
              <div className={styles.day_name}>T</div>
              <div className={styles.day_name}>F</div>
              <div className={styles.day_name}>S</div>
            </div>
            <div className={this.state.calendarChange?styles.changing_body:styles.day_cells} onMouseLeave={this.endHover}>
              {calendarBody}
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
      <div className={styles.datepicker_container}>
        <div className={this.state.open?styles.open_datepicker:styles.datepicker}>
          <div className={this.state.open?styles.open_header:styles.header} onClick={this.headerClickHandler}>
            <input 
              className={styles.manual_entry} 
              type="text" 
              placeholder="Type a date in any format"
              value={internalValue} 
              onChange={this.manualChange} 
              onKeyUp={this.manualDateEntryHandler}
              onBlur={this.manualDateEntryHandler}/>
            <div className={value?styles.small_label:styles.label}>{label}</div>
            <div className={styles.icon}>
              <img src={CalendarSVG} className={this.state.open?styles.hide_icon:styles.show_icon}/>
              <img src={CloseSVG}  className={this.state.open?styles.show_icon:styles.hide_icon} onClick={this.iconClickHandler}/>
            </div>
          </div>
          {calendar}
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Slider.less'


/**
 * Number slider for use when the user needs to select a number within a range. This is a controlled React component
 *
 * @version 0.0.1
 */
export default class Slider extends Component {
  static propTypes = {
    /**
     * Label for the control
     */
    label: PropTypes.string.isRequired,
    /**
     * Value of the control. This has to be a number within the range provided via min-max. Value must be set exclusively by the parent container, and updated by listening for changes via the onChange function. Must not be null. Set to minimum value to reset component
     */
    value: PropTypes.number.isRequired,
    /**
     * Minimum possible value
     */
    min: PropTypes.number.isRequired,
    /**
     * Maximum possible value
     */
    max: PropTypes.number.isRequired,
    /**
     * Function fired whenever user moves slider or manually enters a value in the input. Must be used to pass the modified value back to the component
     */
    onChange: PropTypes.func.isRequired,
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
     * Callback for loss of focus from the component. Mouse event is passed as a param.
     */
    onBlur: PropTypes.func,

  }

  constructor(props) {
    super(props)

    /*------- Validations ----------*/
    if(props.min >= props.max) {
      console.error("Cannot render Slider. Maximum(prop: max) should be greater than Minimum(prop: min)")
      return
    }
    /*------- End validations ----------*/

    this.state= {
      dragging:false,
      valueX:0,         // X coordinate representing integer value passed to component. Used to position thumb
      xFactor:0,        // Multiplication factor for converting integer value into x coordinate
      offsetX:0,        // Component horizontal offset relative to document
      maxX:0,           // Maximum x coordinate for thumb. Represents horizontal drag limit for thumb
      thumbOffset:0,    // Horizontal offset used to position thumb's anchor point at the center rather than left edge of thumb
      manualValue: props.value?props.value:0      // Internal value used to populate the manual entry input field
    }
    this.track = React.createRef()      // Reference to the track
    this.thumb = React.createRef()      //Reference to the thumb
    this.startDrag = this.startDrag.bind(this)
    this.updateDrag = this.updateDrag.bind(this)
    this.updatePosition = this.updatePosition.bind(this)
    this.endDrag = this.endDrag.bind(this)
    this.manualEntry = this.manualEntry.bind(this)
    this.onChange = this.onChange.bind(this)
    this.keypressHandler = this.keypressHandler.bind(this)
    this.keyUpHandler = this.keyUpHandler.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      let thumbWidth = this.thumb.current.getBoundingClientRect().width
      let trackBounds = this.track.current.getBoundingClientRect()
      let maxX = trackBounds.width - (thumbWidth / 2)       // Get maximum possible x coordinate within the component boundaries and adjust for thumb width
      let xFactor = maxX / ( this.props.max - this.props.min ) // Total available horizontal distance divided my provided range
      let xPosition = (this.props.value - this.props.min) * xFactor
      if(xPosition > maxX) xPosition = maxX       // If calculated position exceeds component bounds set to maximum or minimum
      if(xPosition < 0) xPosition = 0             // If calculated position exceeds component bounds set to maximum or minimum
      this.setState({
        valueX: xPosition,
        xFactor: xFactor,
        offsetX: trackBounds.left,
        maxX: maxX,
        thumbOffset: thumbWidth / 2
      })
    },0)
  }

  componentDidUpdate(prevProps, prevState) {
    if( this.state.dragging && !prevState.dragging ) {
      document.addEventListener('mousemove', this.updateDrag)
      document.addEventListener('mouseup', this.endDrag)
    }
    else if( !this.state.dragging && prevState.dragging ) {
      document.removeEventListener('mousemove', this.updateDrag)
      document.removeEventListener('mouseup', this.endDrag)
    }

    // If a new value is passed, calculate new x position
    if(prevProps.value !== this.props.value) {
      let xPosition = (this.props.value - this.props.min) * this.state.xFactor
      if(xPosition > this.state.maxX) {
        this.props.onChange(this.props.max)
      }
      else if(xPosition < 0)
        this.props.onChange(this.props.min)
      else
        this.setState({manualValue:this.props.value, valueX: xPosition})
    }
  }

  keyUpHandler(e) {
    // Left Arrow
    if(e.keyCode === 37 || e.keyCode === 40) { 
      e.preventDefault()
      e.stopPropagation()
      let newValue = parseInt(this.state.valueX / this.state.xFactor) - ((this.props.max - this.props.min) / 10)
      if(newValue < this.props.min) newValue = 0
      this.props.onChange(newValue)
    }

    // Right arrow
    else if(e.keyCode === 39 || e.keyCode === 38) {
      e.preventDefault()
      e.stopPropagation()
      let newValue = parseInt(this.state.valueX / this.state.xFactor) + ((this.props.max - this.props.min) / 10)
      if(newValue > this.props.max) newValue = 0
      this.props.onChange(newValue)
    }
    return false
  }

  startDrag(e) { 
    if (e.button !== 0 || this.props.disabled) return    // Only process left clicks   
    this.setState({
      dragging: true
    })
    e.stopPropagation()
    e.preventDefault()
  }

  updateDrag(e) {
    if (!this.state.dragging) return
    this.updatePosition(e)
  }

  updatePosition(e) {
    let newPosition = e.pageX - this.state.offsetX
    // If calculated position exceeds component bounds set to maximum or minimum
    if (e.pageX - this.state.offsetX > this.state.maxX) 
      newPosition = this.state.maxX
    // If calculated position exceeds component bounds set to maximum or minimum
    else if (e.pageX - this.state.offsetX < 0)
      newPosition = 0
    // this.setState({
    //   valueX: newPosition,
    // })
    if(this.props.onChange instanceof Function) this.props.onChange(parseInt(newPosition / this.state.xFactor) + this.props.min)
    e.stopPropagation()
    e.preventDefault()
  }

  endDrag(e) {
    this.setState({
      dragging: false
    })
    // if(this.props.onChange instanceof Function) this.props.onChange(parseInt(this.state.valueX / this.state.xFactor))
    e.stopPropagation()
    e.preventDefault()
  }

  // On blur from input field, call parent onChange with new value
  manualEntry(e) {
    if(this.props.onChange instanceof Function) this.props.onChange(parseInt(e.target.value))
  }

  // On change in the input field, update display text inside field, but not on the slider. That is called on blur or on pressing enter
  onChange(e) {
    this.setState({manualValue:e.target.value})
  }

  // Call parent change handler if ENTER is pressed in the input field
  keypressHandler(e) {
    if(e.keyCode === 13)
      if(this.props.onChange instanceof Function) this.props.onChange(parseInt(e.target.value))
  }

  render() {

    const {
      label,
      disabled
    } = this.props

    return (
      <div className={styles.slider_container}
        tabIndex="0" 
        onKeyUp={this.keyUpHandler}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}>
        <div className={styles.label}>{label}</div>
        <div className={styles.slider}>
          <div className={styles.track} ref={this.track} onClick={this.updatePosition}></div>
          <div  className={disabled?styles.active_range_disabled:styles.active_range}
                style={{width:(this.state.valueX + this.state.thumbOffset)+'px'}}>
          </div>
          <div  ref={this.thumb}
                className={disabled?styles.thumb_disabled:styles.thumb} 
                style={{left: this.state.valueX+'px'}} 
                onMouseDown={this.startDrag} 
                onMouseUp={this.endDrag}
                tabIndex="2">
          </div>
        </div>
        <input 
          className={disabled?styles.input_disabled:styles.input}
          disabled ={disabled} 
          type="number" value={this.state.manualValue} 
          onBlur={this.manualEntry} 
          onChange={this.onChange} 
          onKeyUp={this.keypressHandler}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.less'
import CheckSVG from './CheckSVG'


/**
 * Checkbox
 * 
 * @version 0.0.1
 */
export default class Checkbox extends Component {
  static propTypes = {
    /**
     * Label for the control
     */
    label: PropTypes.string.isRequired,
    /**
     * Value of the control. This is an array that is expected to be a subset of the options array. Value must be set exclusively by the parent container, and updated by listening for changes via the onChange function.
     */
    value: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })),
    /**
     * List of options as an array of objects, each containing id, value keys and optionally a disabled key
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })).isRequired,
    /**
     * Callback fired when user makes a new selection. Callback will receive the selected option (eg: {id:0, value: "Option 1"} as an argument)
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
    this.clickHandler = this.clickHandler.bind(this)
  }

  findSelectedIndices(value, options) {
    let result = []
    for(var i=0; i<options.length; i++) {
      for(var j=0; j<value.length; j++) {
        value[j] === options[i] && result.push(options[i].id)
      }
    }
    return result
  }

  clickHandler(option) {
    if(!this.props.disabled && !option.disabled) {
      let newValue = this.props.value
      let existingIndex = newValue.indexOf(option)
      if( existingIndex === -1)
        newValue.push(option)
      else
        newValue.splice(existingIndex, 1)
      this.props.onChange(newValue)
    }
  }


  render() {
    const {
      label,
      options,
      disabled
    } = this.props

    const selectedOptions = this.findSelectedIndices(this.props.value,this.props.options)

    const optionsList = options.map((option,key) =>
      <div key={option.id?option.id:key} className={option.disabled?styles.disabled_container:styles.option_container} 
        onClick={ () => this.clickHandler(option) } tabIndex="1">
        <div className={selectedOptions.indexOf(option.id) !== -1 ? styles.box_active :styles.box}>
          <CheckSVG width="16px" height="12px" className={(selectedOptions.indexOf(option.id) !== -1)? styles.check_active : styles.check}/>
        </div>
        <div className={selectedOptions.indexOf(option.id) !== -1 ? styles.value_active:styles.value}>
          {option.value}
        </div>
      </div>
    )
    return (
      <div 
        className={styles.checkbox_container}
        tabIndex={disabled?"":"0"}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}>
        <div className={styles.label}>{label}</div>
        <div className={disabled?styles.disabled_top_container:styles.options_container}>
          {optionsList}
        </div>
      </div>
    )
  }
}

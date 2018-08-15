import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Radio.less'

/**
 * Replacement for default HTML Radio buttons. Use this when presenting the user with the option of selcting one of 2-5 options. For cases with more options, use a dropdown instead.
 * 
 * This is a [controlled react input](/#/Form).
 * @version 0.0.1
 */
export default class Radio extends Component {
  static propTypes = {
    /**
     * Top level label for the Radio Buttons
     */
    label: PropTypes.string,
    /**
     * Callback fired when user makes a new selection. Callback will receive the selected option (eg: {id:0, value: "Option 1"} as an argument)
     */
    onChange: PropTypes.func.isRequired,
    /**
     * List of options as an array of objects, each containing id, value keys and optionally a disabled key.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      /**
       *  An unique number representing the option. This can be omitted if you want the component to use it's own internal ids instead
       */
      id: PropTypes.number,
      /**
       * The string label for the option
       */
      value: PropTypes.string.isRequired,
      /**
       * Set `disabled` to `true` to disable selection of this option
       */
      disabled: PropTypes.bool
    })).isRequired,
    /**
     * Selected value. Must correspond to the type passed in the `value` property of objects in the options array. Remember to update this value when the `onChange` callback is fired.
     */
    value: PropTypes.shape({
      /**
       *  An unique number representing the option.
       */
      id: PropTypes.number.isRequired,
      /**
       * The number or string label for the option
       */
      value: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
      /**
       * Set `disabled` to `true` to disable selection of this option
       */
      disabled: PropTypes.bool
    }),
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

  clickHandler(option) {
    if(this.props.onChange instanceof Function && !option.disabled) this.props.onChange(option)
  }

  render() {
    const {
      label,
      disabled,
      options,
      value
    } = this.props

    const optionsList = options.map((option, key) => 
      <div 
      className={(option.disabled || disabled)?`${styles.radio_option} ${styles.disabled_option}`:styles.radio_option} 
      onClick={() => this.clickHandler(option)} 
      key={option.id?option.id:key} 
      tabIndex={(option.disabled || disabled)?null:"1"}>
        <div className={(value && value.id===option.id)?styles.active_holder:styles.radio_holder}>
          <div className={(value && value.id < option.id)?styles.radio_blob_up:styles.radio_blob_down}></div>
        </div>
        <div className={(value && value.id===option.id)?styles.selected_radio_value:styles.radio_value}>{option.value}</div>
      </div>
    )

    return (
      <div 
        className={styles.radio_container}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        tabIndex="0">
          <div className={disabled?styles.disabled_label:styles.label}>{label}</div>
          {optionsList}
      </div>
    )
  }
}

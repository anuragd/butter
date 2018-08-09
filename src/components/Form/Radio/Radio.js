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
     * Boolean for disabling the control.
     */
    disabled: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      goingDown: true 
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(option) {
    this.setState({selected:option.id})
    if(this.props.onChange instanceof Function) this.props.onChange(option)
  }

  render() {
    const {
      label,
      disabled,
      options
    } = this.props

    const optionsList = options.map((option, key) => 
      <div className={(option.disabled || disabled)?`${styles.radio_option} ${styles.disabled_option}`:styles.radio_option} onClick={() => this.clickHandler(option)} key={option.id?option.id:key}>
        <div className={(this.state.selected===option.id)?styles.active_holder:styles.radio_holder}>
          <div className={(this.state.selected < option.id)?styles.radio_blob_up:styles.radio_blob_down}></div>
        </div>
        <div className={(this.state.selected===option.id)?styles.selected_radio_value:styles.radio_value}>{option.value}</div>
      </div>
    )

    return (
      <div className={styles.radio_container}>
        <div className={disabled?styles.disabled_label:styles.label}>{label}</div>
        {optionsList}
      </div>
    )
  }
}

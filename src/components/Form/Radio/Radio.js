import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Radio.less'

/**
 * Description of Dropdown
 *
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
    changeHandler: PropTypes.func,
    /**
     * List of options as an array of objects, each containing id, value keys and optionally a disabled key.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
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
    if(this.props.changeHandler instanceof Function) this.props.changeHandler(option)
  }

  render() {
    const {
      label,
      disabled,
      options
    } = this.props

    const optionsList = options.map((option) => 
      <div className={(option.disabled || disabled)?`${styles.radio_option} ${styles.disabled_option}`:styles.radio_option} onClick={() => this.clickHandler(option)} key={option.id}>
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

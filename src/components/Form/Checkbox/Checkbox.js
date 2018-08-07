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
     * Value of the control. This can be either true or false. Value must be set exclusively by the parent container, and updated by listening for changes via the changeHandler function. This must be explicitly defined as value={true} or value={false}
     */
    value: PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string
    }).isRequired,
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
    changeHandler: PropTypes.func.isRequired,
    /**
     * Boolean for disabling the control.
     */
    disabled: PropTypes.bool,

  }

  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(option) {
    this.props.changeHandler(option)
  }


  render() {
    const {
      label,
      value,
      options,
      disabled
    } = this.props
    const optionsList = options.map((option,key) =>
      <div key={option.id?option.id:key} className={option.disabled?styles.disabled_container:styles.option_container} onClick={ () => this.clickHandler(option) }>
        <div className={value && (value.id === option.id)? styles.box_active :styles.box}>
          <CheckSVG width="16px" height="12px" className={value && (value.id === option.id)? styles.check_active : styles.check}/>
        </div>
        <div className={value && (value.id === option.id)? styles.value_active:styles.value}>
          {option.value}
        </div>
      </div>
    )
    return (
      <div className={styles.checkbox_container}>
        <div className={styles.label}>{label}</div>
        <div className={disabled?styles.disabled_top_container:styles.options_container}>
          {optionsList}
        </div>
      </div>
    )
  }
}

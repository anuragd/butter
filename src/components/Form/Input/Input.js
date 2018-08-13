import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Input.less'
import { SuccessSVG } from '../../../utilities/Icons/Icons'

/**
 * Replacement for the default HTML `<input />` component
 *
 * @version 0.0.1
 */
export default class Input extends Component {
  static propTypes = {
    /**
     * Label for the input component. This will provide content for the float label that positions itself depending on the state on the component
     */
    label: PropTypes.string.isRequired,
    /**
     * Value of the input. This cannot be null. Pass an empty string to reset component instead. This is a controlled React component (https://reactjs.org/docs/forms.html). This means that the single source of truth for the value is this prop. Typically, this prop will be linked to the state of the parent container and must be updated when the changeHandler is invoked
     */
    value: PropTypes.string.isRequired,
    /**
     * Returns the current value of the input on 'every' change. Use this callback to update the value prop. (See example below). 
     * The callback takes the following form:
     * 
     * `callback(value)`
     * where `value` represents the string value enetered by the user in the input. The original HTML event is __not__ passed on.
     * You should also use this to perform any validation checks you might require and pass the result of the validation to the validated prop.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * Fired when the user starts interacting with the component. Passes no arguments.
     */
    onFocus: PropTypes.func,
    /**
     * Fired when the user changes focus(interacts) with some other element on the page. Passes no arguments
     */
    onBlur: PropTypes.func,
    /**
     * Include this prop if the input has an attached validation function and passes the validation check. Note that validated and invalid props cannot be passed at the same time.
     */
    validated: PropTypes.bool,
    /**
     * If the input has a validation check, and fails to pass the check, pass a string describing the error to the user here. Note that validated and invalid props cannot be passed at the same time.
     */
    invalid: PropTypes.string,
    /**
     * Include this prop if you want to disable the component completely
     */
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      isTyping : false,
    };
    this.focusHandler = this.focusHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  focusHandler(e) {
    this.setState({isTyping:true})
    if(this.props.focusHandler instanceof Function) this.props.focusHandler()
  }

  blurHandler(e) {
    this.setState({isTyping: false})
    if(this.props.blurHandler instanceof Function) this.props.blurHandler()
  }

  changeHandler(e) {
    this.setState({valid: false, invalid: false})
    if(this.props.onChange instanceof Function) this.props.onChange(e.target.value)
  }

  render() {
    const {
      label,
      disabled,
      value
    } = this.props

    let errorMessage
    if(this.props.invalid && !this.state.isTyping)
      errorMessage = <div className={styles.error}>{this.props.invalid}</div>

    let validated
      if(this.props.valid && value)
        validated = <div className={styles.validated}><img src={SuccessSVG} /></div>

    return (
      <div className={styles.container}>
        <input type="text"
          className={this.props.valid?styles.valid_input:(this.props.invalid?styles.invalid_input:'')}
          onFocus={this.focusHandler} 
          onBlur={this.blurHandler} 
          value={value} 
          onChange={this.changeHandler}
          disabled={disabled}/>
        <div className={(this.state.isTyping || value)?styles.float_focus:(disabled?styles.float_disable:styles.float_label)}>{label}</div>
        {validated}
        {errorMessage}
      </div>
    )
  }
}

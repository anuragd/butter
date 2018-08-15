import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './TextArea.less'
import { SuccessSVG } from '../../../utilities/Icons/Icons'

/**
 * Replacement for the default HTML `<Textarea />` component
 *
 * @version 0.0.1
 */
export default class Textarea extends Component {
  static propTypes = {
    /**
     * Label for the TextArea component. This will provide content for the float label that positions itself depending on the state on the component
     */
    label: PropTypes.string.isRequired,
    /**
     * Value of the TextArea. This is a controlled React component (https://reactjs.org/docs/forms.html). This means that the single source of truth for the value is this prop. Typically, this prop will be linked to the state of the parent container and must be updated when the onChange is invoked
     */
    value: PropTypes.string,
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
    this.state = {
      isTyping : false
    };
    this.focusHandler = this.focusHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  focusHandler(e) {
    this.setState({isTyping:true})
    if(this.props.onFocus) this.props.onFocus(e)
  }

  blurHandler(e) {
    this.setState({isTyping: false})
    if(this.props.onBlur) this.props.onBlur(e)
  }

  onChange(e) {
    if(this.props.onChange instanceof Function) this.props.onChange(e.target.value)
  }

  render() {
    const {
      label,
      value,
      disabled
    } = this.props

    let errorMessage
    if(this.props.invalid && !this.state.isTyping)
      errorMessage = <div className={styles.error}>{this.props.invalid}</div>

    let validated
      if(this.props.validated && value)
        validated = <div className={styles.validated}><img src={SuccessSVG} /></div>

    return (
      <div className={styles.container}>
        <textarea type="text"
          className={this.props.validated?styles.valid_input:(this.state.invalid?styles.invalid_input:'')}
          onFocus={this.focusHandler} 
          onBlur={this.blurHandler} 
          value={value} 
          onChange={this.onChange}
          disabled={disabled}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          tabIndex={disabled?'':'0'}></textarea>
        <div className={(this.state.isTyping || value)?styles.float_focus:(disabled?styles.float_disable:styles.float_label)}>{label}</div>
        {validated}
        {errorMessage}
      </div>
    )
  }
}

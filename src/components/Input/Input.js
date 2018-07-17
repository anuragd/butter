import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Input.less'
import svg from '../../assets/icons/success.svg'

/**
 * Description of Input
 *
 * @version 0.0.1
 * @author [Anurag Dutta](mailto:anudutta@cisco.com)
 */
export default class Input extends Component {
  static propTypes = {
    /**
     * Description of prop "label".
     */
    label: PropTypes.string,
    /**
     * Description of prop "value".
     */
    value: PropTypes.string,
    /**
     * Description of prop "changeHandler".
     */
    changeHandler: PropTypes.func,
    /**
     * Description of prop "focusHandler".
     */
    focusHandler: PropTypes.func,
    /**
     * Description of prop "blurHandler".
     */
    blurHandler: PropTypes.func,
    /**
     * Description of prop "validated".
     */
    validated: PropTypes.bool,
    /**
     * Description of prop "invalid".
     */
    invalid: PropTypes.string,
    /**
     * Description of prop "disabled".
     */
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      isTyping : false,
      valid: props.validated,
      hasValue: (props.value?true:false),
      value: props.value?props.value:'',
      invalid: props.invalid
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
    if(e.target.value==="")
      this.setState({value:e.target.value, hasValue: false, valid: false})
    else
      this.setState({value:e.target.value, hasValue:true, valid: false, invalid: false})
    if(this.props.changeHandler instanceof Function) this.props.changeHandler()
  }

  render() {
    const {
      label,
      disabled
    } = this.props

    let errorMessage
    if(this.state.invalid && !this.state.isTyping)
      errorMessage = <div className={styles.error}>{this.state.invalid}</div>

    let validated
      if(this.state.valid && this.state.hasValue)
        validated = <div className={styles.validated}><img src={svg} /></div>

    return (
      <div className={styles.container}>
        <input type="text"
          className={this.state.valid?styles.valid_input:(this.state.invalid?styles.invalid_input:'')}
          onFocus={this.focusHandler} 
          onBlur={this.blurHandler} 
          value={this.state.value} 
          onChange={this.changeHandler}
          disabled={disabled}/>
        <div className={(this.state.isTyping || this.state.hasValue)?styles.float_focus:(disabled?styles.float_disable:styles.float_label)}>{label}</div>
        {validated}
        {errorMessage}
      </div>
    )
  }
}

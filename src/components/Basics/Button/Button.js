import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Button.less'

/**
 * Generic button component with animations
 * @version 0.0.1
 */
export default class Button extends Component {
  static propTypes = {
    /**
     * String that will appear inside the button as its label
     */
    label: PropTypes.string.isRequired,
    /**
     * Callback executed when mouse hovers over the component. Useful when tooltips or other related actions are needed
     */
    hoverHandler: PropTypes.func,
    /**
     * Callback for user click
     */
    clickHandler: PropTypes.func,
    /**
     * Setting this attribute will cause the button to be disabled. Disabled buttons will not fire any user interaction events
     */
    disabled: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
    };
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    if(this.props.clickHandler) this.props.clickHandler()
  }

  render() {
    const {
      label,
      disabled
    } = this.props

    return (
      <div className={styles.button_container}>
        <button className={disabled?styles.button_disabled:styles.button} onClick={this.clickHandler}>{label}</button>
      </div>
    )
  }
}

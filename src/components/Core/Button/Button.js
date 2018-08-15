import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Button.less'

/**
 * Cross device compatible button. Should be positioned in the layout with a minimum space of 180px X 56px (determined by setting in `src/styles/grid.less`)
 * @version 0.0.1
 */
export default class Button extends Component {
  static propTypes = {
    /**
     * String that will appear inside the button as its label
     */
    label: PropTypes.string.isRequired,
    /**
     * Callback for user click. Mouse event is passed as a param.
     */
    onClick: PropTypes.func,
    /**
     * Setting this attribute will cause the button to be disabled. Disabled buttons will not fire any user interaction events
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
  }

  render() {
    const {
      label,
      disabled
    } = this.props

    return (
      <div className={styles.button_container}>
        <button 
          className={disabled?styles.button_disabled:styles.button} 
          onClick={this.props.onClick} 
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          disabled={disabled}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          tabIndex="1"
          >
          {label}
        </button>
      </div>
    )
  }
}

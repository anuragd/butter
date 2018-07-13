import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Button.less'

/**
 * Description of Button
 *
 * @version 0.0.1
 * @author [Anurag Dutta](mailto:anudutta@cisco.com)
 */
export default class Button extends Component {
  static propTypes = {
    /**
     * Description of prop "label".
     */
    label: PropTypes.string,
    /**
     * Description of prop "hoverHandler".
     */
    hoverHandler: PropTypes.func,
    /**
     * Description of prop "clickHandler".
     */
    clickHandler: PropTypes.func,
    /**
     * Description of prop "disabled".
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

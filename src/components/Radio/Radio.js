import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Radio.less'

/**
 * Description of Dropdown
 *
 * @version 0.0.1
 * @author [Anurag Dutta](mailto:anudutta@cisco.com)
 */
export default class Radio extends Component {
  static propTypes = {
    /**
     * Description of prop "label".
     */
    label: PropTypes.string,
    /**
     * Description of prop "label".
     */
    changeHandler: PropTypes.func,
    /**
     * Description of prop "options".
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })).isRequired
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

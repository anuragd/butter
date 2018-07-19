import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Dropdown.less'
import { DropdownSVG } from '../../utilities/Icons/Icons'

/**
 * Description of Dropdown
 *
 * @version 0.0.1
 */
export default class Dropdown extends Component {
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
    changeHandler: PropTypes.func,
    /**
     * Description of prop "disabled".
     */
    disabled: PropTypes.bool,
    /**
     * Description of prop "value".
     */
    value: PropTypes.string,
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
      open: false,
      value:props.value?props.value:null
    };
    this.clickHandler = this.clickHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
    this.optionClickHandler = this.optionClickHandler.bind(this)
  }

  clickHandler(e) {
    this.setState({open: !this.state.open})
  }
  
  optionClickHandler(id,value) {
    this.setState({value:value, open:false})
    if(this.props.changeHandler instanceof Function) this.props.changeHandler({id:id, value: value})
  }

  blurHandler(e) {
    this.setState({open: false})
  }

  render() {
    const {
      label,
      options,
      disabled
    } = this.props

    const optionsList = options.map((option) =>
      <li key={option.id} onClick={() => this.optionClickHandler(option.id, option.value)} className={option.disabled?styles.disabled:''}>
        <div className={styles.list_bg}></div>
        <div className={styles.option_label}>{option.value}</div>
      </li>
    )

    return (
      <div className={styles.dropdown_container} onBlur={this.blurHandler} tabIndex="0">
        <div className={this.state.value?styles.focus_label:styles.float_label}>{label}</div>
        <div className={this.state.open?styles.open_list:styles.list}>
          <div className={this.state.open?styles.open_header:(disabled?styles.disabled_header:styles.header)} onClick={this.clickHandler}>
            {this.state.value?'':label}
            <div className={styles.selected_option}>{this.state.value}</div>
            <img className={styles.arrow} src={DropdownSVG} />
          </div>
          <ul className={styles.options}>
            {optionsList}
          </ul>
        </div>
      </div>
    )
  }
}

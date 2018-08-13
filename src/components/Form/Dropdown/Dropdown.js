import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Dropdown.less'
import { DropdownSVG } from '../../../utilities/Icons/Icons'

/**
 * Dropdown component built for user selection when possible options are between 5-20, or when display space is of concern. For less than 5 options, use [Radio](#/Form?id=radio) instead. Greater than 20 options should be avoided as the dropdown can only show 5 options at a time, and should ideally not contain more than 4 scroll lengths of options.
 *
 * This is a [controlled react input](/#/Form).
 * @version 0.0.1
 */
export default class Dropdown extends Component {
  static propTypes = {
    /**
     * Label for the dropdown. Try to keep this within 25 characters
     */
    label: PropTypes.string,
    /**
     * List of options that will appear in the dropdown. Each option is represented by an object with the following shape
     */
    options: PropTypes.arrayOf(PropTypes.shape({
      /**
       *  An unique number representing the option. This can be omitted if you want the component to use it's own internal ids instead
       */
      id: PropTypes.number,
      /**
       * The number or string label for the option
       */
      value: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
      /**
       * Set `disabled` to `true` to disable selection of this option
       */
      disabled: PropTypes.bool
    })).isRequired,
    /**
     * Selected value. Must correspond to the type passed in the `value` property of objects in the options array. Remember to update this value when the `onChange` callback is fired.
     */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Callback fired when the user selects a new option on the dropdown. The callback takes the form of
     * `callback(value)`
     * where `value` is an object with the keys `id` and `value`
     * 
     * __Remember to update the `value` prop everytime this callback is fired__
     */
    onChange: PropTypes.func,
    /**
     * Set this boolean to disable the dropdown component completely
     */
    disabled: PropTypes.bool,
    /**
     * Prop used to render mini version of dropdown inside datepicker component. NOT FOR EXTERNAL USE
     * @ignore
     */
    mini: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false
    };
    this.clickHandler = this.clickHandler.bind(this)
    this.blurHandler = this.blurHandler.bind(this)
    this.optionClickHandler = this.optionClickHandler.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
  }

  clickHandler(e) {
    this.setState({open: !this.state.open})
  }
  
  optionClickHandler(id,value) {
    this.setState({open:false})
    if(this.props.onChange instanceof Function) this.props.onChange({id:id, value: value})
  }

  blurHandler(e) {
    this.setState({open: false})
  }

  render() {
    const {
      label,
      value,
      options,
      disabled,
      mini
    } = this.props

    const optionsList = options.map((option, key) =>
      <li key={option.id?option.id:key} onClick={() => this.optionClickHandler(option.id, option.value)} className={option.disabled?styles.disabled:''}>
        <div className={styles.list_bg}></div>
        <div className={styles.option_label}>{option.value}</div>
      </li>
    )

    return (
      <div className={mini?styles.mini_dropdown_container:styles.dropdown_container} onBlur={this.blurHandler} tabIndex="0">
        <div className={value?styles.focus_label:styles.float_label}>{label}</div>
        <div className={this.state.open?styles.open_list:styles.list}>
          <div className={this.state.open?styles.open_header:(disabled?styles.disabled_header:styles.header)} onClick={this.clickHandler}>
            {value?'':label}
            <div className={styles.selected_option}>{value}</div>
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

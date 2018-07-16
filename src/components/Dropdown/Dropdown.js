import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Dropdown.less'
import svg from '../../assets/icons/dropdown.svg'

/**
 * Description of Dropdown
 *
 * @version 0.0.1
 * @author [Anurag Dutta](mailto:anudutta@cisco.com)
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
      <div className={styles.dropdown_container}>
        <div className={styles.header}>
          <div className={styles.float_label}>{label}</div>
          <img className={styles.arrow} src={svg} />
        </div>
        <ul className={styles.list}>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </div>
    )
  }
}

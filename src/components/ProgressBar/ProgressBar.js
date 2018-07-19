import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

import styles from './ProgressBar.less'
import ProgressGraphics from './ProgressGraphics'

/**
 * Description of ProgressBar
 *
 * @version 0.0.1
 */
export default class ProgressBar extends Component {
  static propTypes = {
    /**
     * Description of prop "label".
     */
    label: PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      
    } = this.props

   

    return (
      <ProgressGraphics width="900px" height="50px"/>
    )
  }
}

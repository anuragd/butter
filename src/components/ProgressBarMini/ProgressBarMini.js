import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

import styles from './ProgressBarMini.less'
import image from '../../assets/images/progressmini.svg'

/**
 * This is a determinate progress bar. Use in width increments of 198px to ensure the consistency of the pattern is maintained
 *
 * @version 0.0.1
 */
export default class ProgressBarMini extends Component {
  static propTypes = {
    /**
     * Large format text displayed above the progress bar
     */
    message: PropTypes.string,
    /**
     * Number between 0-100 denoting percentage progress
     */
    progress: PropTypes.number,
    /**
     * Set this boolean if the process being visualized in the progress bar has failed
     */
    failed: PropTypes.bool,

  }


  render() {
    let progress = this.props.progress
    
   
    return (
      <div className={styles.progress_bar}>
        <div className={styles.progress_message}>{this.props.message} </div>
        <div className={styles.progress_container}>
          <div className={styles.progress_default_bg}></div>
          <div className={this.props.failed?styles.progress_fail_bg:styles.progress_finish_bg} style={{width: progress + "%"}}></div>
          <div className={styles.progress_mask} style={{backgroundImage:`url(${image})`}}></div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'

import styles from './ProgressBar.less'
import ProgressGraphics from './ProgressGraphics'
import { TickSVG } from '../../utilities/Icons/Icons'

/**
 * This is a determinate progress bar. This should only be displayed in a div larger than 1000px x 170px size. Ideally used for full screen progress bars. For small bars, use ProgressBarMini
 *
 * @version 0.0.1
 */
export default class ProgressBar extends Component {
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
    if(this.props.progress > 100 || this.props.progress < 0) {
      progress = progress > 100 ? 100:0
      console.error("Invalid progress value. Must be between 0 - 100")
    }

    let displayValue = progress == 100 ? <img className={styles.tick} src={TickSVG} /> : (this.props.failed?"Failed":progress)
   
    return (
      <div className={styles.progress_bar}>
        <div className={styles.progress_message}>{this.props.message} </div>
        <div className={styles.progress_container}>
          <div className={styles.progress_default_bg}></div>
          <div className={this.props.failed?styles.progress_fail_bg:styles.progress_finish_bg} style={{width: progress + "%"}}></div>
          <ProgressGraphics width="1000px" height="168px" className={styles.progress_graphic}/>
          <div className={progress==100?styles.progress_fin:(this.props.failed?styles.progress_fail_marker:styles.progress_marker)} style={{left: ((10  * progress) - 30)+"px"}}>
            {displayValue}
          </div>
        </div>
      </div>
    )
  }
}

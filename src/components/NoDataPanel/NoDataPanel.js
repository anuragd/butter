import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './NoDataPanel.less'
import svg from '../../assets/icons/nodata.svg'

/**
 * Panel for displaying a note to users that a component has no data to display. It is important that this component is placed inside a container with a definite max-height set, or it will take all of the screen space vertically.
 * @version 0.0.1
 */
export default class NoDataPanel extends Component {
  render() {
    return (
      <div className={styles.no_data_container}>
        <div className={styles.no_data_panel}>
        	<img className={styles.no_data_icon} src={svg} />
        	<div className={styles.no_data_message}>No Data Available</div>
        </div>
      </div>
    )
  }
}

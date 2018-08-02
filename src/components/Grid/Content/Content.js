import React from 'react'
import PropTypes from 'prop-types'

import styles from './Content.less'

export default class Content extends React.Component {

	render() {
		return(
			<div className={styles.DCNContent} {...this.props}>
				{this.props.children}
			</div>
		)
	}

}
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Panel.less'

export default class Panel extends React.Component {

	static propTypes = {
		collapse: PropTypes.shape({
			top: PropTypes.bool,
			right: PropTypes.bool,
			bottom: PropTypes.bool,
			left: PropTypes.bool
		}),
		size: PropTypes.oneOf(['full', 'half', 'quarter', 'threequarter'])
	}

	static defaultProps = {
		collapse: {
			top: null,
			bottom: null,
			right: null,
			left: null
		},
		size: 'full'
	}

	render() {
		let style = {
			width: null,
			paddingTop:this.props.collapse.top?0:null,
			paddingBottom:this.props.collapse.bottom?0:null,
			paddingLeft:this.props.collapse.left?0:null,
			paddingRight:this.props.collapse.right?0:null
		}
		switch(this.props.size) {
			case 'full':
				style.width = '100%'
				break
			case 'threequarter':
				style.width = '75%'
				break
			case 'half':
				style.width = '50%'
				break
			case 'quarter':
				style.width = '25%'
				break
		}

		return(
			<div 
				style={style}
				className={styles.DCNPanel} 
				{...this.props}>
				{this.props.children}
			</div>
		)
	}

}
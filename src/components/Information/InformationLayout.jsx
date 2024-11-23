import styles from './Information.module.css'
import PropTypes from 'prop-types'

export const InformationLayout = ({ text, isGameEnded, isDraw, handleClick }) => {
	return (
		<div className={styles['info-container']}>
			<h1 className={styles.info}>{text}</h1>
			{isGameEnded || isDraw
			?
			<button className={styles['repeat-btn']} onClick={handleClick}>Повторить</button>
			:
			null}
		</div>
	)
}

InformationLayout.propTypes = {
	text: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	handleClick: PropTypes.func,
}



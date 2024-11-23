import styles from './Field.module.css'
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleClick, isGameEnded, winIndexes }) => {

	return (
		<div className={styles['list-buttons']}>
			{field.map((e, i) => <button className={`${styles.button} ${winIndexes.length > 0 && winIndexes.some(e => e === i) ? styles.win : ''}`} key={i} onClick={() => handleClick(i)} disabled={e === '' && !isGameEnded ? false : true}>{e}</button>)}
		</div>
	)
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
	isGameEnded: PropTypes.bool,
	winIndexes: PropTypes.array,
}

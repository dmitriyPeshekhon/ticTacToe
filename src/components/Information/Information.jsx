import styles from './Information.module.css';
import { useState, useEffect } from 'react';
import { store } from '../../redux/store';

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		return store.subscribe(() => setState(store.getState()));
	}, []);

	const { currentPlayer, isGameEnded, isDraw } = state;

	const generateTextInfo = () => {
		if (isDraw) {
			return 'Ничья';
		} else if (isGameEnded) {
			return `Победа: ${currentPlayer}`;
		} else if (!isDraw && !isGameEnded) {
			return `Ходит: ${currentPlayer}`;
		}
	};

	const handleClickRepeat = () => {
		store.dispatch({ type: 'REPEAT_GAME' });
	};

	return (
		<div className={styles['info-container']}>
			<h1 className={styles.info}>{generateTextInfo()}</h1>
			{isGameEnded || isDraw ? (
				<button className={styles['repeat-btn']} onClick={handleClickRepeat}>
					Повторить
				</button>
			) : null}
		</div>
	);
};

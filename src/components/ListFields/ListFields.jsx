import styles from './ListFields.module.css';
import { store } from '../../redux/store';
import { WIN_COMBINATION } from '../../constants';
import { useState, useEffect } from 'react';

export const ListFields = () => {
	const [state, setState] = useState(store.getState());
	const [winIndexes, setWinIndexes] = useState([]);
	const { dispatch, subscribe } = store;

	useEffect(() => {
		return subscribe(() => setState(store.getState()));
	}, []);

	const { currentPlayer, fields, isGameEnded } = state;

	const handleClick = (index) => {
		const changeFields = fields.map((e, i) => (i === index ? currentPlayer : e));

		for (const combination of WIN_COMBINATION) {
			const [a, b, c] = combination;
			if (
				changeFields[a] === currentPlayer &&
				changeFields[b] === currentPlayer &&
				changeFields[c] === currentPlayer
			) {
				dispatch({ type: 'END_GAME', payload: changeFields });
				setTimeout(() => setWinIndexes([a, b, c]), 300);
				setTimeout(() => setWinIndexes([]), 800);
				return;
			}
		}
		if (!changeFields.some((e) => e === '')) {
			dispatch({ type: 'DRAW', payload: changeFields });
			return;
		}
		dispatch({ type: 'USUALY_STEP', payload: changeFields });
	};

	return (
		<div className={styles['list-buttons']}>
			{fields.map((e, i) => (
				<button
					className={`${styles.button} ${winIndexes.length > 0 && winIndexes.some((e) => e === i) ? styles.win : ''}`}
					key={i}
					onClick={() => handleClick(i)}
					disabled={e === '' && !isGameEnded ? false : true}
				>
					{e}
				</button>
			))}
		</div>
	);
};

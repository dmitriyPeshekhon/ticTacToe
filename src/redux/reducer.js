import { PLAYER_1, INITIAL_FIELDS } from '../constants';

const initialState = {
	currentPlayer: PLAYER_1,
	isGameEnded: false,
	isDraw: false,
	fields: INITIAL_FIELDS,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'USUALY_STEP': {
			return {
				...state,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
				fields: payload,
			};
		}
		case 'END_GAME': {
			return { ...state, isGameEnded: true, fields: payload };
		}
		case 'DRAW': {
			return { ...state, isDraw: true, fields: payload };
		}
		case 'REPEAT_GAME': {
			return initialState;
		}

		default:
			return state;
	}
};

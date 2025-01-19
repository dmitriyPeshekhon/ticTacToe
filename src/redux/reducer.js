import { PLAYER_1, INITIAL_FIELDS, PLAYER_2 } from '../constants';

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
				currentPlayer: state.currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1,
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

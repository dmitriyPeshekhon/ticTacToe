import { useState } from 'react';
import { AppLayout } from './AppLayout';

function useAllState() {
	const initialField = [
		'', '', '',
		'', '', '',
		'', '', '',
	]

	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(initialField)

	return {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		initialField,
	}
}

export const AppContainer = () => {
	const allState = useAllState()

	return <AppLayout {...allState}/>
};

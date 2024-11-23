import { FieldLayout } from './FieldLayout'
import PropTypes from 'prop-types'
import { useState } from 'react';

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];

export const FieldContainer = ({ currentPlayer, setCurrentPlayer, field, setField, setIsDraw, isGameEnded, setIsGameEnded }) => {

	const [winIndexes, setWinIndexes] = useState([])

	function handleClick(index) {
		const changeFields = field.map((e, i) => i === index ? currentPlayer : e)

		for (const combination of WIN_PATTERNS) {
			const [a, b, c] = combination
			if (changeFields[a] === currentPlayer && changeFields[b] === currentPlayer && changeFields[c] === currentPlayer) {
				setIsGameEnded(true)
				setField(changeFields)
				setTimeout(() => setWinIndexes([a, b, c]), 300)
				setTimeout(() => setWinIndexes([]), 800)
				return
			}
		}

		if (!changeFields.some(e => e === '')) {
			setField(changeFields)
			setIsDraw(true)
			return
		}

		setField(changeFields)

		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
	}

	return (
		<FieldLayout field={field} isGameEnded={isGameEnded} handleClick={handleClick} winIndexes={winIndexes}/>
	)
}

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
}

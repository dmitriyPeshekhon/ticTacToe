import { InformationLayout } from "./InformationLayout";
import PropTypes from "prop-types";

export const InformationContainer = ({ ...rest }) => {

	function generateTextInfo() {
		if (rest.isDraw) {
			return 'Ничья'
		} else if (rest.isGameEnded) {
			return `Победа: ${rest.currentPlayer}`
		} else if (!rest.isDraw && !rest.isGameEnded) {
			return `Ходит: ${rest.currentPlayer}`
		}
	}

	function repeat() {
		rest.setCurrentPlayer('X')
		rest.setField(rest.initialField)
		rest.setIsGameEnded(false)
		rest.setIsDraw(false)
	}

	return <InformationLayout text={generateTextInfo()} isGameEnded={rest.isGameEnded} isDraw={rest.isDraw} handleClick={repeat}/>
}

InformationContainer.propTypes = {
	rest: PropTypes.object,
}

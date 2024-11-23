import styles from './App.module.css';
import { FieldContainer, InformationContainer } from '../index'
import PropTypes from 'prop-types';

export const AppLayout = ({ ...rest }) => {
	return (
		<div className={styles.container}>
			<div>
				<InformationContainer {...rest}/>
				<FieldContainer {...rest}/>
			</div>
		</div>

	)
}

AppLayout.propTypes = {
	rest: PropTypes.object,
}

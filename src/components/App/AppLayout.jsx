import styles from './App.module.css';
import { FieldContainer, InformationLayout } from '../index'

export const AppLayout = () => {
	return (
		<>
			<div className={styles.app}>app</div>
			<FieldContainer/>
			<InformationLayout/>
		</>
	)
}

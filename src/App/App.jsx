import styles from './App.module.css';
import { Information, ListFields } from '../components';

export const App = () => {
	return (
		<div className={styles.container}>
			<div>
				<Information />
				<ListFields />
			</div>
		</div>
	);
};

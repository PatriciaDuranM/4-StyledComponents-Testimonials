import Card from './components/Card/Card';
import Main from './components/Main/Main';
import Grid from './components/Grid/Grid';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Main>
				<Grid>
					<Card />
				</Grid>
			</Main>
		</>
	);
};

export default App;

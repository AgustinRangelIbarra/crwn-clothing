import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component.jsx";
import Shop from './Pages/Shop/Shop';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path='/shop' component={Shop} />
			</Switch>
		</div>
	);
}

export default App;

import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component.jsx";
import { Switch, Route } from "react-router-dom";

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
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;

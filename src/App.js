import { useEffect } from "react";
import Header from "./components/Header";

function App() {
	useEffect(() => {
		const importTE = async () => {
			await import("tw-elements");
		};
		importTE();
	}, []);

	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;

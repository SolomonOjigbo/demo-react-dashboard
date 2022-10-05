import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Sidebar />
			</div>
		</BrowserRouter>
	);
}

export default App;

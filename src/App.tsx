import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Expenses from "./pages/Expenses/Expenses";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Sidebar />
				<Expenses />
			</div>
		</BrowserRouter>
	);
}

export default App;

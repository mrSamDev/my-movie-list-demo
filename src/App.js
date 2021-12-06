import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/home"));
const Layout = lazy(() => import("./components/shared/layout"));
function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Layout>
		</Suspense>
	);
}

export default App;

import Header from "../header";

const Layout = ({ children }) => {
	return (
		<div className="bg-black">
			<Header />
			{children}
		</div>
	);
};

export default Layout;

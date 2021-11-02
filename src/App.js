import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Products />
			<Services />
			<AboutUs />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;

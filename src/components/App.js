import Search from '../components/Search';
import NavbarComponents from '../components/Navbar';
import Banner from '../components/Banner';
import Recommended from '../components/Recommended';
import Topic from '../components/Topics';
import Popular from '../components/Popular';
import Footer from '../components/Footer'; 

function App() {
    return (<>
        <Search />
        <NavbarComponents />
        <Banner />
        <Recommended />
        <Topic />
        <Popular />
        <Footer />
    </>)
}

export default App
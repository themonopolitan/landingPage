import Navbar from "../components/Navbar";
import CarrusellBaner from '../components/CarrusellBaner'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {

    return <>
        <div className="fixed w-screen z-10">
            <CarrusellBaner />
            <Navbar />
        </div>
        <div className="mb-20" />
        {children}
        <Footer />
    </>
}

export default MainLayout;


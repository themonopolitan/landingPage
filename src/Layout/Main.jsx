import Navbar from "../components/Navbar";
import CarrusellBaner from '../components/CarrusellBaner'

const MainLayout = ({ children }) => {

    return <>
        <div className="fixed w-screen z-10">
            <CarrusellBaner />
            <Navbar />
        </div>
        <div className="mb-20" />
        {children}
    </>
}

export default MainLayout;


import Navbar from "../components/Navbar";
import CarrusellBaner from '../components/CarrusellBaner'

const MainLayout = ({ children }) => {

    return <>
        <CarrusellBaner />
        <Navbar />
        {children}
    </>
}

export default MainLayout;
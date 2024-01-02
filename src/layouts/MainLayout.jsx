import { Outlet } from 'react-router-dom';
import TitleAsciiArt from '../components/TitleAsciiArt'
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <>
            <TitleAsciiArt/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default MainLayout;
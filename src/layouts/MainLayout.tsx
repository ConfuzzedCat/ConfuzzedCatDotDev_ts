import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MainLayout() {
    return (
        <div className="MainLayout JetBrainsMono">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default MainLayout;
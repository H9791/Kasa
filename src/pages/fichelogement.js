import Header from '../components/header/header';
import Underheader from '../components/underheader/underheader';
import Footer from '../components/footer/footer';
import { useLocation } from 'react-router-dom';
import Carousel from '../components/carousel/carousel';

export default function Fichelogement() {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return (
        <div>
            <Header />
            <Carousel slides={state.pictures}/>
            
            <Footer />
        </div>
    );
}


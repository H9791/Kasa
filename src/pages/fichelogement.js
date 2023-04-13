import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useLocation } from 'react-router-dom';
import Carousel from '../components/carousel/carousel';
import Infologement from '../components/infologement/infologement';

export default function Fichelogement() {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return (
        <div>
            <Header />
            <Carousel slides={state.pictures}/>
            <Infologement info={state}/>
            <Footer />
        </div>
    );
}


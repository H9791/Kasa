import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useLocation } from 'react-router-dom';
import Gallery from '../components/gallery/gallery';
import Infologement from '../components/infologement/infologement';

export default function Fichelogement() {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return (
        <div>
            <Header />
            <Gallery slides={state.pictures}/>
            <Infologement info={state}/>
            <Footer />
        </div>
    );
}


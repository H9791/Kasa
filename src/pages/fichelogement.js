import Header from '../components/header/header';
import Underheader from '../components/underheader/underheader';
import Footer from '../components/footer/footer';
import { useLocation } from 'react-router-dom';

export default function Fichelogement() {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    return (
        <div>
            <Header />
            <Underheader cover={1} />
            <h1>fiche logement</h1>
            <h1>title: {state.title}</h1>
            <Footer />
        </div>
    );
}


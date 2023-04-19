import Header from '../components/header/header';
import Footer from '../components/footer/footer';
/*import { useLocation } from 'react-router-dom';*/
import { useParams } from 'react-router-dom';
import Gallery from '../components/gallery/gallery';
import Infologement from '../components/infologement/infologement';
import houses from '../assets/logements.json';
import Nopage from './nopage';
export default function Fichelogement() {
    
    const { houseId } = useParams();

    let info = houses.find(element => element.id === houseId);

    return (
        info?(
        <div>
            <Header />
            <Gallery slides={info.pictures}/>
            <Infologement info={info}/>
            <Footer />
        </div>):(
            /*bad url, house doesn't exist, show error page*/
            <Nopage />
        )
    );
}


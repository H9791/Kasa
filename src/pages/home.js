import Header from '../components/header/header';
import Underheader from '../components/underheader/underheader';
import Footer from '../components/footer/footer';
import Thumbnails from '../components/thumbnails/thumbnails';

function Home() {
    return (
        <div>
            <Header />
            <Underheader cover={1}/>
            <Thumbnails />
            <Footer />
        </div>
    );
}

export default Home;
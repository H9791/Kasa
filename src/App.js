import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Apropos from './pages/apropos';
import Nopage from './pages/nopage';
import Fichelogement from './pages/fichelogement';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />}/>
                    <Route path="a-propos" element={<Apropos />}/>
                    <Route path="logement" element={<Fichelogement />}/>
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

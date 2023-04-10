import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Apropos from './pages/apropos';
import Page404 from './pages/page404';
import Fichelogement from './pages/fichelogement';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />}/>
                    <Route path="a-propos" element={<Apropos />}/>
                    <Route path="*" element={<Page404/>} />
                    <Route path="logement" element={<Fichelogement />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

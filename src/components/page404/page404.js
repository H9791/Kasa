import './page404.css';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
        <>
            <main id="main404">
                <h1>404</h1>
                <h2>Oups! la page que <span>vous demandez n'existe pas.</span></h2>
                <Link to="/">Retourner sue la page d'accueil.</Link>
            </main>
        </>
    )
}
import { Link } from "react-router-dom";

import styles from './LayoutCss/Navbar.module.css'

import img from '../../img/icone.png'

import Identificador from '../Utilitarios/Identificador'

function Navbar() {
    return (
        <nav className={styles.formatacao}>
            <Link to='/'>
                <img src={img} alt="inicio" className={styles.imagem_resolucao}/>
            </Link>

            <ul className={styles.lista}>
                <li>
                    <Identificador value='Home' link='/'/>
                </li>

                <li>
                    <Identificador value='Cards' link='/cards'/>
                </li>

                <li>
                    <Identificador value='Criar' link='create'/>
                </li>

                <li>
                    <Identificador value='Settings' link='settings'/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
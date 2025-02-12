import { Link } from "react-router-dom";

import styles from './UtilitariosCss/ItensCard.module.css'

function ItensCard( {id, nome, detalhes, nota, cap, descricao} ) {
    return (
        <div className={styles.corpo}>
            <div className={styles.titulo}>
                <h3>{nome}</h3>
            </div>

            <div className={styles.detalhes}>
                <p className={`${styles.exceto}  ${styles[detalhes+'a']}`}><span className={`${styles.bolinha} ${styles[detalhes.toLowerCase()]}`}></span> {detalhes}</p>

                <p className={styles.caps}>Pg. {cap}</p>
            </div>

            <div className={styles.descricao}>
                {descricao}
            </div>

            <div className={styles.nota}>
                <p className={styles['cor'+nota]}>Nota: {nota}</p>

                <Link to='/' className={styles.botao}>
                    <p>Editar</p>
                </Link>
            </div>
        </div>
    )
}

export default ItensCard
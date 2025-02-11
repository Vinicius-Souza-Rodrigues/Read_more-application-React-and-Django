import { Link } from "react-router-dom";

import styles from "./UtilitariosCss/BotaoCriar.module.css"
import Identificador from "./Identificador";

function BotaoCriar( {value} ) {
    return (
        <div className={styles.botao}>
            <Identificador value={value} link='/create'/>
        </div>
    )
}

export default BotaoCriar
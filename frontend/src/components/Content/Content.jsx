import { useEffect, useState } from "react"

import styles from './ContentCss/Content.module.css'

import ItensCard from "../Utilitarios/ItensCard"
import BotaoCriar from "../Utilitarios/BotaoCriar"

function Content() {

    const [Message, setMessage] = useState(null)
    const [Itens, setItens] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/itens/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((rsp) => rsp.json())
          .then((data) => {
            console.log(data)
            setItens(data)
          })
          .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div className={styles.titulo}>
                <h2>Leituras lidas e capitulos parados</h2>

                <BotaoCriar value='Criar Anotação'/>
            </div>
            
            <div className={styles.posicionamento}>
                {Itens.map((item) => (
                    <ItensCard 
                        id={item.id}
                        nome={item.nome}
                        detalhes={item.detalhes}
                        nota={item.nota}
                        cap={item.cap}
                        descricao={item.descricao}
                    />
                ))}
            </div>
        </div>
    )
}

export default Content
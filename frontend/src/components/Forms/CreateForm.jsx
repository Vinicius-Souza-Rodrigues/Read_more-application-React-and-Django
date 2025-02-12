import { useState } from "react"
import SubmitButtom from "../Utilitarios/SubmitButtom"

function CreateForm({btnText,  ItensData}) {

    const [service, setservice] = useState( ItensData || {})

    function submit(e) {
        console.log(service)
        e.preventDefault()
    }

    function handleOnchange(e) {
        setservice({...service, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" placeholder="Digite o nome" name="nome" handleOnchange={handleOnchange} value={service.nome ? service.nome : null }/>
                </div>

                <div>
                    <label htmlFor="select"></label>
                    <select name="select">A
                        <option value="em_andamento">Em andamento</option>
                        <option value="finalizado">Finalizado</option>
                        <option value="dropado">Dropado</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="cap">Página/Capitulo:</label>
                    <input type="number" placeholder="Digite a página parada" name="cap"/>
                </div>

                <div>
                    <label htmlFor="descricao">Breve descrição:</label>
                    <input type="text" placeholder="Digite a descrição aqui" name="descricao" />
                </div>
            
                <div>
                    <label htmlFor='nota'>Digite a nota de 0 a 10:</label>
                    <input type="number" placeholder="digite a nota aqui" name="nota" />
                </div>
                
                <div>
                    <SubmitButtom text={btnText}/>
                </div>
            </form>
            
        </div>
    )
}

export default CreateForm
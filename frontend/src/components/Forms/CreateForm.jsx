import InputModel from "../Utilitarios/InputModel"

function CreateForm() {
    return (
        <div>
            <div>
                <InputModel type='text' placeholder='teste' value='' name='nome1'/>
            </div>

            <div>
                <InputModel type='text' placeholder='teste1' value='' name='nome2'/>
            </div>
        </div>
    )
}

export default CreateForm
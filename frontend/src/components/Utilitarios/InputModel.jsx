function InputModel({type, placeholder, value, name, ProjectData}) {
    return(
        <div>
            <label htmlFor={name}>{name}</label>
            <input type={type} placeholder={placeholder} name={name} value={ProjectData ? value=ProjectData : null}/>
        </div>
    )
}

export default InputModel
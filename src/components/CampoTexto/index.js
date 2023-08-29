import './CampoTexto.css'

const CampoTexto = (props) => { //recebe arrow function com propriedades como parametro
    return (
        //JSX
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input placeholder={props.placeholder}/>
        </div>
    )
}// retorna label e placeholder do input de acordo com a string que atribuimos a essa propriedades do componente no arquivo da nossa aplicação react

export default CampoTexto
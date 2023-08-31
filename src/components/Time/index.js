import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corDeFundo = props.corSecundaria
    return(
        <section className='time' style={{backgroundColor: corDeFundo}}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        <Colaborador />
        </section>
    )
}

export default Time
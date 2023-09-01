import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corDeFundo = props.corSecundaria
    return(
        (props.colaboradores.length) > 0 && <section className='time' style={{backgroundColor: corDeFundo}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} /> )}
            </div>
        </section>
    )
}// o time com colaboradores é criado apenas se o tamanho da lista de colaboradores do time for maior que 0

export default Time
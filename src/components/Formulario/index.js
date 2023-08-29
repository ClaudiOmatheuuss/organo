import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]
    const aoEnviar = (evento) => {
        evento.preventDefault()
        console.log("O form foi enviado!")
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoEnviar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/> 
                <Botao texto="Criar card" />
            </form>
        </section>
    )
}

export default Formulario
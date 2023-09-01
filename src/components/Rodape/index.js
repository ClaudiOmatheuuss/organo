import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='secao-rodape'>
            <div className='rodape__elementos'>
                <div className='redes'>
                    <img src='/images/fb.png' alt='Facebook do organo'/>
                    <img src='/images/tw.png' alt='Twitter do organo'/>
                    <a href='https://www.instagram.com/claudiomatheuuss/' target='_blank'><img src='/images/ig.png' alt='Instagram do organo'/></a>
                </div>
                <img src='/images/logo.png' alt='Logo da organo'/>
                <a className='criador' href='https://github.com/ClaudiOmatheuuss' target='_blank'><p>Desenvolvido por Claudio.</p></a>
            </div>
        </footer>
    )
}

export default Rodape
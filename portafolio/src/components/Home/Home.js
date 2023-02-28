import me from '../../img/me.png';

export default function Home() {
    return (       
        <section className='aboutInicio'>
            <div>
                <header className='aboutImg'>
                    <h1>Ingeniero en Sistemas Computacionales</h1>
                    <h2><strong>Desarrollador</strong></h2>
                    <img src={me} alt="me" className='HomePhoto'></img>
                    <h1>Jose Ivan Perez Ugalde</h1>
                </header>
            </div>
        </section>
    )
}
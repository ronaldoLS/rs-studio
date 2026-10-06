import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
        <a href="#">RS Studio</a>

        <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
</header>

    <main>

        <section id="hero">
            <h1>RS Studio</h1>
        </section>

        <section id="sobre">
            <h1>Sobre</h1>
        </section>

        <section id="servicos">
            <h1>Serviços</h1>
        </section>

        <section id="projetos">
            <h1>Projetos</h1>
        </section>

        <section id="contato">
            <h1>Contato</h1>
        </section>

    </main>

    <footer>
        <!-- Footer -->
    </footer>

`

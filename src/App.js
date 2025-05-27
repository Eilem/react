// declaraçao - criação da função para 
function Menu({}){
    //@todo ver necessidade de receber itens do menu por parametro 
    return 
        <nav>
            <a href="sobre.html">Sobre</a>
            <a href="formacao.html">Formação</a>
            <a href="#">Aleatorio</a>
            <a href="mais.html">ETC e tal</a>
            <a href="https://github.com/Eilem">Git</a>
        </nav>
}

//exportando  a App
export default function App(){
    return <Menu/>
}

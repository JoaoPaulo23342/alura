import CampoTexto from "../CampoTexto";
import "./formulario.css";

const formulario = () => {
    return (
        <section>
            <form>
            <CampoTexto label="Pessoas" placeholder="Digite O número de Pessoas"/>
            <CampoTexto label="Cargo dos Programadores (junior/Pleno/Sênior" placeholder="Digite o seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Url Da Imagem"/>
            <CampoTexto label="Time" placeholder="Digite o seu Time"/>
            <CampoTexto label="Programadores" placeholder="Digite o número de programadores"/>
            <CampoTexto label="Analistas de Dados" placeholder="Digite o número de Analistas"/>
            <CampoTexto label="Analistas de Sistemas" placeholder="Digite o número de Analistas de Sistemas"/>
            </form>
        </section>
    );
};

export default formulario;

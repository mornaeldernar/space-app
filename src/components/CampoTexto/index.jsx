import {styled} from "styled-components";
import search from '../../assets/search.png';

const DivEstilizada = styled.div`
    position: relative;
    display: inline-block;
`;
const InputEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #d9d9d9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`;

const LupaImg = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({setFiltro}) => {
    return (<DivEstilizada>
        <InputEstilizado placeholder="¿Qué estas buscando?" onChange={(evento) => { setFiltro(evento.target.value)}} type="text"/>
        <LupaImg src={search} alt="Buscar"/>
    </DivEstilizada>)
}
export default CampoTexto;
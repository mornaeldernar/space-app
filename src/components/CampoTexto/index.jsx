import { useContext, useRef } from "react";
import {styled} from "styled-components";
import search from '../../assets/search.png';
import { GlobalContext } from "../../context/GlobalContext";

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

const CampoTexto = () => {
    const cajaConsulta = useRef(null);
    const {dispatch} = useContext(GlobalContext);
    
    return (<DivEstilizada>
        <InputEstilizado ref={cajaConsulta} placeholder="¿Qué estas buscando?"  type="text"/>
        <LupaImg src={search} alt="Buscar" onClick={() => {
            dispatch({type:'SET_CONSULTA', payload: cajaConsulta.current.value})
        }}/>
    </DivEstilizada>)
}
export default CampoTexto;
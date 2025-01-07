import styled from "styled-components";
import BotonIcono from "../../BotonIcono";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? "90%" : "460px")};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: "GandhiSansBold";
        }
        h4 {
            flex-grow: 1;
        }
        h3,h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Imagen = ({foto, expandida=false}) => {

    const {dispatch } = useContext(GlobalContext);
    const iconoFavorito = !foto.favorita ? "/iconos/favorito.png" : "/iconos/favorito-activo.png";
    
    return <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.titulo} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Footer>
                <h4>{foto.fuente}</h4>
                <BotonIcono onClick={()=>dispatch({type:'ALTERNAR_FAVORITO', payload: foto})}>
                    <img src={iconoFavorito} alt="favorito"/>
                </BotonIcono>
                {!expandida && <BotonIcono aria-hidden={expandida} onClick={()=> dispatch({ type: 'SET_FOTO_SELECCIONADA',payload:foto})}>
                    <img src="/iconos/expandir.png" alt="expandir"/>
                </BotonIcono>}
            </Footer>
        </figcaption>
    </Figure>
}
export default Imagen;
import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img.logo {
        width: 212px;
    }
`;
const Header = () => {
    return (<HeaderEstilizado>
        <img src="img/logo.png" alt="Logo de Space App" className="logo"/>
        <CampoTexto/>
    </HeaderEstilizado>);
}
export default Header;
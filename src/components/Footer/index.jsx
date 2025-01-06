import styled from "styled-components";

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`
const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        display: inline-block;
        margin-right: 32px;
        a{
            img{
                height: 60px;
            }
        }
    }
`
const FooterTexto = styled.div`
    font-size: 16px;
    color: white;
    margin: 0;
`

const Footer = () => {
    return <FooterEstilizado>
        <IconoContainer>
            <li>
                <a href="#">
                    <img src="/img/redes/facebook.png" alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/img/redes/twitter.png" alt="" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/img/redes/instagram.png" alt="" />
                </a>
            </li>
        </IconoContainer>
        <FooterTexto>
            Desarrollado por Rafael Jimenez
        </FooterTexto>
    </FooterEstilizado>
}
export default Footer;
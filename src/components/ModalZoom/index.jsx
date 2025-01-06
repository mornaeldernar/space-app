import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";

const Overlay = styled.div`
    background-color:rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
const DialogEstilizado = styled.dialog`
    position:absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;
const ModalZoom = ({ foto, close, alAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay>
                    <DialogEstilizado open={!!foto} onClose={close}>
                        <Imagen 
                            expandida={true}
                            foto={foto} 
                            alAlternarFavorito={alAlternarFavorito} 
                        />
                        <form method="dialog">
                            <BotonIcono formMethod="dialog">
                                <img src="/iconos/cerrar.png" alt="Cerrar dialogo" />
                            </BotonIcono>
                        </form>
                    </DialogEstilizado>
                </Overlay>
            </>
            }
        </>
    )
}
export default ModalZoom;
import Tags from './Tags';
import Populares from './Populares';
import Titulo from '../Titulo';
import styled from 'styled-components';
import Imagen from './Imagen';


const GaleriaContainer = styled.div`
    display: flex;
`;
const SeccionFluida = styled.section`
    flex-grow: 1;
`;
const ImagenContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({fotos = [], setTag, alSeleccionarFoto, alAlternarFavorito }) => {
    return (<>
        <Tags setTag={setTag} />
        <GaleriaContainer>
            <SeccionFluida>
                <Titulo>Navegue por la galería</Titulo>
                <ImagenContainer>
                {
                    fotos.map((foto) => {
                        return <Imagen 
                        alAlternarFavorito={alAlternarFavorito}
                        alSolicitarZoom={alSeleccionarFoto}
                        foto={foto} 
                        key={foto.id}/>
                    })
                }
                </ImagenContainer>
            </SeccionFluida>
            <Populares/>
        </GaleriaContainer>
    </>)
}
export default Galeria;
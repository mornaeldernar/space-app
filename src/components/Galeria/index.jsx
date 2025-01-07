import Tags from './Tags';
import Populares from './Populares';
import Titulo from '../Titulo';
import styled from 'styled-components';
import Imagen from './Imagen';
import { useContext } from 'react';
import Cargando from '../Cargando';
import { GlobalContext } from '../../context/GlobalContext';


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

const Galeria = () => {

    //const { consulta, fotosDeGaleria,setFotoSeleccionada,alAlternarFavorito} = useContext(GlobalContext);
    const { state } = useContext(GlobalContext);
    
    return (
        state.fotosDeGaleria.length == 0 ?
            <Cargando></Cargando> :
            <>
                <Tags />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galería</Titulo>
                        <ImagenContainer>
                            {
                                state.fotosDeGaleria
                                    .filter(foto => {
                                        return state.consulta == '' || foto.titulo.toLocaleLowerCase()
                                            .normalize("NFD").replace(/\p{Diacritic}/gu, "").
                                            includes(state.consulta.toLocaleLowerCase()
                                                .normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                                    })
                                    .map((foto) => {
                                        return <Imagen
                                            foto={foto}
                                            key={foto.id} />
                                    })
                            }
                        </ImagenContainer>
                    </SeccionFluida>
                    <Populares />
                </GaleriaContainer>
            </>)
}
export default Galeria;
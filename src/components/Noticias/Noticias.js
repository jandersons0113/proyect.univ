import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import {
    WorksContainer,
    WorksContent,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    Imges,
    MenuLink,
    WorCardTitle,
    WorksCardTitle,
    Img,
    Imgw,
    WorksCardText

} from './Noticias.style';
import P12 from '../../images/foto12.jpg';
import NRM1 from '../../images/NRM1.jpg';
import NRM2 from '../../images/NRM2.jpg';
import NRM3 from '../../images/NRM3.jpg';
import NRM4 from '../../images/NRM4.jpg';
import LN from '../../images/LN.png';
const Noticias = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div>
            <WorksContent>
            <WorksContainer>
            <WorCardTitle> <Imgw src={LN}/> NOTICIAS </WorCardTitle>
            <Img src={P12}/> </WorksContainer>
                
                 
                    <WorksCardContent>
                        <WorksCard>
                        <Imges src={NRM1}/> 
    
                            <WorksCardTitle>REGRESO A CLASES</WorksCardTitle>
                            <WorksCardText>
                            “Todo es cuestión de que el comité de salud actualice y cuando diga qué hay condiciones para regresar a clases les avisaremos. Nuestros niños y niñas es lo más preciado que tenemos y será lo último que va a regresar a la nueva normalidad”
                            </WorksCardText>
                            <MenuLink onClick={closeMenu} to="/regreso">Ver mas ..</MenuLink>

                        </WorksCard>
                        
                        <WorksCard>
                        <Imges src={NRM2}/> 
                            <WorksCardTitle>JOVENES LLEGAN A LA NASA</WorksCardTitle>
                            <WorksCardText>
                            “Un grupo de estudiantes del 'Grupo Apolo' viajará este 20 de junio a la NASA en Virginia, Estados Unidos, donde presenciarán el lanzamiento del cohete 'Terrier Orión Improved' que llevará al espacio por primera vez dos experimentos colombianos. ”
                            </WorksCardText>
                            <MenuLink onClick={closeMenu} to="/nasa">Ver mas ..</MenuLink>

                        </WorksCard>
                        <WorksCard>
                        <Imges src={NRM3}/> 
                            <WorksCardTitle>CAMINO A LA COPA</WorksCardTitle>

                            <WorksCardText>
                            “INVITACION.”
                            “Todos cordialmente invitados a la copa que se jugara el sabado 15 de agosto
                            a apoyar neustro equipo”
                            </WorksCardText>
                            

                        </WorksCard>
                        <WorksCard>
                        <Imges src={NRM4}/> 
                            <WorksCardTitle>NIÑOS A LA CIENCIA</WorksCardTitle>
                            <WorksCardText>
                            “el 14 de septiembre se llevara a cabo el V encuentro de ciencias .” 
                            </WorksCardText>
                           

                        </WorksCard>
                    </WorksCardContent>
                
            </WorksContent>
            
        </div>
    )
}

export default Noticias;

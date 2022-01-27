import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import {
    WorksContainer,
    WorksContent,
    WorksCardContent,
    WorksCard,
    WorsCard,
    WorksIconContainer,
    Imges,
    Img,
    Imgw,
    Imger,
    WorCardTitle,
    NavLogo,
    MenuIcon,

    WorksCardTitle,
    WorksCardText
} from './works.styles';
import P1 from '../../images/org.jpg';
import LO from '../../images/LO.jpg';
import LC from '../../images/LC.jpg';
import P12 from '../../images/foto12.jpg';
import NRM52 from '../../images/NRM521.jpeg';
const Works = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth<= 1000){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    
    return (
        <div>
          
            <WorksContent>
            <Imger src={NRM52}/>
            
                <WorksContainer>
                    <WorksCardContent>
                        <WorksCard>
                
                            <WorksCardTitle>MISION</WorksCardTitle>
                            <WorksCardText>
                            UNIVERSIDAD AUTONOMA DE NEIVA tiene como Misión, formar mediante un modelo basado en competencias,
                             a Profesionales Técnicos y Profesionales , capacita
                             y evalúa con fines de certificación de competencias laborales y servicios 
                            tecnológicos para atender las necesidades del sector productivo del país..
                            </WorksCardText>
                        </WorksCard>
                        <WorksCardText></WorksCardText>
  
                       
                        
                        <WorksCard>
                           
                            <WorksCardTitle>VISION</WorksCardTitle>
                            <WorksCardText>
                            UNIVERSIDAD AUTONOMA DE NEIVA  líder en la  formación de Profesionales Técnicos y Profesionales
                             Técnicos de neiva, que cursan programas reconocidos, basados en el 
                             Modelo Dual y que egresan con competencias laborales y valores sociales que les 
                             permiten ser competitivos en el mercado laboral y continuar estudios superiores.. 
                            </WorksCardText>
                        </WorksCard>
                        
                    </WorksCardContent>
                </WorksContainer>
            </WorksContent>
            
        </div>
    )
}

export default Works;

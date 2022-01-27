import {OutlineButton} from '../../Globalstyles';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
    WorksContainer,
    WorksContent,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    Imge,
    WorksCardTitle,
    MenuItemBtn,
    MenuLinkBtn,
    WorksCardText,
    MenuLink,

    
   
  



} from './Maestros.style';
import P1 from '../../images/p1.jpg';
import P2 from '../../images/p2.jpg';
import P3 from '../../images/p3.jpg';
import P4 from '../../images/p4.jpg';
import P5 from '../../images/p5.jpg';
import P6 from '../../images/p6.jpg';
import P7 from '../../images/p7.jpg';
import P8 from '../../images/p8.jpg';
import P9 from '../../images/foto9.jpg';
import P10 from '../../images/foto10.jpg';
import P11 from '../../images/foto11.jpg';
import P12 from '../../images/foto12.jpg';

import LN from '../../images/LN.png';
const Maestros = () => {
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
        <RecipeTitle>BIENVENIDO</RecipeTitle>
            <WorksContainer>
            
                <WorksCardContent>
                
                    <WorksCard>
                        
                        <MenuLink onClick={closeMenu} to="/entra"><Imge src={P1}/> </MenuLink>
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle>ADMINISTRATIVO</WorksCardTitle>

                        
                    </WorksCard>
                    
                    <WorksCard>
                    <MenuLink onClick={closeMenu} to="/entrae"><Imge src={P2}/> </MenuLink>
                        <WorksCardTitle> ESTUDIANTES</WorksCardTitle>
                        </WorksCard>
                    
                </WorksCardContent>
            </WorksContainer>
            <WorksContainer></WorksContainer>
        </WorksContent>
       
       
        
        
      
    </div>
    );
}

export default Maestros;

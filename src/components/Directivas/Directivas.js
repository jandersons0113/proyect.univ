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
    
    WorCardTi,
    Imgs,
    Imgq,
    Imgse,
    WorksCardText

    
   
  



} from './Directivas.style';
import FD1 from '../../images/FD1.jpg';
import FD2 from '../../images/FD2.jpg';
import FD3 from '../../images/FD3.jpg';
import P4 from '../../images/foto4.jpg';
import P5 from '../../images/foto5.jpg';
import P6 from '../../images/foto6.jpg';
import P7 from '../../images/foto7.jpg';
import P8 from '../../images/foto8.jpg';
import P9 from '../../images/foto9.jpg';
import P10 from '../../images/foto10.jpg';
import P11 from '../../images/foto11.jpg';
import P12 from '../../images/foto12.jpg';
import LD from '../../images/LD.png';

import LN from '../../images/LN.png';
const Directivas = () => {
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
        <WorksContainer> 
            <WorCardTi> 
            
                
            <Imgs src={LD}/>
                DIRECTIVAS </WorCardTi>
            <Imgq src={P12}/> </WorksContainer>

        
            <WorksContainer>
            
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={FD1}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle>  <Imgse src={LD}/> JHON SOLEDAD</WorksCardTitle>
                        <WorksCardText>
                            DIRECTOR.
                            
                        </WorksCardText>
                    </WorksCard>
                    
                    
                    
                    
                </WorksCardContent>
            </WorksContainer>
        <WorksContainer>
            
                <WorksCardContent>
                    <WorksCard>
                        <Imge src={FD2}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle><Imgse src={LD}/>ERIKA GONZALEZ</WorksCardTitle>
                        <WorksCardText>
                            CORDINADOR
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={FD3}/>  
                        <WorksCardTitle><Imgse src={LD}/>SARA ROJAS</WorksCardTitle>
                        <WorksCardText>
                           PSICOLOGA. 
                        </WorksCardText>
                    </WorksCard>
                
                </WorksCardContent>
            </WorksContainer>
        </WorksContent>
        <WorksContent>
        <WorksContent>
        </WorksContent>
        </WorksContent>
        <WorksContent>
        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary>VOLVER</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary bigFont onClick={closeMenu}>VOLVER</Button>
                                    </MenuLinkBtn>
                                )
                                }

                                
                            </MenuItemBtn>
                            </WorksContent>
    </div>
    );
}

export default Directivas;

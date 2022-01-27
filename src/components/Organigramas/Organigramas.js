
import ChickenImg from '../../images/Big-chicken.svg';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {OutlineButton} from '../../Globalstyles';
import {Button} from '../../Globalstyles';
import {
    MealsContainer,
    MealsWrapper,
    MealsImage,
    Imge,
    MealsContent,
    WorksContainer,
    WorCardTi,
    Imgs,
    Imgq,
    MealsContentTitle,
    MealsContentText,
    MealsContentItems,
    MealsContentList,
    MealsContentDetails,
    MealsContentIcon,
    MealsContentCategory,
    MealsContentBtn,
   
 
    MenuItemBtn,
    MenuLinkBtn,
    WorksCardText
} from './Organigramas.styles';
import HR from '../../images/cronograma.png';
import LH from '../../images/LO.jpg';
import P12 from '../../images/foto12.jpg';
function Organigramas() {
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
              <WorksContainer> 
            <WorCardTi> 
            
                
            <Imgs src={LH}/>
                 HORARIO </WorCardTi>
            <Imgq src={P12}/> </WorksContainer>
           <MealsContent>
           <Imge src={HR}/>
                        <MealsContentText>
                        
                        
                        </MealsContentText>
        

                        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/">
                                        <Button primary>REGRESAR</Button>
                                    </MenuLinkBtn>
                                    
                                ): (
                                    <MenuLinkBtn to="/">
                                        <Button primary bigFont onClick={closeMenu}>REGRESAR</Button>
                                    </MenuLinkBtn>
                                )
                                }
                                

                                
                            </MenuItemBtn>
                        </MealsContent>       
                  
            
        </div>
    )
}

export default Organigramas;

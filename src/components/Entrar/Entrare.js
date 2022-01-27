
import ChickenImg from '../../images/Big-chicken.svg';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {OutlineButton} from '../../Globalstyles';
import {Button} from '../../Globalstyles';
import {
    MealsContainer,
    MealsWrapper,
    MealsImage,
    Img,
    MealsContent,
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
} from './Entrar.styles';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';
function Entrar() {
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
            <MealsContentTitle>INGRESAR </MealsContentTitle>
           <MealsContent>
                        
                        <MealsContentText>
                        <form>
        <label>
         CODIGO:
         <input type="text" name="nombre" />
         </label>
         
         </form>
         <form>
        <label>
         CONTRASEÑA:
         <input type="text" name="apellido" />
         </label>
         
        
         </form>

                        </MealsContentText>
        

                        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/maestro">
                                        <Button primary>ENTRAR</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/maestro">
                                        <Button primary bigFont onClick={closeMenu}>ENTRAR</Button>
                                    </MenuLinkBtn>
                                )
                                }

                                
                            </MenuItemBtn>
                        </MealsContent>       
                  
            
        </div>
    )
}

export default Entrar;

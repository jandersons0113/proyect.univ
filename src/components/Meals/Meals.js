
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
    MealsCon,
    MealsImagess,
    MealsContentBtn,
   
    input,
    MenuItemBtn,
    MenuLinkBtn,
    WorksCardText

} from './Meals.styles';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';
function Meals() {
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

            
            <MealsContentTitle>FORMULARIO DE INSCRIPCION </MealsContentTitle>
           <MealsContent>
                        
                        <MealsContentText>
                            
                       
                        <form>
        <label>
         NOMBRE:
         <label></label>
         <input type="text" name="apellido"  size="100" font-size=" 8pt" />
         </label>
         
         </form>          
   
                        
                        
         <form>
        <label>
         APELLIDOS:
         <label></label>
         <input type="text" name="apellido"  size="100"  />
         </label>
         
         </form>
         
       <form>
        <label>
         IDENTIFICACION:
         <input type="text" name="numero de identificacion" size="100" />
         </label>
         
         </form>
         <form>
        <label>
         CODIGO:
         <input type="text" name="codigo" size="100" />
         </label>
         
         </form>
         <form>
        <label>
         CONTRASEÑA         :
         <input type="text" name="Contraseña" size="100" />
    
         </label>
         <form>
        <label>
         CONFIRME CONTRASEÑA :
         <input type="text" name="cofirme contraseña" size="100" />
         </label>
         
         </form>
         
         </form>

                        </MealsContentText>
        

                        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/entra">
                                        <Button primary>REGISTRAR</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/entra">
                                        <Button primary bigFont onClick={closeMenu}>REGUISTRAR</Button>
                                    </MenuLinkBtn>
                                )
                                }

                                
                            </MenuItemBtn>
                        </MealsContent>       
                  
            
        </div>
    )
}

export default Meals;

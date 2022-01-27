
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
   
    Imgee,
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
} from './Regresos.style';
import NR1 from '../../images/NR1.jpg';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';
import NRM58 from '../../images/NRM58.jpeg';
import NRM528 from '../../images/NRM528.jpeg';
function Regresos() {
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
            <MealsContentTitle> </MealsContentTitle>
            <MealsContentTitle>MATEMATICA APLICADA </MealsContentTitle>
           <MealsContent>
           <Imgee src={NRM58}/>
                        <MealsContentText>
                        La matematica aplicada  se encarga del estudio, diseño, manutención, 
                        evaluación, optimización, simulación, construcción y operación de todo tipo de elementos en la industria 
                        de procesos, que es aquella relacionada con la producción industrial de compuestos y productos cuya 
                        elaboración requiere de sofisticadas transformaciones físicas y químicas de la materia.
                        
                        </MealsContentText>
                        <MealsContentTitle> HISTORIA </MealsContentTitle>

                        <MealsContentText>
                        La matematica aplicada encarga del estudio, diseño, manutención, 
                        evaluación, optimización, simulación, construcción y operación de todo tipo de elementos en la industria 
                        de procesos, que es aquella relacionada con la producción industrial de compuestos y productos cuya 
                        elaboración requiere de sofisticadas transformaciones físicas y químicas de la materia.
                        
                        </MealsContentText>
                        <MealsContentTitle> QUE ESTUDIO EN MATEMATICA APLICADA</MealsContentTitle>
        
                        <Imge src={NRM528}/>
                        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary>OTRAS CARRERAS </Button>
                                    </MenuLinkBtn>
                                    
                                ): (
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary bigFont onClick={closeMenu}>OTRAS CARRERAS </Button>
                                    </MenuLinkBtn>

                                


                                )
                            }

{button?(
                                    <MenuLinkBtn to="/entra">
                                        <Button primary>ME INTERESA </Button>
                                    </MenuLinkBtn>
                                    
                                ): (
                                    <MenuLinkBtn to="/entra">
                                        <Button primary bigFont onClick={closeMenu}>ME INTERESA </Button>
                                    </MenuLinkBtn>

                                


                                )
                            }
                                

                                
                            </MenuItemBtn>
                        
                        </MealsContent>       
                  
            
        </div>
    )
}

export default Regresos;

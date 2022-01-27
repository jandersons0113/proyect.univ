
import ChickenImg from '../../images/Big-chicken.svg';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {OutlineButton} from '../../Globalstyless';
import {Button} from '../../Globalstyless';
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
} from './Nasas.styles';
import NRM5 from '../../images/NRM5.jpeg';
import NRM52 from '../../images/NRM52.jpeg';
function Nasas() {
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
            <MealsContent>
            <MealsContentTitle> </MealsContentTitle>
            <MealsContentTitle>INGENIERIA QUIMICA </MealsContentTitle>
           
           <Imgee src={NRM5}/>
                        <MealsContentText>
                        La ingeniería química es una rama de la ingeniería que se encarga del estudio, diseño, manutención, 
                        evaluación, optimización, simulación, construcción y operación de todo tipo de elementos en la industria 
                        de procesos, que es aquella relacionada con la producción industrial de compuestos y productos cuya 
                        elaboración requiere de sofisticadas transformaciones físicas y químicas de la materia.
                        
                        </MealsContentText>
                        <MealsContentTitle> HISTORIA </MealsContentTitle>

                        <MealsContentText>
                        La ingeniería química es una rama de la ingeniería que se encarga del estudio, diseño, manutención, 
                        evaluación, optimización, simulación, construcción y operación de todo tipo de elementos en la industria 
                        de procesos, que es aquella relacionada con la producción industrial de compuestos y productos cuya 
                        elaboración requiere de sofisticadas transformaciones físicas y químicas de la materia.
                        
                        </MealsContentText>
                        <MealsContentTitle> QUE ESTUDIO EN INGENIERIA QUIMICA</MealsContentTitle>
        
                        <Imge src={NRM52}/>
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

export default Nasas;

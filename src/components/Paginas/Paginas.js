import {OutlineButton} from '../../Globalstyles';
import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';


import {
    WelcomeContainer, 
    WelcomeContent,
    WelcomeImg, 
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    MenuLink,
    MenuIcon,
    MenuLinkBtn,
    MenuItemBtn,
    Imger,
    Imge
} from './Paginas.style';
import foto10 from '../../images/foto10.jpg';
import foto9 from '../../images/foto9.jpg';
import HR from '../../images/HR.jpg';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';

const Paginas = () => {
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
            <WelcomeContainer>
            <WelcomeContentTitle>BIENVENIDO</WelcomeContentTitle>
            </WelcomeContainer>
            <WelcomeContainer>
            
                <WelcomeContent>
                    <WelcomeImg>
                        <Imge src={foto9} />
                    </WelcomeImg>
                    <WelcomeContentText>
                       
                        <WelcomeText>
                        <Imge src={foto10} />
                        </WelcomeText>
                        <WelcomeText>
                          
                        </WelcomeText>
                    </WelcomeContentText>
                </WelcomeContent>
            </WelcomeContainer>
            <WelcomeContainer>
            <Imger src={HR} />
            </WelcomeContainer>
            
            
        </div>
    )
}

export default Paginas;

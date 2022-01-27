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
    Imgw,
    Imgr,
    Imgse,
    WorCardTitle,
    WorksCardTitle,
    MenuItem,
    MenuIcon,
    MenuLink,
    WorksCardText

   
} from './Profesores.styles';
import PL1 from '../../images/PL1.jpg';
import PL2 from '../../images/PL2.jpg';
import PL3 from '../../images/PL3.jpg';
import PL4 from '../../images/PL4.jpg';
import PL5 from '../../images/PL5.jpg';
import PL6 from '../../images/PL6.jpg';
import PL7 from '../../images/PL7.jpg';
import PL8 from '../../images/PL8.jpg';
import PL9 from '../../images/PL9.jpg';



const Profesores = () => {
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
          
            <WorCardTitle>  QUE TE GUSTARIA ESTUDIAR? </WorCardTitle>
           
        
            <WorksContainer>
            
                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/nasa"><Imge src={PL1}/> </MenuLink>
                                <WorksCardTitle> LICENCIATURA QUIMICA</WorksCardTitle>
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/regreso"><Imge src={PL2}/> </MenuLink>
                                <WorksCardTitle> MATEMATICAS APLICADAS</WorksCardTitle>
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/"><Imge src={PL3}/> </MenuLink>
                                <WorksCardTitle> MEDICINA</WorksCardTitle>
                    </WorksCard>
                </WorksCardContent>

                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/nasa"><Imge src={PL4}/> </MenuLink>
                                <WorksCardTitle> DERECHO</WorksCardTitle>
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/"><Imge src={PL5}/> </MenuLink>
                                <WorksCardTitle> CONTADURIA</WorksCardTitle>
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/"><Imge src={PL6}/> </MenuLink>
                                <WorksCardTitle> ENFERMERIA</WorksCardTitle>
                    </WorksCard>
                </WorksCardContent>

                <WorksCardContent>
                <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/"><Imge src={PL7}/> </MenuLink>
                                <WorksCardTitle> ARTES PLASTICAS</WorksCardTitle>
                    
                    </WorksCard>
                    <WorksCard>
                         <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/"><Imge src={PL8}/> </MenuLink>
                                <WorksCardTitle> INGENIERIA DE SOFTWARE</WorksCardTitle>
                    </WorksCard>
                    </WorksCard>
                    <WorksCard>
                    <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>
                                <MenuLink onClick={closeMenu} to="/"><Imge src={PL9}/> </MenuLink>
                                <WorksCardTitle> INGENIERIA ELECTRONICA</WorksCardTitle>
                    </WorksCard>
                </WorksCardContent>

          
            </WorksContainer>
        </WorksContent>        
        
       
        
                
    </div>
    );
}

export default Profesores;

import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';

import Cookies from 'universal-cookie';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    Imgw,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
    
} from './Navbar.styles';
import LOGO from '../../images/logo.png';
const Navbar = () => {
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
            
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                       
                           
                              UNIVERSIDAD AUTONOMA DE NEIVA
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            
                            
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/profesor">CARRERAS</MenuLink>
                            </MenuItem>
                           
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

                            
                        </Menu>

                    </NavbarContainer>

                </Nav>


            
        </div>
    )
}

export default Navbar;

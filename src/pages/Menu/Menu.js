import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import {Button} from '../../Globalstyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';

import {
    WelcomeContainer, 
    WelcomeContent,
    WelcomeImg, 
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    MenuLink,
    MealsContent,
    MenuIcon,
    MenuLinkBtn,
    MenuItemBtn,
    Imger,
    Imge
} from './Menu.style';
import foto10 from '../../images/foto10.jpg';
import foto9 from '../../images/foto9.jpg';
import HR from '../../images/HR.jpg';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';

const cookies = new Cookies();

class Menu extends Component  {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            
            <div>

        
            <MenuItemBtn></MenuItemBtn>

                <br />
               
                <MealsContent><Button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</Button></MealsContent>
                
            </div>
        );
    }
}

export default Menu;
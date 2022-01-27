import styled from 'styled-components';
import PizzaBg from '../../images/hero-bg.png';
import {Link} from 'react-router-dom';
import {Container} from '../../Globalstyles';
import {BiCheck, BiDetail, BiDish} from 'react-icons/bi';
import {BiRestaurant} from 'react-icons/bi';

export const WelcomeContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 7rem;
`;

export const WelcomeContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #fff;

@media only screen and (max-width:1000px) {
    flex-direction: column;
}
`;

export const WelcomeImg = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
`;

export const Img = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 300px;

@media only screen and (min-width:300px) {
    width: 300px;
}
@media only screen and (min-width:400px) {
    width: 400px;
}
@media only screen and (min-width:600px) {
    width: 500px;
}
@media only screen and (min-width:800px) {
    width: 800px;
}
@media only screen and (min-width:1000px) {
    width: 500px;
    height: 400px;
}
@media only screen and (min-width:1200px) {
    width: 600px;
}
@media only screen and (min-width:1500px) {
    width: 750px;
}
@media only screen and (min-width:1800px) {
    width: 900px;
}
`;

export const WelcomeContentText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 3rem;
@media only screen and (min-width:1200px) {
    padding: 3rem 6rem;
}
@media only screen and (min-width:1500px) {
    padding: 3rem 9rem;
}
`;

export const WelcomeContentTitle = styled.h2`
font-size: 3.6rem;
font-weight: bold;
`;

export const WelcomeText = styled.p`
font-size: 1.8rem;

&:not(:last-child) {
    margin-bottom: 2rem;
}
`;

export const Imge = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 200px;
`;


export const Menu = styled.ul`
display: flex;
align-items: center;
text-align: center;

@media only screen and (max-width:1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? '0' : '-100%'};
    background-color: rgba(0, 0, 0, 0.9);
    transition: all .5s ease;
}
`;

export const MenuItems = styled.li`
list-style: none;
height: 80px;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
}
`;


export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;

export const MenuLink = styled(Link)`
text-decoration: none;
font-weight: bold;
font-size: 2rem;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
height: 100%;
transition: all .2s ease;

&:hover {
    color: #38B0DE;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #007FFF;
}

@media only screen and (max-width:1000px){
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all .2s ease;
}
`;

export const MenuItemBtn = styled.li`
list-style: none;
@media screen and (max-width:1000px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
}
`;
export const MenuLinkBtn = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;
}
`;

export const Imger = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 600px;
`;

import styled from 'styled-components';
import {Container} from '../../Globalstyles';
import {Containe} from '../../Globalstyles';
import {Link} from 'react-router-dom';



import {BiRestaurant} from 'react-icons/bi';



export const FooterSection = styled.section`
display: flex;
align-items: center;
color: #fff;
background-color: #08298A;
`;
export const FoterSection = styled.section`
display: flex;
align-items: center;
color: #fff;
background-color: #fff;
`;

export const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;

@media only screen and (max-width:900px){
    flex-direction: column;
}
`;


export const FooterContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem 5rem;

${Container}
`;

export const FoterContainer = styled(Containe)`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 1rem;

${Containe}
`;

export const FooterNewsletter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const FooterNewsletterTitle = styled.h2`
font-size: 24px;
margin-bottom: 1rem;
text-align: center;
`;

export const FooterNewsletterText = styled.h3`
font-size: 20px;
font-weight: 400;
text-align: center;
`;

export const FooterLabel = styled.label`
display: none;
`;

export const FooterNewsletterForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;

@media only screen and (max-width: 900px) {
    flex-direction: column;

}
`;

export const FooterNewsletterInput = styled.input`
padding: 10px 25px;
background-color: #fff;
outline: none;
border: none;
border: 1px solid #333;
border-radius: 3px;
border-radius: 2px;
font-size: 1.6rem;
margin-right: 10px;

&::placeholder {
    color: #333;
}
@media only screen and (max-width: 900px) {
    padding: 15px 25px;
    margin-bottom: 3rem;
    font-size: 2rem;
    
}
`;

export const FooterBtn = styled.button`
background-color: #fff;
color: #333;
padding: 1rem 2rem;
border-radius: 3px;
outline: none;
border: none;
font-size: 1.8rem;
transition: all .5s ease;
&:hover{
    background-color: #8A0808;
    color: #fff;
    transform: translateY(-.5rem) scale(1.02);
}
&:active{
    transform: translateY(.5rem);
}
`;

export const FooterLinkContainer = styled.div`
margin-top: 5rem;
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
`;

export const FooterLinksWrapper = styled.div`
display: flex;
align-items: center;
&:not(:last-child) {
    margin-right: 10rem;
}
@media only screen and (max-width: 900px) {
&:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4rem;
}
}
@media only screen and (max-width:700px){

}
`;

export const FooterLinks = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
&:not(:last-child) {
    margin-right: 10rem;
}
`;

export const FooterLinkTitle = styled.h3`
font-size: 24px;
`;

export const FooterLink = styled(Link)`
text-decoration: none;
color: #fff;
margin-bottom: 1rem;
transition: all .4s ease;

&:hover {
    color: #E38B06;
}
`;

export const FooterCopyRight = styled(Link)`
text-decoration: none;
outline: none;
color: #fff;
margin-top: 3rem;

&:hover {
    color: #E38B06;
}
`;



export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 80px;
background-color: rgba(0, 0, 0, 0.5);
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const NavLogo = styled(Link)`
color: #8A0808;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;

export const NavIcon = styled(BiRestaurant)`
margin-right: .8rem;
transition: all .5s ease;

&:hover {
    transform: scale(2);
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

export const MenuItem = styled.li`
list-style: none;
height: 80px;


@media only screen and (max-width:1000px){
    width: 100%;
    &:hover {
        border: none;
    }
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
    color: #B40404;
    transform: traslateY(-3rem);
    
}
&:active {
    transform: traslateY(3rem);
    color: #DF0101;
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

`;
export const Imgw = styled.img`
height: 5rem;

`;

export const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 5rem;
height: 5rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .5s ease;

&:not(:last-child) {
    margin-right: 5rem;

    @media only screen and (min-width: 1300px){
        margin-right: 10rem;
    }

    @media only screen and (min-width: 1500px){
        margin-right: 10rem;
    }
    @media only screen and (max-width:900px){
        margin-bottom: 10rem;
        margin-right: 0;
    }
    @media only screen and (max-width: 800px){
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
}

@media only screen and (max-width:900px){
        width: 50rem;
}
@media only screen and (max-width:500px){
        width: 30rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.7);
    background-color: #fff;
    color: #fff;
    
}
`;
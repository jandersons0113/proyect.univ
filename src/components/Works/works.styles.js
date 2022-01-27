import styled from 'styled-components';
import {BiCheck, BiDetail, BiDish} from 'react-icons/bi';
import {Container} from '../../Globalstyles';
import {Link} from 'react-router-dom';

export const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`;
export const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;

${Container};
`;

export const WorksTitle = styled.h2`
font-size: clamp(2rem, 8.5vw, 5rem);
font-weight: bold;
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

export const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 50rem;
height: 20rem;
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
    transform: scale(1.2);
    background-color: #0040FF;
    color: #fff;
    
}
`;

export const Imger = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 800px;
`;

export const WorsCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
height: 100rem;
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
    transform: scale(1);
    background-color: #fff;
    color: #970606;
    
}
`;

export const WorksIconContainer = styled.div`
width: 9rem;
height: 9rem;
border-radius: 50%;
border: 2px solid #333;
transition: all .3s ease-out;
margin-top: 2rem;
display: flex;
justify-content: center;
align-items: center;

`;
export const WorksIcon1 = styled(BiCheck)`
color: #333;
font-size: 8rem;
`;

export const WorksIcon2 = styled(BiDetail)`
color: #333;
font-size: 6rem;
`;
export const WorksIcon3 = styled(BiDish)`
color: #333;
font-size: 6rem;
`;

export const WorksCardTitle = styled.h3`
font-size: 2.4rem;
font-weight: bold;
padding-top: 1rem;
`;

export const WorksCardText = styled.p`
font-size: 1.2rem;
padding: 1rem 2rem;
`;
export const Imges = styled.img`
background-size: cover;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
border-radius: 4px;
height: 200px;
`;

export const Img = styled.img`
height: 4rem;

`;
export const Imgw = styled.img`
height: 8rem;

`;


export const WorCardTitle = styled.h3`
font-size: 5rem;
font-weight: bold;
padding-top: 1rem;
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
    transform: scale(1);
}
`;
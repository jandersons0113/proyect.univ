import styled from 'styled-components';
import PizzaBg from '../../images/hero-bg.png';

import { Link } from 'react-router-dom';
import {BiCheck, BiDetail, BiDish} from 'react-icons/bi';
import {Container} from '../../Globalstyles';

export const WelcomeContainer = styled.section`
position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid blue;
      padding: 40px;
      background-color: white;
`;

export const MealsContentText = styled.p`
font-size: 3rem;
@media only screen and (max-width: 1000px) {
    font-size: 2rem;
}
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

export const MealsContent = styled.div`


      left: 50%;
      top: 50%;
      transform: translate(0%, 0%);
      
      padding: 40px;
      background-color: white;
      
padding: 0 50rem;
@media only screen and (min-width:1800px){
    margin: 0 1200rem;
}

@media only screen and (max-width: 1300px){
    padding: 2rem 5rem;
}

@media only screen and (max-width: 1000px) {
    text-align: center;
}

@media only screen and (max-width: 500px){
    padding: 2rem;
}

`;

export const MealsContentTitle = styled.h2`
font-size: clamp(2rem, 8vw, 5rem);
margin-bottom: 3rem;
text-align: center;
line-height: 1.2;
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
font-size: 2rem;
font-weight: bold;
`;

export const WelcomeText = styled.p`
font-size: 1.8rem;

&:not(:last-child) {
    margin-bottom: 2rem;
}
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


export const WorCardTitle = styled.h3`
font-size: 5rem;
font-weight: bold;
padding-top: 1rem;
`;


export const Imgw = styled.img`
height: 8rem;

`;


export const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
`;

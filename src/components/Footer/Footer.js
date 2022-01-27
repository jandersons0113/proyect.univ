import React, {useState, useEffect} from 'react';
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';

import {
    FooterSection,
    FoterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    NavLogo,
    MenuIcon,
    WorksCardContent,
    Imgw,
    WorksCard,
    FoterContainer,
    FooterLabel

} from './Footer.styles';
import LOGO from '../../images/LOGO.jpg';
import LC from '../../images/LC.jpg';
import LN from '../../images/LN.png';
import LNC from '../../images/LNC.png';
import LR from '../../images/LR.jpg';
import LM from '../../images/LM.png';
import LH from '../../images/LH.jpg';
import LE from '../../images/LE.jpg';
import LD from '../../images/LH.jpg';
import LP from '../../images/LP.png';

const Footer = () => {
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
           
            <FooterSection>
                
                <FooterContainer>
                
                    <FooterNewsletter>
                    <FooterNewsletterTitle></FooterNewsletterTitle>
                        <FooterNewsletterTitle>UNIVERSIDAD AUTONOMA DE NEIVA</FooterNewsletterTitle>
                      
                        <FooterNewsletterText>CALLE 33 SUR NO 24-48</FooterNewsletterText>
                        <FooterNewsletterText>TEL:8642992</FooterNewsletterText>
                       
                    </FooterNewsletter>   
                    <FooterLinkContainer>
                        
                    </FooterLinkContainer>
                    pagina realizada por jhon soledad y faiber mendez
                    
                </FooterContainer>
            </FooterSection>
            
        </div>
    )
}

export default Footer;

import Navbar from '../Navbar/Navbar';
import {Button} from '../../Globalstyles';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroSubTitle,
    HeroText,
    HeroBtn,

} from './Hero.styles';
import P12 from '../../images/foto12.jpg';
import LN from '../../images/LN.png';

const Hero = () =>{
    return(
        <div>
           <HeroContainer>
               <Navbar/>
               <HeroContent>
                   <HeroContentText>
                        <HeroTitle>
                            <HeroTitleText></HeroTitleText>
                            
                        </HeroTitle>
                        <HeroSubTitle></HeroSubTitle>
                        <HeroText>
                        </HeroText>
                        <HeroBtn to="/order-now">
                           
                        </HeroBtn>
                   </HeroContentText>
               </HeroContent>
           </HeroContainer>
        </div>
    )
}

export default Hero;
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
    Img,
    Imge,
    Imgse,
    WorksCardTitle,
    MenuItemBtn,
    MenuLinkBtn,
    WorCardTi,
    WorksContaine,
    Imgs,
    Imgq,
    WorksCardText

    
   
  



} from './Recipes.styles';
import E1 from '../../images/E1.jpg';
import E2 from '../../images/E2.jpg';
import E3 from '../../images/E3.jpg';
import E4 from '../../images/E4.jpg';
import E5 from '../../images/E5.jpg';
import E6 from '../../images/E6.jpg';
import E7 from '../../images/E7.jpg';
import E8 from '../../images/E8.jpg';
import E9 from '../../images/E9.jpg';
import E10 from '../../images/E10.jpg';
import E11 from '../../images/E11.jpg';
import E12 from '../../images/E12.jpg';
import E13 from '../../images/E13.jpg';
import E14 from '../../images/E14.jpg';
import E15 from '../../images/E15.jpg';
import MB from '../../images/MB.jpg';
import MP from '../../images/MP.jpg';
import MO from '../../images/MO.jpg';
import LP from '../../images/LP.png';
import P12 from '../../images/foto12.jpg';

import LN from '../../images/LN.png';
const Recipes = () => {
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
        <WorksContaine> 
            <WorCardTi> 
            
                
            <Imgs src={LP}/>
                ESTUDIANTES  </WorCardTi>
                <WorksCardText>
                            ESTUDIANTES QUE HACEN HONOR AL MERITO ACADEMICO
                        </WorksCardText>
            <Imgq src={P12}/>
             </WorksContaine>
        
            
                        
            <WorksContainer>
            
        
            <WorksCardTitle>PRIMERO</WorksCardTitle>
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={E1}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle><Imgse src={MO}/>DIANA PEREZ</WorksCardTitle>
                        <WorksCardText>
                            
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={E2}/>  
                        <WorksCardTitle><Imgse src={MP}/>JUAN GOMEZ</WorksCardTitle>
                        <WorksCardText>
                          
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={E3}/> 
                        <WorksCardTitle><Imgse src={MB}/>ERICK SILVA</WorksCardTitle>
                        <WorksCardText>
                           
                        </WorksCardText>
                    </WorksCard>
                    
                </WorksCardContent>
            </WorksContainer>

            <WorksContainer>
            <Img src={P12}/> 
        
            <WorksCardTitle>SEGUNDO</WorksCardTitle>
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={E4}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle><Imgse src={MO}/>HECTOR SILVA</WorksCardTitle>
                        <WorksCardText>
                          
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={E5}/>  
                        <WorksCardTitle><Imgse src={MP}/>JUAN CONTRERAS</WorksCardTitle>
                        <WorksCardText>
                           
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={E6}/> 
                        <WorksCardTitle><Imgse src={MB}/>JAIME OSORIO</WorksCardTitle>
                        <WorksCardText>
                        
                        </WorksCardText>
                    </WorksCard>
                    
                </WorksCardContent>
            </WorksContainer>

            <WorksContainer>
            <Img src={P12}/> 
        
            <WorksCardTitle>TERCERO</WorksCardTitle>
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={E7}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle><Imgse src={MO}/>JAZMIN TRIANA</WorksCardTitle>
                        <WorksCardText>
                           
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={E8}/>  
                        <WorksCardTitle><Imgse src={MP}/>NICK HERNANDEZ</WorksCardTitle>
                        <WorksCardText>
                          
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={E9}/> 
                        <WorksCardTitle><Imgse src={MB}/>ROSA WILCHEZ</WorksCardTitle>
                        <WorksCardText>
                          
                        </WorksCardText>
                    </WorksCard>
                    
                </WorksCardContent>
            </WorksContainer>

            <WorksContainer>
            <Img src={P12}/> 
        
            <WorksCardTitle>CUARTO</WorksCardTitle>
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={E10}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle><Imgse src={MO}/>DANIELA PEREZ</WorksCardTitle>
                        <WorksCardText>
                          
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={E11}/>  
                        <WorksCardTitle><Imgse src={MP}/>SARA PAVON</WorksCardTitle>
                        <WorksCardText>
                         
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={E12}/> 
                        <WorksCardTitle><Imgse src={MB}/>SOFIA CARDENAZ</WorksCardTitle>
                        <WorksCardText>
                         
                        </WorksCardText>
                    </WorksCard>
                    
                </WorksCardContent>
            </WorksContainer>

            <WorksContainer>
            <Img src={P12}/> 
        
            <WorksCardTitle>QUINTO</WorksCardTitle>
                <WorksCardContent>
                
                    <WorksCard>
                        <Imge src={E13}/> 
                        <WorksCardTitle>  </WorksCardTitle>
                        <WorksCardTitle><Imgse src={MO}/>JAMES JIMENEZ</WorksCardTitle>
                        <WorksCardText>
                          
                        </WorksCardText>
                    </WorksCard>
                    
                    <WorksCard>
                        <Imge src={E14}/>  
                        <WorksCardTitle><Imgse src={MP}/>MICKOL SANCHEZ</WorksCardTitle>
                        <WorksCardText>
                        
                        </WorksCardText>
                    </WorksCard>
                    <WorksCard>
                        <Imge src={E15}/> 
                        <WorksCardTitle><Imgse src={MB}/>ANDRES JIMENEZ</WorksCardTitle>
                        <WorksCardText>
                         
                        </WorksCardText>
                    </WorksCard>
                    
                </WorksCardContent>
            </WorksContainer>
        
        </WorksContent>
        <WorksContent>
        <WorksContent>
        </WorksContent>
        </WorksContent>
        <WorksContent>
        <MenuItemBtn>
                                {button?(
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary>VOLVER</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/profesor">
                                        <Button primary bigFont onClick={closeMenu}>VOLVER</Button>
                                    </MenuLinkBtn>
                                )
                                }

                                
                            </MenuItemBtn>
                            </WorksContent>
    </div>
    );
}

export default Recipes;

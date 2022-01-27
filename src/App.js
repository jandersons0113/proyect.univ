import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import {Hero, Footer, Organigramas} from './components';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Recipe from './pages/Recipe/Recipe';
import Maestro from './pages/Maestro/Maestro';
import Profesor from './pages/Profesor/Profesor';
import Order from './pages/Order/Order';
import Directiva from './pages/Directiva/Directiva';
import Entra from './pages/Entra/Entra';
import Entrae from './pages/Entrae/Entrae';
import Horario from './pages/Horario/Horario';
import Noticia from './pages/Noticia/Noticia';
import Regreso from './pages/Regreso/Regreso';
import Clase from './pages/Clase/Clase';
import Pagina from './pages/Pagina/Pagina';
import Nasa from './pages/Nasa/Nasa';
import Logi from './pages/Logi/Logi';
import Logu from './pages/Logu/Logu';
import Menu from './pages/Menu/Menu';




import Organigrama from './pages/Organigrama/Organigrama';
import GlobalStyles from './Globalstyles';
function App() {
  return (
    <Router>
      <BrowserRouter>
      <GlobalStyles/>
      <Hero/>
      <Switch>
        <Route exact path="/" exact component={Home}/>
        
        <Route exact path="/menu" exact component={Menu}/>
        <Route exact path="/order" exact component={Order}/>
        <Route exact path="/recipe" exact component={Recipe}/>
        <Route exact path="/directiva" exact component={Directiva}/>
        <Route exact path="/maestro" exact component={Maestro}/>
        <Route exact path="/profesor" exact component={Profesor}/>
        <Route exact path="/entra" exact component={Logi}/>
        <Route exact path="/entrae" exact component={Logu}/>
        <Route exact path="/horario" exact component={Horario}/>
        <Route exact path="/noticia" exact component={Noticia}/>
        <Route exact path="/regreso" exact component={Regreso}/>
        <Route exact path="/hoja" exact component={Clase}/>
        <Route exact path="/pagina" exact component={Pagina}/>
        <Route exact path="/nasa" exact component={Nasa}/>
        <Route exact path="/organigrama" exact component={Organigrama}/>
        

        
       
        


  
      
        
      </Switch>
     
        
      
      
     
      </BrowserRouter>
    </Router>
  );

  
}

export default App;

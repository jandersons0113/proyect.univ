import React, { Component } from 'react';
import '../Login/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import {Button} from '../../Globalstyles';
import Cookies from 'universal-cookie';



import {
    MealsContent,
    WelcomeContainer,
    WelcomeContentTitle,
    WelcomeImg,
    Img,
    WelcomeContentText,
    WelcomeContent,

} from './login.style';
import TIE from '../../images/TIE.jpg';




const baseUrl="http://localhost:3000/consolas";
const cookies = new Cookies();

class Logun extends Component {
    state={
        form:{
            iden: '',
            contraseña: '',
            lanzamiento: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {iden: this.state.form.iden, contraseña: md5(this.state.form.contraseña)}})
        .then(response=>{
            return response.data;
        })
        
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('roll', respuesta.roll, {path: "/"});
                cookies.set('iden', respuesta.iden, {path: "/"});
                alert(`Bienvenido  ${respuesta.roll} ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href ="./pagina";
                 
               
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('iden')){
            
            window.location.href="./pagina";
        }
    }
    

    render() {
        return (
            <MealsContent>
                
                <WelcomeContent>
                
    
          <div className="form-group">
          <WelcomeContentTitle>BIENVENIDO A LA PLATAFORMA ESTUDIANTIL</WelcomeContentTitle>
          
            <WelcomeContentTitle> </WelcomeContentTitle>
            <WelcomeImg>
                        
                    </WelcomeImg>
                    <WelcomeContentText>
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="iden"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="contraseña"
              className="form-control"
              name="contraseña"
              onChange={this.handleChange}
            />
            <br />
            <Button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</Button>
            </WelcomeContentText>
          </div>
          </WelcomeContent>
      </MealsContent>

      
        );
    }
}

export default Logun;
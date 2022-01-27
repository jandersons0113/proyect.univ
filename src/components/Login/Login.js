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

class Login extends Component {
    state={
        form:{
            username: '',
            password: '',
            roll: ''
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
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
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
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido  ${respuesta.roll} ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href ="./horario";
                 
               
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            
            window.location.href="./horario";
        }
    }
    

    render() {
        return (
            <MealsContent>
                
                <WelcomeContent>
                
    
          <div className="form-group">
          
            <WelcomeContentTitle>INGRESAR A PLATAFORMA ADMINISTRATIVA</WelcomeContentTitle>
            <WelcomeContentTitle> </WelcomeContentTitle>
            <WelcomeImg>
                        
                    </WelcomeImg>
                    <WelcomeContentText>
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
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

export default Login;
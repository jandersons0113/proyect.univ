import React, {useEffect, useState} from 'react';
import './Appr.css';

import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody,Button, TableRow, Modal, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const baseUrl='http://localhost:3000/consolas/'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,

    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
  
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Appr() {
const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

  const [consolaSeleccionada, setConsolaSeleccionada]=useState({
    iden: '',
    nombre: '',
    empresa:'',
    lanzamiento: '',
    unidades_vendidas: '',
    telefono: '',
    correo: '',
    contraseña: ''

  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setConsolaSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(consolaSeleccionada);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, consolaSeleccionada)
    .then(response=>{
      setData(data.concat(response.data))
      abrirCerrarModalInsertar()
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+consolaSeleccionada.id, consolaSeleccionada)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(consola=>{
        if(consolaSeleccionada.id===consola.id){
          consola.iden=consolaSeleccionada.iden;
          consola.nombre=consolaSeleccionada.nombre;
          consola.lanzamiento=consolaSeleccionada.lanzamiento;
          consola.empresa=consolaSeleccionada.empresa;
          consola.unidades_vendidas=consolaSeleccionada.unidades_vendidas;
          consola.telefono=consolaSeleccionada.telefono;
          consola.correo=consolaSeleccionada.correo;
          consola.contraseña=consolaSeleccionada.contraseña;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+consolaSeleccionada.id)
    .then(response=>{
      setData(data.filter(consola=>consola.id!==consolaSeleccionada.id));
      abrirCerrarModalEliminar();
    })
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarConsola=(consola, caso)=>{
    setConsolaSeleccionada(consola);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

  useEffect(async()=>{
    await peticionGet();
  },[])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>REGISTRO</h3>
      <TextField name="iden" className={styles.inputMaterial} label="IDENTIFICACION" onChange={handleChange}/>
      <br />
      <TextField name="nombre" className={styles.inputMaterial} label="NOMBRE COMPLETO" onChange={handleChange}/>
      <br />
      <TextField name="empresa" className={styles.inputMaterial} label="FECHA DE NACIMIENTO" onChange={handleChange}/>
      <br />
      <TextField name="lanzamiento" className={styles.inputMaterial} label="ROLL" onChange={handleChange}/>
      <br />
      <TextField name="unidades_vendidas" className={styles.inputMaterial} label="CARRERA" onChange={handleChange}/>
      <br />
      <TextField name="telefono" className={styles.inputMaterial} label="TELEFONO" onChange={handleChange}/>
      <br />
      <TextField name="correo" className={styles.inputMaterial} label="CORREO" onChange={handleChange}/>
      <br />
      <TextField name="contraseña" className={styles.inputMaterial} label="CONTRASEÑA" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>EDITAR DATOS</h3>
      <TextField name="iden" className={styles.inputMaterial} label="IDENTIFICACION" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.iden}/>
      <br />
      <TextField name="nombre" className={styles.inputMaterial} label="NOMBRE COMPLETO" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.nombre}/>
      <br />
      <TextField name="empresa" className={styles.inputMaterial} label="FECHA DE NACIMIENTO" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.empresa}/>
      <br />
      <TextField name="lanzamiento" className={styles.inputMaterial} label="ROLL" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.lanzamiento}/>
      <br />
      <TextField name="unidades_vendidas" className={styles.inputMaterial} label="CARRERA" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.unidades_vendidas}/>
      <br />
      <TextField name="telefono" className={styles.inputMaterial} label="TELEFONO" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.telefono}/>
      <br />
      <TextField name="correo" className={styles.inputMaterial} label="CORREO" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.correo}/>
      <br />
      <TextField name="contraseña" className={styles.inputMaterial} label="CONTRASEÑA" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.contraseña}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>aceptar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar este usuario <b>{consolaSeleccionada && consolaSeleccionada.nombre}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )


  return (
    <div className="Appr">
      <br />
    <Button onClick={()=>abrirCerrarModalInsertar()}>REGISTRAR</Button>
      <br /><br />
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
           <TableCell>IDENTIFICACION</TableCell>
             <TableCell>NOMBRE COMPLETO</TableCell>
             <TableCell>FECHA DE NACIMIENTO</TableCell>
             <TableCell>ROLL</TableCell>
             <TableCell>CARRERA</TableCell>
             <TableCell>TELEFONO</TableCell>
             <TableCell>CORREO</TableCell>
             <TableCell>CONTRASEÑA</TableCell>
             <TableCell>Acciones</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(consola=>(
             <TableRow key={consola.id}>
               <TableCell>{consola.iden}</TableCell>
               <TableCell>{consola.nombre}</TableCell>
               <TableCell>{consola.empresa}</TableCell>
               <TableCell>{consola.lanzamiento}</TableCell>
               <TableCell>{consola.unidades_vendidas}</TableCell>
               <TableCell>{consola.telefono}</TableCell>
               <TableCell>{consola.correo}</TableCell>
               <TableCell>{consola.contraseña}</TableCell>
               <TableCell>
                 <Edit className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Editar')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className={styles.iconos} onClick={()=>seleccionarConsola(consola, 'Eliminar')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
     <Modal
     open={modalInsertar}
     onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
     </Modal>

     <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
    </div>
    
  );
}

export default Appr;

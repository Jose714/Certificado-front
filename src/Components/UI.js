import '../index.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import AppBarI from './AppBar';



function UserI() {
  const [doc_nombre, setNombre] = useState('')
  const [doc_descripcion, setDescripcion] = useState('')
  const [doc_imagen, setImagen] = useState('')
  const [doc_costo, setCosto] = useState('')
  const [movieReviewList, setMovieList] = useState([])
  const [newDocNombre, setDocNombre] = useState('')


  useEffect(() => {
    Axios.get('http://localhost:5000/api/get').then((response) => {
      setMovieList(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:5000/api/insert', {
      doc_nombre: doc_nombre,
      doc_descripcion: doc_descripcion,
      doc_imagen: doc_imagen,
      doc_costo: doc_costo
    }).then(() => {
      setMovieList([...movieReviewList, {doc_nombre: doc_nombre,
        doc_descripcion: doc_descripcion,
        doc_imagen: doc_imagen,
        doc_costo: doc_costo}])
    });
  };
  const deleteData = (docName) =>{
    Axios.delete(`http://localhost:5000/api/delete/${docName}`);
  }

  const updateData = (docName) =>{
    Axios.put("http://localhost:5000/api/update",{
      doc_nombre: doc_nombre,
      doc_descripcion: doc_descripcion,
      doc_imagen: doc_imagen,
      doc_costo: doc_costo 
    });
    setDocNombre("")
  }

  return (
    <div>
      <AppBarI />

      <div className="uiBody">
        <div className="form-center">
          <h3 className="pagosLabel">Pagos</h3>
          <br />
          <div className="form-fix">
            <div class="form">
              <label>Tipo de certificado</label>
              <input type="text" placeholder="Tipo de certificado" name="doc_nombre" onChange={(e) => {
                setNombre(e.target.value)
              }} />
              <label>Descripcion</label>
              <input type="text" placeholder="Descripcion del documento" name="doc_descripcion" onChange={(e) => {
                setDescripcion(e.target.value)
              }} />
              <label>Imagen</label>
              <input type="text" placeholder="Cargar imagen" name="doc_imagen" onChange={(e) => {
                setImagen(e.target.value)
              }} />

              <label>Costo</label>
              <input type="text" name="doc_costo" placeholder="Costo" onChange={(e) => {
                setCosto(e.target.value)
              }} />
            </div>
          </div>

          <div className="filter">
            <button className="filtBTN" type="button" onClick={submitReview}>Agregar Solicitud</button>
          </div>
          
          <div className="container mt-5" align="center">

            <h4>Lista de Certificados</h4>

            <div className="row">

              <div className="col-md-12">

                <table className="table table-bordered">
                  <thead className="thead-green">
                    <tr>
                      <th scope="col">Documento</th>
                      <th scope="col">Descripcion</th>
                      <th scope="col">Imagen</th>
                      <th scope="col">Costo</th>
                      <th scope="col">Editar</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>

                    {movieReviewList
                    .map(val => (
                      <tr >
                        <td>{val.doc_nombre}</td>
                        <td>{val.doc_descripcion}</td>
                        <td>{val.doc_imagen}</td>
                        <td>{val.doc_costo}</td>
                        <td><input type="hidden" onChange = {(e) =>{
                          setDocNombre(e.target.value)
                        }}/><button onClick = {()=> {updateData(val.doc_nombre)}}>Update</button></td>
                        <td><button onClick = {()=>{deleteData(val.doc_nombre)}}>Delete</button></td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>
          </div>

  
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserI;
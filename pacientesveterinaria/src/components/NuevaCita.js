import React, { Component } from 'react';
import uuid from 'uuid';
class NuevaCita extends Component {
    state = { 
        cita:{
            mascota:'',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        },
        error: false
     }
    //Cuando el usuario escribe en los inputs
    handleChange = e =>{
        //Concatenamos
        //  console.log(e.target.name + ': ' + e.target.value);

         //colocar lo que el usuario escribe en el state
         this.setState({
             cita:{
                 ...this.state.cita,
                 [e.target.name] : e.target.value
             }
         })
    }

    //cuando el usuario envia al formulario
    handleSubmit = e => {
        e.preventDefault();
        //extraer los valores del state
        const {mascota,propietario,fecha,hora,sintomas} = this.state.cita;

        //validar que todos los campos esten llenos
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '' )
            {
                this.setState({
                    error: true
                });
                //detener la ejecución
                return;
            }
            //Generar un objeto con los datos
            const nuevaCita = {...this.state.cita};
            nuevaCita.id = uuid();
        //Agregar la cita al state de APP    
            this.props.crearNuevaCita(nuevaCita)
    }
    render() { 
        return (  
            <div className="card mt-5 py-5">
              <div className="card-body">
                <h2 className="card-title text-center mb-5">Llena formulario para crear nueva cita</h2>
                    <form method="" action="" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre de la Mascota:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    id = "mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.mascota}
                                />
                            </div>
                        </div>{/*form group cierre */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre del Dueño:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Propietario"
                                    name="propietario"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.propietario}
                                />
                            </div>
                        </div>{/*form group cierre */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha"
                                    name="fecha"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.fecha}
                                />
                            </div>
                        </div>{/*form group cierre */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="time"
                                    className="form-control"
                                    placeholder="Hora"
                                    name="hora"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.hora}
                                />
                            </div>
                        </div>{/*form group cierre */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas:</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                  className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los Sintomas"
                                    onChange = {this.handleChange}
                                    value = {this.state.cita.sintomas}
                                >
                                </textarea>
                            </div>
                        </div>{/*form group cierre */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Cita"/>
                    </form>
              </div>
            </div>
        );
    }
}
 
export default NuevaCita;
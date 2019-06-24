import React, { Component } from 'react';

class NuevaCita extends Component {
    state = { 

     }

    render() { 
        return (  
            <div className="card mt-5 py-5">
              <div className="card-body">
                <h2 className="card-title">Llena formulario para crear nueva cita</h2>
                    <form method="" action="">
                    <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre de la Mascota:</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    id = "mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
 
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
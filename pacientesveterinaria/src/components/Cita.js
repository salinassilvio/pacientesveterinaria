import React from 'react';

const Cita = ({cita}) =>  ( 
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre Dueno:</span> {cita.propietario}</p>
            <p className="card-text"><span>Fecha:</span> {cita.fecha}</p>
            <p className="card-text"><span>Hora:</span> {cita.hora}</p>
            <p className="card-text"><span>Sintomas:</span> </p>
            <p className="card-text">{cita.sitomas}</p>

        </div>
    </div>
 );


export default Cita;
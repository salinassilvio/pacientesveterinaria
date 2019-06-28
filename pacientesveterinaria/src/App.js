import React,{Component} from 'react';
import './bootstrap.min.css';
import  Header from './components/Header';
import  NuevaCita from './components/NuevaCita';
import  ListaCitas from './components/ListaCitas';

class App extends Component {
  state = { 
    citas:[]
   }

   //cuando la aplicacion carga 
   componentDidMount(){
      const citasLs = localStorage.getItem('citas');
      if(citasLs){
        this.setState({
          citas : JSON.parse(citasLs)
        })
      }
   }
   //Ciamdp eliminamos o ingresamos una nueva cita
   componentDidUpdate(){
     localStorage.setItem('citas',JSON.stringify(this.state.citas));
   }


   //Para crear una nueva cita
   crearNuevaCita = datos =>{
    //  console.log(datos);
    //copiar el state acutal
    const citas = [...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      citas: citas
    })
  }

  //Eliminar las citas del state tomando un id usando UUid
  eliminarCita =  id => {
    //Tomar una copia del state
const citasActuales = [...this.state.citas];

    //Utilizar filter para sacar el elemento @id del arreglo
    // console.log(id);
    // console.log('diste click');
    const citas =  citasActuales.filter(cita => cita.id !== id)
    //actualizar el state
    this.setState({citas});
  }

  render() { 
    return ( 
      <div className="container">
        <Header titulo='Administrador Pacientes Veterinaria'></Header>
        <div className="row">
          <div className="col-md-10 mx-auto">
          <NuevaCita
            crearNuevaCita={this.crearNuevaCita}
          ></NuevaCita>
          </div>
          <div className=" mt-5 col-md-10 mx-auto">
              <ListaCitas
                citas={this.state.citas}
                eliminarCita = {this.eliminarCita}
              ></ListaCitas>
          </div>
        </div>

      </div>
     );
  }
}
 
export default App;

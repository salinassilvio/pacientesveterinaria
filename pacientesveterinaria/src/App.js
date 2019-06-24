import React,{Component} from 'react';
import './bootstrap.min.css';
import  Header from './components/Header';
import  NuevaCita from './components/NuevaCita';

class App extends Component {
  state = { 
    citas:[]
   }
   crearNuevaCita = datos =>{
    //  console.log(datos);
    //copiar el state acutal
    const citas = [...this.state.citas, datos];
    //agregar el nuevo state
    this.setState({
      citas: citas
    })

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
        </div>

      </div>
     );
  }
}
 
export default App;

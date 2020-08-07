import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logoPM.jpg';
import './styles.css';

class App extends Component {
    render(){  
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h3 style={{fontWeight:"bold"}}>ParkingMall</h3>
                    </div>
                </div>
                <div className="row logo">
                    <div className="col-sm" >
                        <img className="logoPM" src={logo}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <h3  style={{fontWeight:"bold"}}>Bienvenido</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p className="text-center descripcion-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                </div>
                <div className="row" style={{paddingBottom:"10px"}}>
                    <div className="col-12" >
                       <button className="btn btn-primary btn-sm">Siguiente</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                       <button className="btn btn-warning btn-sm">Saltar</button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
  
  
import React, { Component } from 'react';
import {Link} from 'react-router';

import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state ={

    // Bestilling
    produkter: '',
    BredbaandsHastigheder: [{speed:'25/5', pris:250},{speed:'50/10', pris:250},{speed:'100/20', pris:250},{speed:'300/60', pris:250},{speed:'500/60', pris:250},{speed:'1000/100', pris:250}],
    TvPakker:[{pakke :'', pris:250},{pakke :'Grunpakke', pris:250},{pakke:'Grundpakke + 10 valgfri kanaler', pris:250},{pakke :'Grundpakke + 20 valgfri kanaler', pris:250},{pakke :' Grundpakke + 36 valgfri kanaler', pris:250}],
    antal: [0,1,2,3,4],
    MobilAbo :[
    {name: '', Id: 'M1', pris: 0},
    {name: 'Fritale 5gb', Id: 'M2', pris: 149},
    {name: 'Fritale 10gb', Id: 'M3', pris: 199},
    {name: 'Fritale 25gb', Id: 'M4', pris: 299},
    ],


    TilmedingInfo: {
      fornavnInput: '',
      efternavnInput:'',
      vejnavnInput:'',
      husnummerInput:'',
      etageInput:'',
      sideInput: '',
      kontaktnummerInput:'',
      EmailInput:'',
      BredbaandsInput:'',
      TvInput:'',
      TvIFlereRumInput:'',
      MobilInput:'',
      extranummerInput:'',
  },
}
}
  render() {
    return (

      <div className="App">
        <div className="App-header">
          
          <h2>Yousee Bredbåndspulje {this.state.Bredbåndspulje}</h2>
          <ul className='navbar'>
            <li className='navElement'><Link to="/">Information</Link></li>
            <li className='navElement'><Link to="/tilmelding">Tildmelding</Link></li>
            <li className='navElement'><Link to="/progress">Projekt oversigt</Link></li>
          </ul>
        </div>
     {this.props.children}
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Information from './components/information'
import Progress from './components/progress'
import Tilmelding from './components/tilmelding'
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
  this.state ={
    //Navigation and header information
    Bredbåndspulje:'#317',
    Navbar :['Information' , 'Tilmeld og bestilling','Projekt Oversigt'],
    // information info
    information:['information 1', 'Installations information'],

    //Project details
    adresser:{ 
      vejnavne: ['vej1' ,'vej2','vej3','vej4'],
      vej1:['1', '2','3','4','5','6','7','8','9'],
      vej2:['1', '2','3','4','5','6','7','8','9'],
      vej3:['1', '2','3','4','5','6','7','8','9'],
      vej4:['1', '2','3','4','5','6','7','8','9'],
      vej5:['1', '2','3','4','5','6','7','8','9'],

    },


    //Tilmelding
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



    //information for fase
    aktivFase:[],
    Faser:['indsamling', 'planlægning', 'gravning', 'installation', 'reetablering'],
    faseBeskrivelser:['or at kunne bevise sansernes pålidelighed ud fra cogitioet mente',
                      'or at kunne bevise sansernes pålidelighed ud fra cogitioet mente',
                      'or at kunne bevise sansernes pålidelighed ud fra cogitioet mente', 
                      'or at kunne bevise sansernes pålidelighed ud fra cogitioet mente'],
    faseTid:[' fra dato til dato',' fra dato til dato','fra dato til dato'],
  }
}


  render() {
    return (

      <div className="App">
        <div className="App-header">
          
          <h2>Yousee Bredbåndspulje {this.state.Bredbåndspulje}</h2>
          <ul className= 'navbar'>
              {this.state.Navbar.map(function(name){
                return <li className= 'navElement'>{name}</li>})}
          </ul>
        </div>
       <Information Navbar = {this.state.Navbar}  information={this.state.information} > </Information>
       <Tilmelding Navbar = {this.state.Navbar}  adresser={this.state.adresser} > </Tilmelding>
       <Progress Navbar = {this.state.Navbar} faseTid={this.state.faseTid}  faseBeskrivelser= {this.state.faseBeskrivelser}></Progress>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
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


    //Tilmelding
    produkter: '',
    BredbaandsHastigheder: ['25/5','50/10','100/20','300/60','500/60','1000/100'],
    TvPakker:['','Grunpakke', 'Grundpakke + 10 valgfri kanaler', 'Grundpakke + 20 valgfri kanaler',' Grundpakke + 36 valgfri kanaler'],
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
    //produklt 
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
    faseTid:['dato og dato','dato og dato','dato og dato'],
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
        <div className='InformationContainer'>
          <h1> {this.state.Navbar[0]}</h1>
          <h3> {this.state.information[0]}</h3>
          <p className="App-intro"> In philosophy, a relation is a type of fact that is true or 
          false of two things. For instance, "being taller than" is a relation that is true of "Shaquille O'Neal 
          and Ross Perot" and false of "the Empire State building and Mt. Everest." Substances or things have properties 
          ("this spot is red"). Relations on the other hand obtain between two substances ("this spot is bigger than that spot") 
          or two properties ("this red is a darker shade than that red"). There are two major kinds of
          relations:[1] ontological and epistemological. Ontological relations are entities like "father", 
          which is a person considered in his relation to a child. Epistemological relations are often logical connections 
          that obtain between two concepts or ideas, like "entailment." The fact that all men are mortal and that Socrates 
          is a man entails that Socrates is mortal—the relation between Socrates' mortality and the mortality of all
           men is an entailment relation.</p>

          <h3> {this.state.information[1]}</h3>
          <p>In philosophy, a relation is a type of fact that is true or 
          false of two things. For instance, "being taller than" is a relation that is true of "Shaquille O'Neal 
          and Ross Perot" and false of "the Empire State building and Mt. Everest." Substances or things have properties 
          ("this spot is red"). Relations on the other hand obtain between two substances ("this spot is bigger than that spot") 
          or two properties ("this red is a darker shade than that red"). There are two major kinds of
          relations:[1] ontological and epistemological. Ontological relations are entities like "father", 
          which is a person considered in his relation to a child. Epistemological relations are often logical connections 
          that obtain between two concepts or ideas, like "entailment." The fact that all men are mortal and that Socrates 
          is a man entails that Socrates is mortal—the relation between Socrates' mortality and the mortality of all
           men is an entailment relation.</p>
        </div> 


        <div className ='Tilmelding'>
        <h1> {this.state.Navbar[1]}</h1>
          <h3> Adresse </h3>
          <p>Vejnavn</p><select></select>
          <p>Hus nummer</p><select></select>
          <p> Etage</p><input></input>
          <p>Side</p><input></input>
          <p>Fornavn</p><input></input>
          <p>Efternavn</p><input></input>
          <p>Kontakt nummer</p><input></input>
          <p>Email</p><input></input>


          <h3> Jeg er interesset i følgende produkter</h3>
          <p>Bredbaands hastighed</p><select>
            {this.state.BredbaandsHastigheder.map(function(hastighed){
              return <option>{hastighed}</option>
            })}
          </select>
          <p>Synkron hastighed</p> <input type='checkbox'></input>
          
          <p>Tv kanaler</p><select>
            {this.state.TvPakker.map(function(TvPakke){
              return <option>{TvPakke}</option>
            })}
          </select>
          
          <p>Antal tv</p><select>
            {this.state.antal.map(function(nummer){
              return <option>{nummer}</option>
            })}
          </select>
          
          <p>Mobil</p><select>
          {this.state.MobilAbo.map(function(abo){
              return <option>{abo.name}</option>
            })}
            
          </select>
          <p>Info omkring dobelt data</p>
          
          <p>Extranumre</p><select>
          {this.state.antal.map(function(nummer){
              return <option>{nummer}</option>
            })} 
            
          </select>
          <p></p><input></input>
          <h3> pris </h3>
          <p1> jeg er melder mig her med til / Yousee må gerne kontakte mig</p1>
          <input type='checkbox'></input>
          <button> Send tilmelding </button>
        </div> 

        <div className= 'ProjektOversigt'>
        <h1>{this.state.Navbar[2]}</h1>

        <div>Representation af fase</div> 
        <h3>information omkring </h3>
        <p>{this.state.faseBeskrivelser[0]} </p>
        <p>{this.state.faseTid[0]} </p>


        <div>Representation af fase </div> 
        <h3>information omkring gravning</h3>
        <p>{this.state.faseBeskrivelser[1]} </p>
        <p>{this.state.faseTid[1]} </p>

        <div>Representation af fase </div> 
        <h3>information omkring planlægning</h3>
        <p>{this.state.faseBeskrivelser[2]} </p>
        <p>{this.state.faseTid[2]} </p>
        </div>       
     
      </div>
    );
  }
}

export default App;

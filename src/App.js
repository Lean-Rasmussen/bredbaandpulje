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
    

      //person info
    fornavn: '',
    efternavn:'',
    vejnavn:'',
    husnummer:'',
    etage:'',
    side: '',
    kontaktnummer:'',
    Email:'',
    //produklt 
    Bredbaands:'',
    Tv:'',
    TvIFlereRum:'',
    Mobil:'',
    extranummer:'',



    //information for fase
    aktivFase:[],
    Faser:['indsamling', 'planlægning', 'gravning', 'installation', 'reetablering'],
    fasebeskrivelser:['or at kunne bevise sansernes pålidelighed ud fra cogitioet mente',
                      'or at kunne bevise sansernes pålidelighed ud fra cogitioet mente',
                      'or at kunne bevise sansernes pålidelighed ud fra cogitioet mente', 
                      'or at kunne bevise sansernes pålidelighed ud fra cogitioet mente']
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
          <p>Vejnavn</p><input></input>
          <p>Hus nummer</p><input></input>
          <p> Etage</p><input></input>
          <p>Side</p><input></input>
          <p>Fornavn</p><input></input>
          <p>Efternavn</p><input></input>
          <p>Kontakt nummer</p><input></input>
          <p>Email</p><input></input>


          <h3> Jeg er interesset i følgende produkter</h3>
          <p>Bredbaands hastighed</p><input></input>
          <p>Tv kanaler</p><input></input>
          <p>Antal tv</p><input></input>
          <p>Mobil</p><input></input>
          <p>Extranumre</p><input></input>
          <p></p><input></input>
          <h3> pris </h3>
          <p1> jeg er melder mig her med til / Yousee må gerne kontakte mig</p1>
          <input></input>
          <button> Send tilmelding </button>
        </div> 

        <div className= 'ProjektOversigt'>
        <div>Representation af fase </div> 
        <h1>{this.state.Navbar[2]}</h1>
        <h2>information omkring planlægning</h2>
        <p>forventet periode mellem den </p>

        <div>Representation af fase </div> 
        <h2>information omkring gravning</h2>
        <p>forventet periode mellem den </p>

        <div>Representation af fase </div> 
        <h2>information omkring planlægning</h2>
        <p>forventet periode mellem den </p>
        </div>       
     
      </div>
    );
  }
}

export default App;

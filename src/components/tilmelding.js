import React, { Component } from 'react';
class Tilmelding extends Component {

  render(){
    return(
    <div> 
     <h1> Tildmelding</h1>
             <h3> Adresse </h3>
            <form className='personInfo'>
            <div className='personItem'>
              <p>Vejnavn</p><select>
                  {this.props.route.planInfo.vejnavne.map(function(vej){
                    return <option>{vej}</option>
                  })}
                </select>
                </div>
                <div className='personItem'>
                <p>Hus nummer</p><select>
                  {this.props.route.planInfo.vejnavne.map(function(nummer){
                    return <option>{nummer}</option>
                  })}
                </select>
                </div>
              <div className='personItem'>
              <p> Etage</p><input></input>
              </div>
              <div className='personItem'>
              <p>Side</p><input></input>
              </div>
              <div className='personItem'>
              <p>Fornavn</p><input></input>
              </div>
              <div className='personItem'>
              <p>Efternavn</p><input></input>
              </div>
              <div className='personItem'>
              <p>Kontakt nummer</p><input></input>
              </div>
              <div className='personItem'>
              <p>Email</p><input></input>
              </div>
            </form>
      <h2> Valg af produkter</h2>
        <label>Vælg TV pakke</label>
        <select id="pakkevalg" onChange={this.getImage}>
          {this.props.route.produkter.TvPakker.map(function(pakke, id,){
            return <option  key={pakke.Id} selected>{pakke.pakke}</option>
          })}
        </select>
      
        <label>Multiroom antal extra TV</label>
        <select id="multiroom" onChange={this.getImage}>
          {this.props.route.produkter.antal.map(function(antal, id){
            return <option  key={id} selected>{antal}</option>
        })}
        </select>
      
        <label>Vælg Bredbåndshastighed</label>
        <select id="BBhastighed" onChange={this.getImage}>
          {this.props.route.produkter.BredbaandsHastigheder.map(function(pakke, id,){
            return <option  key={pakke.Id} selected>{pakke.speed}</option>
          })}
        </select>
      
      <label>Vælg Mobil abonnoment</label>
      <select id="MobilAbo" onChange={this.getImage}>
        {this.props.route.produkter.MobilAbo.map(function(abo){
            return <option  selected>{abo.name}</option>
        })}
      </select>
      
      <label>Antal extranumre</label>
      <select id="ExtraNumre" onChange={this.getImage}>
        {this.props.route.produkter.antal.map(function(antal, id){
            return <option  key={id} selected>{antal}</option>
        })}
      </select>
      <button>Tilmeld</button>
    </div>        
  );
  }
}
export default Tilmelding; 
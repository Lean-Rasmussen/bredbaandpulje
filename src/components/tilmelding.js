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
    </div>        
  );
  }
}
export default Tilmelding; 
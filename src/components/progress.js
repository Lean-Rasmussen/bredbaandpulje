import React, { Component } from 'react';
class Progress extends Component {

  render(){
    return(
    <div className= 'ProjektOversigt'>
        <h1>{this.props.Navbar[2]}</h1>

        <div>Representation af fase</div> 
        <h3>information omkring </h3>
        <p>{this.props.faseBeskrivelser[0]} </p>
        <p>{this.props.faseTid[0]} </p>


        <div>Representation af fase </div> 
        <h3>information omkring gravning</h3>
        <p>{this.props.faseBeskrivelser[1]} </p>
        <p>{this.props.faseTid[1]} </p>

        <div>Representation af fase </div> 
        <h3>information omkring planlægning</h3>
        <p>{this.props.faseBeskrivelser[2]} </p>
        <p>{this.props.faseTid[2]} </p>
     </div>  
      )
  }
}
export default Progress;
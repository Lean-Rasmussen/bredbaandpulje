import React, { Component } from 'react';
class Progress extends Component {

  render(){
    return(
    <div className='ProjektOversigt'>
        <h1>Projekt oversigt</h1>

        <div>Representation af fase</div> 
        <h3>information omkring </h3>
        <p>{this.props.route.faseBeskrivelse[0]} </p>
        <p>{this.props.route.planInfo.faseTid[0]} </p>


        <div>Representation af fase </div> 
        <h3>information omkring gravning</h3>
        <p>{this.props.route.faseBeskrivelse[1]} </p>
        <p>{this.props.route.planInfo.faseTid[1]} </p>

        <div>Representation af fase </div> 
        <h3>information omkring planlægning</h3>
        <p>{this.props.route.faseBeskrivelse[2]} </p>
        <p>{this.props.route.planInfo.faseTid[2]} </p>
     </div>  
      )
  }
}
export default Progress;

import "./movie-add-form.css"
import { Component } from "react";


class MovieAddFrom extends Component {
 constructor(props){
  super(props)
  this.state = {
    name : '',
    viewers: '',
    phone: '+998-(90)-'
  }
 } 
 
 onChangeInput = (e) => {
  this.setState({
    [e.target.name] : e.target.value
    }) 
 }

render(){

    const {name, viewers} = this.state
    const { addForm} = this.props

  return (
    <div className="movie-add-form">
        <h3> Add new movies </h3>
        
        <form className="add-form d-flex" onSubmit={e => addForm(e , {name,viewers})}>
            <input 
            type="text"
            className="form-control new-post-label"
            placeholder="which movie?"
             onChange={this.onChangeInput} 
             name = 'name'
             value={name} />   
             
            <input 
            type="number" 
            className="form-control new-post-label" 
            placeholder="how many has it been seen?" 
            onChange={this.onChangeInput}  
            name ='viewers'
            value={viewers}
            /> 

        
            <button type="submit" className="btn btn-outline-dark" > Add</button>
         </form>
       
        </div>
 )}
}




/* bu functional component buni class componentga aylantiramiz
const MovieAddFrom = () => {
  return (
    <div className="movie-add-form">
        <h3> Add new movies </h3>
        <form className="add-form d-flex">
            <input type="text" className="form-control new-post-label" placeholder="which movie?" />
            <input type="number" className="form-control new-post-label" placeholder="how many has it been seen?" />
            <button type="submit" className="btn btn-outline-dark" > Add</button>
         </form>
        </div>
  )
}
*/ 

export default MovieAddFrom;
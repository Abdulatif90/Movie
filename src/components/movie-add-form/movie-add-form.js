import { render } from "@testing-library/react";
import "./movie-add-form.css"
import { Component } from "react";

class MovieAddFrom extends Component {
 constructor(props){
  super(props)
  this.state = {
    name : '',
    views: '',
    phone: '+998-(90)-'
  }
 } 
 
 onChangeInput = (e) => {
  this.setState({
    [e.target.name] : e.target.value
    /* bu avval shunaqa qilib berar edik . lekin bizda inputlar ko`p bo`lsa ularni har birini kiritish qiyin bo`ladi. e - input ning event
    uning ichida target qismi ham bor

    name: e.target.value,
    views: e.target.value
    */
    }) 
 }

render(){
  return (
    <div className="movie-add-form">
        <h3> Add new movies </h3>
        
        <form className="add-form d-flex">
            <input 
            type="text"
            className="form-control new-post-label"
            placeholder="which movie?"
             onChange={this.onChangeInput} 
             name = 'name' />   
             
            <input 
            type="number" 
            className="form-control new-post-label" 
            placeholder="how many has it been seen?" 
            onChange={this.onChangeInput}  
            name ='views'/> 

            <input 
            type="text" 
            className="form-control new-post-label" 
            onChange={this.onChangeInput}  
            name ='phone'
            value={this.state.phone}/> 
                  
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
import { Component } from "react"
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MovieAddFrom from '../movie-add-form/movie-add-form';
import {v4 as uuid4} from 'uuid'


class App extends Component {
    constructor(props){
        super(props)
        this.state={
        data : [
        {name : "Shaytanat", viewers : 989, id: 1},
        {name : "Jaloliddin", viewers : 787, id: 2},
        {name : "Osmondagi bolalar", viewers : 784, id: 3},
    ]}
    }
    
    // datalarni to`g`ridan to'g'ri o`zgaritirish mumkin emas

     onDelete = id =>{
        this.setState(({data}) =>({
            data: data.filter(item=> item.id !==id )
     })     
    )}

    addForm =(e, item) => {
        e.preventDefault()
        this.setState(({data}) =>{
            const newArr =[...data,{...item,id: uuid4()}]
             console.log(newArr)
            return {
                data: newArr}
          
        })
    }

   render(){
    const {data} = this.state   
    return ( 
        <div className='app font-monospace'>
           <div className='content'>
           <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>    
                </div>
               <MovieList data = {data} onDelete= {this.onDelete}/>
                <MovieAddFrom addForm = {this.addForm}/>       
                 
            </div>
         </div>
    );
    }}
    

    export default App
import { Component } from "react"
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MovieAddFrom from '../movie-add-form/movie-add-form';


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
        this.setState(({data}) =>{
            
        // const newArr = data bunda data dan instins olinyapti yani copy
        /*  newArr = data.filter(item=> item.id !==id ) bo`lganldi uchun return qilib dataga tenglanganligi uchun filterni returnga tushursak bo`ladi  
        const newArr = data.filter(item=> item.id !==id )
          */  
            // const index = data.findIndex(c => c.id === id)  // index orqali topadi va har bir item ni indexini topadi  
            // console.log(index)
            // data.splice(index, 1) // bu datadan shu indexni o`chirib yangi array hosil qiladi. va bunda data mutable bo`lyapti, datani to'g'ridan to'g'ri o`zgartirilyapti
            // //shuning uchun undan instins of ovolish kerak
            // console.log(data)
        return { 
            // data : newArr  // bu 1 holati
        data: data.filter(item=> item.id !==id )
        // bu o`chirilayotga data ham o`chib ketadi.
        }}
    )}

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
                <MovieAddFrom/>       
                 
            </div>
         </div>
    );
    }

   }
    


/*

class User extends Component {
    constructor(props){
        super(props)
        this.state = {counter:0, age: " " }
        // this.clickHandlerUp= this.clickHandlerUp.bind(this)  // bu  regular function ishlatilganda this ni object thisga boglash

    }
   
    // State o`zini mutation qilib bo`lmaydi. o`rniga setStatedan foydalanish kerak
    // clickhandler = () =>{
    //     this.setState({
    //         counter:this.state.counter + 1
    //     }) 
    // }   // bu setState har bir o`zgarishi uchun State ga borib + 1 qo`shadi bu esa Statega bog`langanligi uchn sekinro ishlaydi
   
    clickHandlerUp = () =>{
        this.setState(prevState => ({
            counter: prevState.counter + 1
        })
    )}
   
 // class ichida regular function kelsa uning ichidagi this o`zining context ga ega   
//  clickHandlerUp() {
//         this.setState(prevState => ({
//             counter: prevState.counter + 1
//         })
//     )}

    clickHandlerDown = () => {
    this.setState(prevState => {
        if (prevState.counter > 0) {
            return { counter: prevState.counter - 1 };
        } else {
            return null; // hech narsa o'zgartirilmaydi yani state ishlamaydi.
        }
    });
}
   
     clickHandlerReset = () =>{
        this.setState(prevState => ({
            counter: prevState.counter = 0
        }) 
    )}
   
  changeHandler = e =>{
        this.setState({
            age: e.target.value
  })
    }
   

  render () {
  const {firstname, lastname, link } = this.props   
  const {counter, age } = this.state

  return (
    <div  className="w-50 mx-auto">
      <div className="border p-3 mt-5">
        <h4>
            Mening ismim - {firstname}, familiyam - {lastname}, yoshim -    {age}
        </h4>
        <a href={link}>Youtube kanalim</a>
        <div className="mt-3">
            <button onClick={this.clickHandlerUp} className="btn btn-success">
            increment
            </button>
            <button onClick={this.clickHandlerDown} className="btn btn-danger mx-2" >
            decrement
            </button>
            <button onClick={this.clickHandlerReset} className="btn btn-info">
            reset
            </button>
            <p className="text-center">
                {counter}
            </p>
        </div>
        <form>
            <span>
                Yoshingiz
            </span>
            <input 
            type="text" className="form-control" onChange={this.changeHandler}/>
        </form>    
      </div>
    </div>
  )
} 
}

const App = () => {
    return (
        <div>  
            <div> 
            <User firstname = "Abdulatif" lastname = "Sharipov" link = "youtube.com" />
            <User firstname = "Shaxzodbek" lastname = "Boymatov" link = "youtube.com" />
            </div>
        </div>

    )
}


*/
    export default App
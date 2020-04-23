import React, { Component } from 'react';
import CardsList from '../Components/CardsList';
import Scroll from '../Components/Scroll';
import Search from '../Components/Search';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state={
            robot: [],
            searchfield:''
        }
        console.log("Comp");
    }

    componentDidMount(){

fetch('https://jsonplaceholder.typicode.com/users').then(tat=>tat.json()).then(user=>this.setState({robot:user}));

    }
     
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
      
        
        }
        
    
    
    

    render(){

        const{robot,searchfield}=this.state;
        
        const filterobots=robot.filter(cat=>{
            return cat.name.toLowerCase().includes(searchfield.toLowerCase())
            
        })
        return !robot.length ?
            <h1 className="tc">now loading</h1> :
    
        (


            <div className="tc">
            
            <h1 className="f1">robofriends</h1>
            <Search   searchnew={this.onSearchChange}/>
            <Scroll>
            <CardsList robo ={filterobots}/>   
            </Scroll>
            
            </div>
            
              )
        }
              
              
        }
        
    

    
    


    



export default App;
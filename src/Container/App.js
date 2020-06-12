import React, { Component } from 'react';
import CardsList from '../Components/CardsList';
import Scroll from '../Components/Scroll';
import Search from '../Components/Search';
import {connect} from 'react-redux';
import './App.css';

import {setSearchField,requestRobots} from '../action';

const mapStateToProps=state=>{
    console.log("hi",state)
    return{
      searchField:state.searchRobots.searchField, 
      robots:state.requestRobots.robots,
      isPending:state.requestRobots.isPending
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=>dispatch(requestRobots())

    }
}
 
class App extends Component{
    
    componentDidMount(event){
  this.props.onRequestRobots()
    }
     
        
     render(){

        const{searchField,onSearchChange,robots,isPending}=this.props;
        
        const filterobots=robots.filter(cat=>{
            return cat.name.toLowerCase().includes(searchField.toLowerCase())
            
        })
        return isPending ?
            <h1 className="tc">now loading</h1> :
    
        (


            <div className="tc">
            
            <h1 className="f1">robofriends</h1>
            <Search   searchnew={onSearchChange}/>
            <Scroll>
            <CardsList robo ={filterobots}/>   
            </Scroll>
            
            </div>
            
              )
        }
              
              
        }
        
    

    
export default connect(mapStateToProps,mapDispatchToProps)(App);
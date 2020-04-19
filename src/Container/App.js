import React,{Component} from 'react';
import { connect } from 'react-redux';
import Cardlist from '../Component/Cardlist';
//import {robots} from './robots';   // using fetch now componentDidMount done in..
import SearchBox from '../Component/SearchBox';
import './App.css';
import Scroll from '../Component/Scroll';
import ErrorBoundary from '../Component/ErrorBoundary';

import { setSearchField ,requestRobots} from '../actions';

const mapStateToProps = state =>(
    { searchField : state.searchRobots.searchField,
      robots : state.requestRobots.robots,
      isPending : state.requestRobots.isPending,
      error : state.requestRobots.error
    }
);

const mapDispatchToProps = (dispatch) =>{
    return({
    onSearchChange :(e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots :() => dispatch(requestRobots())                     // => requestrobots(dispatch)
    });
}


class App extends Component {
  /*  
  constructor(){
      super();
      this.state={
          robots:[],
          //searchfield:''                  //dont need anymore as now come as prop
      }
  }  */
// if we do here like cons{robots,searchfield}=this.state  then in all the steps below we dont need to write this.state anywhere
//componentDidMount is a mounting lifecycle mehod of reacct and will be called itself


componentDidMount()
{   //can use here console.log(this.props.state.getState()) //will give output as searchField:''
    /* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({ robots :users}));*/

    this.props.onRequestRobots();
}

/*onSearchChange= (e) =>{  
    this.setState({searchfield : e.target.value}) 
}*/

// bcoz this is a class we have to use this.xxx                               //SABHI JAGHAH THIS.STATE KI JGH THIS.PROPS AA JAYEGA...
  render(){  
    const filterRobotss = this.props.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase()); 
})
if(this.props.isPending)
return <h1>Loading...</h1>
else{
    return( 
        <div className='tc'>
            <h1 className='f1'>RoboFriends </h1>
            <SearchBox searchChange={this.props.onSearchChange} />
    {/*3 key concepts in rect are state,props and children. and here cardlist is chlidren as it is wrapped up*/}
            <Scroll>
                <ErrorBoundary>
                    <Cardlist robots={filterRobotss} />
               </ErrorBoundary>
            </Scroll>    
        </div>    
    );  
    } 
    }     
}
//by this app is connected and will know if any change in store and might be interested in it
export default connect( mapStateToProps, mapDispatchToProps )(App)

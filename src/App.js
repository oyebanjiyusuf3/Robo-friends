import React, { Component } from "react";
import "./tailwind.output.css";
import "./style.css";
import SearchField from "./components/SearchField";
import CardList from "./components/CardList";
import Loading from './components/Loading'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: "",
      loading:false,
    };
  }

  handleChange = (event) => {
    this.setState({
      search:event.target.value})
  };

  componentDidMount() {
    this.setState({loading:true,})
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(users=>(this.setState({
          robots:users,
          loading:false,
    })));
  }  

  render() {
    const filteredRobot=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase())    
        })  
        
    return (
      <div>
        {this.state.loading ? <Loading/> : (<div> <h1>Robot Friends</h1>
        <SearchField searchChange={this.handleChange}/>
  
        <CardList robots={filteredRobot}/>
          {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
                    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/> */}
        
                <br/><h2>Copyright &copy;Yusuf Oyebanji {year}</h2></div>
          
        )}
      </div>
    );
  }
}
const year=new Date().getFullYear()


export default App;

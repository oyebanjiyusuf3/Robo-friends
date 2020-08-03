import React, { Component } from "react";
import Card from "./Card";
// import { robots } from "./robots";
import "./tailwind.output.css";
import "./style.css";

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      search: "",
    };
  }

  handleChange = (event) => {
    this.setState({search:event.target.value})
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(users=>(this.setState({
          robots:users
    })));
  }

  componentDidUpdate(){
    const filter=this.state.robots.filter(robot=>{
        return robot.name.toLowerCase().includes(this.state.search.toLowerCase)
        
    })
    console.log(filter)
  }
  

  render() {
    const cardComponents = this.state.robots.map((rob) => (
      <Card key={rob.id} robots={rob} />
    ));
    
    return (
      <div>
        <h1>Robo Friends</h1>
        <div className="text-center">
          <input
            type="text"
            onChange={this.handleChange}
            name="search"
            placeholder="search your robo friends here"
          />
        </div>
        <div className="displayflex text-center">
        {cardComponents}
          {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
                    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/> */}
        </div>
                <br/><h2>Copyright &copy;Yusuf Oyebanji {year}</h2>
      </div>
    );
  }
}
const year=new Date().getFullYear()


export default CardList;

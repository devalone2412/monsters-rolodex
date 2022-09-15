import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: "121",
          name: "Frank",
        },
        {
          id: "122",
          name: "Jacky",
        },
        {
          id: "123",
          name: "Andrei",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

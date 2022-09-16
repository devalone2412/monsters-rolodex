import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({
      monsters: data,
    });
  }

  render() {
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.trim().toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) =>
              monster.name.toLocaleLowerCase().includes(searchString)
            );

            this.setState({ monsters: filteredMonsters });
          }}
        />

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

import './App.css';
import {Component} from 'react';
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({
      monsters: data
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.trim().toLocaleLowerCase();
    this.setState({
      searchField
    });
  }

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) =>
        monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
        <div className='App'>
          <input
              className='search-box'
              type='search'
              placeholder='search monsters'
              onChange={onSearchChange}
          />

          <CardList monsters={filteredMonsters}/>
        </div>
    );
  }
}

export default App;

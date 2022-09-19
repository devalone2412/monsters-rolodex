import {Component} from "react";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {monsters} = this.props;
    return (
      <div>
        {monsters.map((monster) => {
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

export default CardList;

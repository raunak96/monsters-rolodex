import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.components';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      monsters:[],
      searchField:''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
      .then(users => this.setState({ monsters: users}))
  }
  
  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}
export default App;

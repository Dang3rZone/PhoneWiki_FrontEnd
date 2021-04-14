import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      phones: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/phones')
      .then((response) => response.json())
      .then((phones) => this.setState({ phones: phones }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { phones, searchField } = this.state;
    const filteredPhones = phones.filter((phone) =>
      phone.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Phones</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList phones={filteredPhones} />
      </div>
    );
  }
}

export default App;

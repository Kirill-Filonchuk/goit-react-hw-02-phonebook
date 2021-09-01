import '../App/App.css';
import React, { Component } from 'react';
import shortid from 'shortid';

import initialContact from '../data/start-data.json';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contact: initialContact,
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const cont = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkName = Object.values({ name })[0].toLowerCase();
    if (this.state.contact.some(item => item.name.toLowerCase() === `${checkName}`)) {
      alert(`${Object.values({ name })[0]} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      const contact = [...prevState.contact, cont];
      return {
        contact,
        filter: '',
        name: '',
        number: '',
      };
    });
    // console.log('Arr', this.state.contact);
  };

  changeFilter = e => {
    // console.log(e.currentTarget.value);
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  onDeleteCont = id => {
    // console.log(id);
    this.setState(prevState => ({
      contact: prevState.contact.filter(con => con.id !== id),
    }));
  };
  // filter создаёт НОВЫЙ массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.

  visibleContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contact.filter(con =>
      con.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContact;
  };

  render() {
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const visibleContact = this.state.contact.filter(con =>
    //   con.name.toLowerCase().includes(normalizedFilter),
    // );
    return (
      <div className="container">
        <h1>Phonebook</h1>

        <ContactForm formSubmitHandler={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactList visibleContact={this.visibleContact()} onDeleteCont={this.onDeleteCont} />
      </div>
    );
  }
}

export default App;

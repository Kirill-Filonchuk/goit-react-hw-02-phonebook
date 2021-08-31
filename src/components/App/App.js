import '../App/App.css';
import React, { Component } from 'react';
import shortid from 'shortid';

// import Section from '../Section';
// import FeedbackOptions from '../FeedbackOptions';
// import Statistics from '../Statistics';

class App extends Component {
  state = {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const cont = {
      id: shortid.generate(),
      name,
      number,
    };
    console.log(cont);
    // this.setState({contact} => {
    //       const contact = [...contact, cont];
    this.setState(prevState => {
      const contact = [...prevState.contact, cont];
      return {
        contact,
        filter: '',
        name: '',
        number: '',
      };
    });
    console.log('Arr', this.state.contact);
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget);
    // используем вычисляемые св-ва
    this.setState({
      [name]: value,
    });
  };

  changeFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(`
      name: ${name}
      number: ${number}
    `);
    this.formSubmitHandler({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contact.filter(con =>
      con.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          Number
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Add contact</button>
        </form>
        <br />
        <lable>
          Find contacts by name
          <br />
          <input type="text" value={this.state.filter} onChange={this.changeFilter} />
        </lable>
        <br />
        <h2>Contacts</h2>
        <ul>
          {/* was: this.state.contact */}
          {visibleContact.map(({ name, number }) => (
            <li key={shortid.generate()}>
              {name}:<span>{number}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

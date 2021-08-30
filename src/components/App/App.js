import '../App/App.css';
import React, { Component } from 'react';
import shortid from 'shortid';

// import Section from '../Section';
// import FeedbackOptions from '../FeedbackOptions';
// import Statistics from '../Statistics';

class App extends Component {
  state = {
    contact: [],
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

    this.setState(prevState => {
      const contact = [...prevState.contact, cont];
      return {
        contact,
        name: '',
        number: '',
      };
    });
    console.log('Arr', this.state.contact);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    // используем вычисляемые св-ва
    this.setState({
      [name]: value,
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
        <h2>Contacts</h2>
        <ul>
          {this.state.contact.map(({ name, number }, index) => (
            <div key={index}>
              <li>
                {name}:<span>{number}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

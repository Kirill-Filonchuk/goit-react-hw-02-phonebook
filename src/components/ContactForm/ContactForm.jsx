import React, { Component } from 'react';
// import shortid from 'shortid';
class Form extends Component {
    state = {
     name: '',
    number: '',
    }
    
 handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget);
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
    this.props.formSubmitHandler({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
    
    render() {
        return (
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
        )
    }
}

export default Form;
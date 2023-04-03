import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonSubmit,
  InputField,
  InputForm,
  InputLabel,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    // const { name, number } = this.state;
    // this.props.addContact({
    //   name: name,
    //   number: number,
    // });
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <InputForm onSubmit={this.handleSubmit}>
        <InputLabel>
          Name
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </InputLabel>
        <InputLabel>
          Number
          <InputField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </InputLabel>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </InputForm>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

import { Component } from 'react';
import { inputFocus } from 'js/input-focus';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputName({ target }) {
    this.setState({ ...this.state, name: target.value });
  }
  inputNameEvent = this.inputName.bind(this);

  inputNumber({ target }) {
    this.setState({ ...this.state, number: target.value });
  }
  inputNumberEvent = this.inputNumber.bind(this);

  render() {
    const { addContactEvent } = this.props;

    const name = this.name;
    const number = this.number;

    return (
      <form className="contact-form" action="" onSubmit={addContactEvent}>
        <div className="input-box">
          <input
            type="text"
            id="name-input"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.inputNameEvent}
            autoComplete="off"
            onBlur={inputFocus}
          />
          <label htmlFor="name-input">Name</label>
        </div>
        <div className="input-box">
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.inputNumberEvent}
            id="phone-input"
            autoComplete="off"
            onBlur={inputFocus}
          />
          <label htmlFor="phone-input">Phone</label>
        </div>
        <button className="ph-button add-contact global-button">
          Add contact
        </button>
      </form>
    );
  }
}

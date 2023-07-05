import { Component } from 'react';

export class ContactForm extends Component {
  render() {
    const { name, number, inputNameEvent, inputNumberEvent, addContactEvent } =
      this.props;

    return (
      <form className="contact-form" action="" onSubmit={addContactEvent}>
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          id="name-input"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputNameEvent}
        />
        <label htmlFor="phone-input">Phone</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputNumberEvent}
          id="phone-input"
        />
        <button className="add-contact global-button">Add contact</button>
      </form>
    );
  }
}

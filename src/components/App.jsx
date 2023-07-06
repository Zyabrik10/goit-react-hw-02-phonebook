import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact(e) {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const number = form.number.value.trim();
    const id = nanoid();

    if (this.state.contacts.some(e => e.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const arr = [...this.state.contacts, { name, number, id }];

    this.setState({ ...this.state, contacts: arr });
  }
  addContactEvent = this.addContact.bind(this);

  inputFilter({ target }) {
    this.setState({
      ...this.state,
      filter: target.value,
    });
  }
  inputFilterEvent = this.inputFilter.bind(this);

  removeFromContactsList({ currentTarget }) {
    const { contacts } = this.state;

    const index = currentTarget.getAttribute('data-index');
    const newContacts = contacts.slice();

    newContacts.splice(index, 1);
    this.setState({ ...this.state, contacts: newContacts });
  }
  removeFromContactsListEvent = this.removeFromContactsList.bind(this);

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div className="phonebook-box">
        <h1 className="ph-title global-p">Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          inputNameEvent={this.inputNameEvent}
          inputNumberEvent={this.inputNumberEvent}
          addContactEvent={this.addContactEvent}
        />
        <h2 className="global-p">Contacts</h2>
        <Filter inputFilterEvent={this.inputFilterEvent} filter={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          removeFromContactsListEvent={this.removeFromContactsListEvent}
        />
      </div>
    );
  }
}

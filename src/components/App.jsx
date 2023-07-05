import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
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

  inputName({ target }) {
    this.setState({ ...this.state, name: target.value });
  }
  inputNameEvent = this.inputName.bind(this);

  inputNumber({ target }) {
    this.setState({ ...this.state, number: target.value });
  }
  inputNumberEvent = this.inputNumber.bind(this);

  inputFilter({ target }) {
    this.setState({
      ...this.state,
      filter: target.value,
    });
  }
  inputFilterEvent = this.inputFilter.bind(this);

  removeFromContactsList({ target }) {
    const { contacts } = this.state;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === target.getAttribute('data-id')) {
        const newContacts = contacts.slice();
        newContacts.splice(i, 1);
        this.setState({ ...this.state, contacts: newContacts });
        return;
      }
    }
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

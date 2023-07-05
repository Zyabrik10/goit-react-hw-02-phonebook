import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { filter, contacts, removeFromContactsListEvent } = this.props;

    return (
      <ul className="contacts-list global-list">
        {contacts.map(({ number, name, id }) =>
          name.toLowerCase().includes(filter.toLowerCase()) ? (
            <li key={id}>
              <p className="global-p">{name}</p>
              <p className="global-p">{number}</p>
              <button
                className="global-button"
                data-id={id}
                onClick={removeFromContactsListEvent}
              >
                &times;
              </button>
            </li>
          ) : (
            ''
          )
        )}
      </ul>
    );
  }
}

import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { filter, contacts, removeFromContactsListEvent } = this.props;

    return (
      <ul className="contacts-list global-list">
        {contacts.length ? (
          contacts.map(({ number, name, id }, index) =>
            name.toLowerCase().includes(filter.toLowerCase()) ? (
              <li key={id}>
                <p className="global-p">
                  {name}: {number}
                </p>
                <button
                  className="ph-button global-button"
                  data-index={index}
                  onClick={removeFromContactsListEvent}
                >
                  &times;
                </button>
              </li>
            ) : (
              ''
            )
          )
        ) : (
          <li>
            <p className="global-p">There is no contacts yet</p>
          </li>
        )}
      </ul>
    );
  }
}

import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter, inputFilterEvent } = this.props;
    return (
      <div>
        <p className="contact-list-title global-p">Find contacts by name</p>
        <div className="input-box">
          <input type="text" onChange={inputFilterEvent} value={filter} />
        </div>
      </div>
    );
  }
}

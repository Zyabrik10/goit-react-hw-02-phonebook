import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter, inputFilterEvent } = this.props;
    return (
      <div>
        <p className='global-p'>Find contacts by name</p>
        <input type="text" onChange={inputFilterEvent} value={filter} />
      </div>
    );
  }
}

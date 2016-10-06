import React from 'react';
import { Blade } from 'react-blades';

export default class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    const actions = [ {
      key: 'back',
      title: 'Back',
      iconClass: 'fa fa-arrow-left',
      callback: () => {
        this.props.blades.removeBlade(id);
      },
    }, {
      key: 'save',
      title: 'Save',
      iconClass: 'fa fa-save',
      isEnabled: this.state.name.length > 0,
      callback: () => {
        this.setState({ name: '' });
      },
    }];

    return (
      <Blade
        title="Edit item"
        actions={actions}
      >
        <label htmlFor="inp-name">Name:</label>
        <input
          type="text"
          id="inp-name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </Blade>
    );
  }
};

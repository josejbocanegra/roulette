import React, { Component } from 'react';

import {FormattedMessage,FormattedDate, FormattedPlural} from 'react-intl';

class App extends Component {

  state = {
    name : 'Eric',
    unreadCount: 1580,
  };

  render() {
    return (
      <div>
        <FormattedMessage
          id="welcome"
          defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
            one {message}
            other {messages}
          }`}
          values={{name: <strong>{this.state.name}</strong>, unreadCount: this.state.unreadCount}}
        />
        
        <br/>

        <FormattedDate
          value={Date.now()}
          year='numeric'
          month='long'
          day='2-digit'
        />
        <FormattedPlural
          value={1}
          one= <FormattedMessage id="messagesingular"/>
          other= <FormattedMessage id="messagesingular"/>
        />
      </div>
    );
  }
}


export default App;





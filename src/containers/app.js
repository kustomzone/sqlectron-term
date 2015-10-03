import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


const style = {
  header: {
    fg: '#ffff00',
    bg: '#0000d3',
    bold: true,
  },
  shortcut: {
    fg: '#00ffff',
  },
  center: {
    bg: '#e7e7e7',
  },
  status: {
    bg: '#00cfd0',
    fg: '#000000',
  },
};


class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    status: PropTypes.string,
    shortcuts: PropTypes.array,
  };

  render () {
    const { children, status, shortcuts } = this.props;
    return (
      <box top={0} left={0} bottom={0} right={0} style={style.header}>
        <text tags="true" style={style.header} content=" SQLectron" />
        <box top={1} left={0} right={0} bottom={2} style={style.center}>
          {children}
        </box>
        <text right={0} bottom={1} left={0} style={style.status} content={' ' + (status ? status : '')} />
        <text tags="true" bottom={0} style={style.header}>
          {
            ` {${style.shortcut.fg}-fg}Q{/}-Quit ` +
            shortcuts.map(shortcut => `{${style.shortcut.fg}-fg}${shortcut.key}{/}-${shortcut.label}`).join(' ')
          }
        </text>
      </box>
    );
  }

}


export default connect(
  state => ({
    status: state.status,
    shortcuts: state.shortcuts,
  })
)(App);

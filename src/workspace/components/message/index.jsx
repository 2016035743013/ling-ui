import React from 'react'
import ReactDOM from 'react-dom';
import Toast from './Toast'
import './css/index.scss'
export default function Message (args, type) {
  let props = {}
  if (Object.prototype.toString.call(args[0]) === '[object String]') {
    args[0] && (props.message = args[0])
    args[1] && (props.duration = args[1])
    args[2] && (props.onClose = args[2])
  } else {
    props = args[0]
  }
  props.type = type
  const div = document.createElement('div');
  const messageBox = document.getElementsByClassName('ling-message-content')[0];
  if (messageBox) {
    messageBox.appendChild(div);
    document.body.appendChild(messageBox);
  } else {
    const messageBox = document.createElement('div');
    messageBox.className = "ling-message-content";
    messageBox.appendChild(div);
    document.body.appendChild(messageBox);
  }
  const component = React.createElement(Toast, Object.assign(props, {
    willUnmount: () => {
      const messageBox = document.getElementsByClassName('ling-message-content')[0];
      ReactDOM.unmountComponentAtNode(div);
      messageBox.removeChild(div);
    }
  }));
  ReactDOM.render(component, div)
}

['success', 'warning', 'info', 'error', 'loading'].forEach(type => {
  Message[type] = (...args) => {
    return Message(args, type);
  };
});
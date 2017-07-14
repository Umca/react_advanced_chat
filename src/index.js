import React, {Component} from 'react';
import {render} from 'react-dom';
import ChatComponent from './components/Chat'

render(
    <ChatComponent />,
    document.querySelector('#mount_place')
)
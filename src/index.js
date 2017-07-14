import React, {Component} from 'react';
import {render} from 'react-dom';
import ChatComponent from './components/Chat'
import './assets/styles/style.scss';

render(
    <ChatComponent />,
    document.querySelector('#mount_place')
)
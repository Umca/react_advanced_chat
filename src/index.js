import React, {Component} from 'react';
import {render} from 'react-dom';
import Chat from 'components/Chat'
import 'assets/styles/style.scss';
import {Provider} from 'react-redux';
import chatStore from 'store/index';

render(
    <Provider store={chatStore}>
        <Chat />
    </Provider>,
    document.querySelector('#mount_place')
)
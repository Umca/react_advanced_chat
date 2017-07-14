import React, {Component} from 'react';
import {render} from 'react-dom';
import Chat from 'components/Chat'
import 'assets/styles/style.scss';
import {AppContainer} from 'react-hot-loader';

const renderApp = Component =>{
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#mount_place')
    )
}

renderApp(Chat)

if(module.hot){
    module.hot.accept('components/Chat', () =>renderApp(Chat))
}

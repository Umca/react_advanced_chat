import React, {Component} from 'react';
import {render} from 'react-dom';
import Chat from 'containers/HocExample'
import 'assets/styles/style.scss';
import {AppContainer} from 'react-hot-loader';
import ws from 'util/ws';


window.ws = ws;

const renderApp = Component =>{
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#mount_place')
    )
}

renderApp(Chat);

if(module.hot){
    module.hot.accept('containers/HocExample', () => () => renderApp(Chat))
}

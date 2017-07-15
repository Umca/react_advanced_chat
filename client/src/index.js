import React, {Component} from 'react';
import {render} from 'react-dom';
import App from 'containers/App'
import 'assets/styles/style.scss';
import {AppContainer} from 'react-hot-loader';
import ws from 'util/ws';


window.ws = ws;

localStorage.removeItem('userName');

const renderApp = Component =>{
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('#mount_place')
    )
}

renderApp(App);

if(module.hot){
    module.hot.accept('containers/App', () => () => renderApp(App))
}

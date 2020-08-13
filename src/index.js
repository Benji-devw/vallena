import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
// Redux
import { Provider } from 'react-redux'
import { store } from './lib/store'
import { AppContainer } from './views/containers/index'

// import App from './App';
import * as serviceWorker from './serviceWorker';
// import {openSidebar} from './lib/actions'

// log the initial state
// console.log('Store', store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addtoCart({name: 'citron'}, 2 ))
// store.dispatch(addtoCart( {name: 'kiwi'}, 5))
// store.dispatch(openSidebar(openSidebar.SHOW_COMPLETED))
// unsubscribe()


ReactDOM.render(
   // <Provider /> rend le Redux storedisponible pour tous les composants imbriqués qui ont été encapsulés dans la connect()fonction.
   <Provider store={store}>      
      <AppContainer />
   </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

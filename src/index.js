import React from 'react';
import ReactDOM from 'react-dom';
import { createStoreHook, Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { legacy_createStore as createStore } from 'redux';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

function App() {
  return (
    
    <div className="App">
      <Title />
      <DragonList />
    </div>
   
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}> 
<App /> 
</Provider>

, rootElement);





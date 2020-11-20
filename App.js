import React, {Component} from 'react';
import { Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux';
import Navigation from './src/container/navigation';

function App() {
  const renderContent = () => {
    return <Navigation />;
  };

  return (
    <Provider store={configureStore.store}>
      <PersistGate
        loading={null}
        persistor={configureStore.persistor}>
        {renderContent()}
      </PersistGate>
    </Provider>
  );
}
export default App;

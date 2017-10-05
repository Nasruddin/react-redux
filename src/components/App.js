import React, { PropTypes } from 'react';
import Header from './common/Header';
import MainRoutes from './routes/MainRoutes';

class App extends React.Component {
    render() {
        return (
          <div className="container-fluid">
              <Header />
              <MainRoutes />
          </div>
        );
    }
}

export default App;
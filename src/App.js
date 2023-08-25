import ListLayout from './layout/ListLayout';
import { BrowserRouter } from 'react-router-dom';
import routes, { renderRoutes } from './routes.js';
import './assets/scss/App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ListLayout />
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './App.css';

import AllPhonesPage from './pages/AllPhones';
import FavoritesPage from './pages/Favorites';
import NewPhonePage from './pages/NewPhone';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllPhonesPage />
        </Route>
        <Route path="/new-phone">
          <NewPhonePage />
        </Route>
        <Route path="/wishlist">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Users from './components/users/Users';
import AddUser from './components/users/AddUser';
import Homes from './components/homes/Homes';
import AddHome from './components/homes/AddHome';

function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <Switch>
                    <Route path="/homes" exact component={Homes} />
                    <Route path="/homes/add" exact component={AddHome} />
                    <Route path="/users/add" exact component={AddUser} />
                    <Route path="/" exact component={Users} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;

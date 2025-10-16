
import './App.css';
// import AccountManagement from './components/AccountManagement';
import { Provider } from 'react-redux'
import accountStore from './redux/store.js'
import usersStore from './async-actions/store.js'
import UsersManagement from './components/UsersManagement.js';

function App() {
    return (
        <div className="App">
            <Provider store={accountStore}>
                {/* <AccountManagement /> */}
            </Provider>
            <Provider store={usersStore}>
                <UsersManagement/>
            </Provider>
        </div>
    );
}

export default App;


import './App.css';
import GreetClassWithProps from './components/fundamentals/GreetClassWithProps';
import GreetComponent from './components/fundamentals/GreetComponent';
import GreetComponentWithProps from './components/fundamentals/GreetComponentWithProps';

function App() {
    return (
        <div className="App">
            < GreetComponent />
            <GreetComponentWithProps firstName="Avi" lastName="Moyal" >
                <span>I'm a child of ....</span>
                <span>I'm a child of ....</span>
            </GreetComponentWithProps>
            <GreetClassWithProps firstName="Ruslan" lastName="Volvach" />
        </div>
    );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MemoParentChanger from './components/fundamentals/MemoParentChanger';
// import BootstrapStyling from './components/fundamentals/BootstrapStyling';
// import { Styling } from './components/fundamentals/Styling';
// import { StylingModuleProductWithProb } from './components/fundamentals/StylingModuleProductWithProb';
// import { StylingModuleProfileWithProb } from './components/fundamentals/StylingModuleProfileWithProb';
// import ListFather from './components/fundamentals/ListFather';
// import ButtonFather from './components/fundamentals/ButtonFather';
// import GreetClassWithState from './components/fundamentals/GreetClassWithState';
// import PrevState from './components/fundamentals/PrevState';
// import GreetClassWithProps from './components/fundamentals/GreetClassWithProps';
// import GreetComponent from './components/fundamentals/GreetComponent';
// import GreetComponentWithProps from './components/fundamentals/GreetComponentWithProps';


function App() {
    return (
        <div className="App">
            {/* < GreetComponent />
            <GreetComponentWithProps firstName="Avi" lastName="Moyal" >
                <span>I'm a child of ....</span>
                <span>I'm a child of ....</span>
            </GreetComponentWithProps> */}
            {/* <GreetClassWithProps firstName="Ruslan" lastName="Volvach" /> */}
            {/* <GreetClassWithState /> */}
            {/* <PrevState /> */}
            {/* <ButtonFather /> */}
            {/* <ListFather /> */}
            {/* <Styling styles={{ primary: false, 'big-font': true, 'round-border': true }} /> */}
            {/* <StylingModuleProductWithProb styles={{ card: false, title: true }} />
            <StylingModuleProfileWithProb /> */}
            {/* <BootstrapStyling /> */}
            <MemoParentChanger />

        </div>
    );
}

export default App;

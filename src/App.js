import './App.css';
import FirstComponent from './components/FirstComponent';
import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the class components.</h1>
      <FirstComponent/>
      <PersonalCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonalCard firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <PersonalCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PersonalCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
      
    </div>
  );
}

export default App;

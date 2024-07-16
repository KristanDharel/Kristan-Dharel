import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./component/Portfolio";
import MyRouter from "./component/MyRouter";
import MyNavlink from "./component/MyNavlink";

function App() {
  return (
    <div className="App">
      <MyRouter />
      <MyNavlink />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;

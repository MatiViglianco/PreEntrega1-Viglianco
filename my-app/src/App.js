import "./App.css";
import SimpleContainer from "./components/item-list-conteiner/conteiner";
import ResponsiveAppBar from "./components/navbar/nav-bar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SimpleContainer />
    </div>
  );
}

export default App;

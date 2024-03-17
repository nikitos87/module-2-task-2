import "./App.css";
import Recipie from "./components/Recipie";
import data from "./data.json";

const App = () => {
  return (
    <>
      <Recipie data={data} />
    </>
  );
};

export default App;

import "./App.css";

//HOC
import HomeLayoutHoc from "./HOC/Home.hoc";
//pages
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/" />
    </>
  );
}

export default App;

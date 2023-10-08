import Three from "@components/Three";
import Home from "@components/Home";
import "./App.scss";

export default function App() {
  return (
    <>
      <Home state={{ age: 18, name: "张三" }}>
        <h1 className="title">我是Home</h1>
        <p className="text">我是Home</p>
      </Home>
      <Three />
    </>
  );
}

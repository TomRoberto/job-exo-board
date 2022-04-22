// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

function App() {
  // const tab = [<p>Bonjour</p>, <p>salut</p>, <p>Hola</p>];

  // const tabNum = [1, 2, 3, 4, 5];

  // const newTab = tabNum.map((elem) => elem * 2);

  // console.log(newTab);

  const tabObj = [
    { name: "Bob", age: 26 },
    { name: "Jacques", age: 56 },
    { name: "Marie", age: 22 },
    { name: "Sandrine", age: 30 },
  ];

  return (
    <>
      <Header name={"The Job Board"} />
      <Jobs />
      <Footer />
      {/* {tab} */}
      {tabObj.map((elem, index) => {
        return (
          <p key={index}>
            Bonjour je suis {elem.name} et j'ai {elem.age} ans
          </p>
        );
      })}
    </>
  );
}

export default App;

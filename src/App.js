import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  let users = [
    {
      name: "NAME",
      lastName: "LASTNAME",
      age: "AGE",
      id: "ID"
    },
    {
      name: "NAME1",
      lastName: "LASTNAME1",
      age: "AGE1",
      id: "ID1"
    },
    {
      name: "NAME2",
      lastName: "LASTNAME2",
      age: "AGE2",
      id: "ID2"
    },
    {
      name: "NAME3",
      lastName: "LASTNAME3",
      age: "AGE3",
      id: "ID3"
    },
    {
      name: "NAME4",
      lastName: "LASTNAME4",
      age: "AGE4",
      id: "ID4"
    },
    {
      name: "NAME5",
      lastName: "LASTNAME5",
      age: "AGE5",
      id: "ID5"
    }
  ] 

  return (
    <>
      <Header />
      <Section users={users}/>
      <Footer />
    </>
  );
}

export default App;


// Components
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

// Styles
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <AddTask />
      <ListTask />
    </>
  );
}

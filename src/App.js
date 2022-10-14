import "./App.css";
import BusinessCard from "./components/BusinessCard/BusinessCard";

function App() {
  return (
    <main>
      <BusinessCard mode="dark" />
      <BusinessCard mode="light" />
    </main>
  );
}

export default App;

import "./App.css";
import BusinessCard from "./components/BusinessCard/BusinessCard";

function App() {
  return (
    <main>
      <BusinessCard mode="dark" hasLinkedin="true"/>
      <BusinessCard mode="dark"/>
      <BusinessCard mode="light" hasLinkedin="true"/>
      <BusinessCard mode="light"/>
    </main>
  );
}

export default App;

import Form from "./components/form";
import Weather from "./components/weather";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      <div className="main">
        <Form />
        <Weather />
      </div>
    </DataProvider>
  );
}
export default App;

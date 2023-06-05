import PageRoutes from "./routes";
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageRoutes />
        <ToastContainer theme='light' position="top-center" autoClose={2000}/>
      </header>
    </div>
  );
}

export default App;

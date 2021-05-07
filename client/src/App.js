import { Container } from "react-bootstrap";
import NavigationBar from "./components/nav/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container>
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;

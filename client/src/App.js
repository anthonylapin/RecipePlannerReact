import { Container } from "react-bootstrap";
import NavigationBar from "./components/nav/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationBar />
        <Container>
          <AppRouter />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

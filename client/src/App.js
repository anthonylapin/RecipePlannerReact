import { Container } from "react-bootstrap";
import NavigationBar from "./components/nav/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "./actions/recipes";
import { loadingAction } from "./actions/loading";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingAction(true));
    dispatch(fetchRecipes());
    dispatch(loadingAction(false));
  }, [dispatch]);

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

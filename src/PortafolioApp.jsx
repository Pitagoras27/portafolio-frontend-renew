import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./router/RouterApp";
import { store } from "./store/store";
import { AppTheme } from "./theme";

const PortafolioApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <RouterApp />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  )
}

export default PortafolioApp

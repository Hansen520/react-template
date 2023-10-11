import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.less";
import store from "@/store";
import { Provider as ProviderAuth } from "@/utils/useAuth.tsx";

const { Provider } = store;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    {/*<React.StrictMode>*/}
    <ProviderAuth value={{}}>
      <Provider>
        <App />
      </Provider>
    </ProviderAuth>
    {/*</React.StrictMode>*/}
  </>
);

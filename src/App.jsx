import GlobalState from "./contexts/GlobalState";
import { GlobalStyle } from "./GlobalStyles.styled";
import  Router  from "./routes/Router";
import { GlobalContext} from "../src/contexts/GlobalContext";


function App(){
  const context = GlobalState();

  return (
    <GlobalContext.Provider value={context}>
      <Router/>
      <GlobalStyle/>
    </GlobalContext.Provider>
  )
}
export default App

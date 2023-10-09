import { BrowserRouter} from "react-router-dom";
import {Content} from "./Content.jsx"
import {Header} from "./Header.jsx"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <br></br>
      <Content/>
    </BrowserRouter>
  )
}

export default App

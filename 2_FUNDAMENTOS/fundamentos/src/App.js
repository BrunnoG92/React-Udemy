/// importação components

import FirstComponent from "./component/FirstComponent";

// importação estilo / css
import "./App.css";
import TemplateExpressions from "./component/TemplateExpressions";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
    </div>
  );
}

export default App;

import { TiposBasicos } from "./typescript/TiposBasicos"
import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
import { Contador } from './components/Contador';


 const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr />
      <TiposBasicos/> 
      <span><hr /></span>
      <ObjetosLiterales/>
      <span><hr /></span>
      <Funciones/>
      <span><hr /></span>
      <Contador/>
    </div>
  )
}

export default App;
import './App.css'
import Counter from './components/Counter/Counter.jsx'



function App() {


  return (

    <div>

      <Counter initialState={0} sumar={1} restar={1} />
      <Counter initialState={0} sumar={4} restar={4} />
      <Counter initialState={0} sumar={8} restar={8} />

   
        </div>

)
}



        export default App














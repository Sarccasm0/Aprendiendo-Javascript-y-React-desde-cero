import './App.css';


const Hola = (params) => {
  console.log(params);
  return <p>{params.Msg}</p>
}


function App() {
  
  return (
    <div className="App">
      <Hola Msg='Hola como estamos' />
      <Hola Msg='Aqui aprendiendo React con @MiduDev'/>
      <Hola Msg='Aprendiendo bastante sobre React. 😎'/>
    </div>
  );
}

export default App;

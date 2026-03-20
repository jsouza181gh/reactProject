import { UserInfo } from "./components/UserInfo";

const App = () => {
  const isLogged = true

  return (
    <div>
      <h1>
        {isLogged ? "Bem vindo à página inicial" : "Faça login para continuar"}
      </h1> 

      {isLogged && <UserInfo />}
    </div>
  )
}

export default App;
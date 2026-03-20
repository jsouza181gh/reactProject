import { Card } from "./components/Card";
import { UserInfo } from "./components/UserInfo";

const App = () => {
  const users = [
    {
      name: "João Emanuel",
      email: "emanuelrodrigues010@gmail.com",
      phone: "(21) 97940-5435",
      imgAltText: "Avatar do usuário",
      roles: [
        {id: 1, title: 'CEO'},
        {id: 2, title: 'CTO'}
      ]
    },
    {
      name: "Maicon Douglas",
      email: "mdzin@gmail.com",
      phone: "(00) 90000-0000",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      imgAltText: "Avatar do usuário",
      roles: [{id: 3, title: 'CFO'}]
    },
    {
      name: "Maria Clara",
      email: "mariazinha@gmail.com",
      phone: "(01) 92345-5678",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/65/65581.png",
      imgAltText: "Avatar do usuário",
      roles: [{id: 4, title: 'COO'}]
    }
  ]

  return (
    <>
      {
        users.map((user) => (
          <Card>
            <UserInfo
              name={user.name}
              email={user.email}
              phone={user.phone}
              imgSrc={user.imgSrc}
              imgAltText={user.imgAltText}
              roles={user.roles}
            />
          </Card>
        ))
      }
    </>
  )
}

export default App;
import './App.css';
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { text } from 'body-parser';


function App() {
  const [find, setFind] = useState('');
  const [list, setList] = useState([]);
  const [listContainer, setListContainer] = useState([]);

  const players = async () => {
    let dataPlayers = [
      {
        id: 1,
        username: "johan",
        email: "johan123@gmail.com",
        experience: "50",
        lvl: "2"
      },
      {
        id: 2,
        username: "giovani",
        email: "giovani@gmail.com",
        experience: "50",
        lvl: "1"
      },
      {
        id: 3,
        username: "jayce",
        email: "jayce@gmail.com",
        experience: "5",
        lvl: "3"
      },
      {
        id: 4,
        username: "shilin",
        email: "shilin@gmail.com",
        experience: "10",
        lvl: "2"
      },
      {
        id: 5,
        username: "gyukaku",
        email: "gyukaku@gmail.com",
        experience: "25",
        lvl: "5"
      }
    ]
    await setListContainer(dataPlayers);
    await setList(dataPlayers);
  }


  const filterUsername = async (find) => {
    const filtered = list.filter(player => {
      return player.username.toLowerCase().includes(find.toLowerCase());
    });
    setFind(find);
    setListContainer(filtered);
  }

  const filterEmail = async (find) => {
    const filtered = list.filter(player => {
      return player.email.toLowerCase().includes(find.toLowerCase());
    });
    setFind(find);
    setListContainer(filtered);
  }
  const filterExp = async (find) => {
    const filtered = list.filter(player => {
      return player.experience.toLowerCase().includes(find.toLowerCase());
    });
    setFind(find);
    setListContainer(filtered);
  }
  const filterLvl = async (find) => {
    const filtered = list.filter(player => {
      return player.lvl.toLowerCase().includes(find.toLowerCase());
    });
    setFind(find);
    setListContainer(filtered);
  }

  useEffect(() => { players() }, []);

  return (
    <Container>
      <h2>Player List</h2>
      <div><h4>Search by Username : </h4> <input type={text} onChange={((a) => filterUsername(a.target.value))}></input></div>
      <div><h4>Search by Email : </h4> <input type={text} onChange={((a) => filterEmail(a.target.value))}></input></div>
      <div><h4>Search by Experience : </h4> <input type={text} onChange={((a) => filterExp(a.target.value))}></input></div>
      <div><h4>Search by Level : </h4> <input type={text} onChange={((a) => filterLvl(a.target.value))}></input></div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {listContainer.map((players) => (
            <tr>
              <td>{players.id}</td>
              <td>{players.username}</td>
              <td>{players.email}</td>
              <td>{players.experience}</td>
              <td>{players.lvl}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>
              <button>Add</button> 
              <button>Edit</button>
            </td>
          </tr>
        </tbody>
      </Table>

    </Container>

  );
}

export default App;

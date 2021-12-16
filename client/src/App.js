import './App.css';
import Button from "react-bootstrap/Button";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { text } from 'body-parser';


function App() {
  const [find, setFind] = useState('');
  const [list, setList] = useState([]);
  const [listContainer, setListContainer] = useState([]);
  const [editPlayer, setEditPlayer] = useState([]);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [experience, setExperience] = useState();
  const [lvl, setLvl] = useState();


  const players = async () => {
    let dataPlayers = [
      {
        username: "johan",
        email: "johan123@gmail.com",
        experience: "50",
        lvl: "2"
      },
      {
        username: "giovani",
        email: "giovani@gmail.com",
        experience: "50",
        lvl: "1"
      },
      {
        username: "jayce",
        email: "jayce@gmail.com",
        experience: "5",
        lvl: "3"
      },
      {
        username: "shilin",
        email: "shilin@gmail.com",
        experience: "10",
        lvl: "2"
      },
      {
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


  const submit = async (newplayer) => {
    let data = list;
    await data.push(newplayer);
    await setList([...data]);
    await setListContainer([...data]);
  }

  const edit = (player) => {
    setEditPlayer(player);
  };

  const editSubmit = (newplayer) => {
    listContainer[newplayer.number] = newplayer;
    setList([...listContainer]);
    setListContainer([...listContainer]);
  }

  useEffect(() => { players() }, []);

  return (
    <Container>
      <h2>Player List</h2>
      <div><h4>Search by Username : </h4> <input type='text' onChange={((a) => filterUsername(a.target.value))} /></div>
      <div><h4>Search by Email : </h4> <input type='text' onChange={((a) => filterEmail(a.target.value))} /></div>
      <div><h4>Search by Experience : </h4> <input type='text' onChange={((a) => filterExp(a.target.value))} /></div>
      <div><h4>Search by Level : </h4> <input type='text' onChange={((a) => filterLvl(a.target.value))} /></div>
      <Table striped bordered hover variant="dark">
        <thead>
          <br />
          <tr>
            <td colSpan={3}>
              <h4>Add New Player</h4>
              <form>
                <Card style={{ width: '21rem', textAlign: 'right' }}>
                  <ListGroup>
                    <ListGroup.Item>
                      Username: <input name="username" onChange={player => setUsername(player.target.value)} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Email : <input name="email" onChange={player => setEmail(player.target.value)} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Experience : <input name="experience" onChange={player => setExperience(player.target.value)} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Level : <input name="lvl" onChange={player => setLvl(player.target.value)} />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                <br />
              </form>
              <button onClick={() => submit({
                username: username,
                email: email,
                experience: experience,
                lvl: lvl
              })}>Submit</button>
            </td>
            <td colSpan={3}>
              <h4>Edit Player</h4>
              <form>
                <Card style={{ width: '21rem', textAlign: 'right' }}>
                  <ListGroup>
                    <ListGroup.Item>
                      Username: <input defaultValue={editPlayer.username} name="username" onChange={player => setUsername(player.target.value)} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Email : <input defaultValue={editPlayer.email} name="email" onChange={player => setEmail(player.target.value)} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Experience : <input defaultValue={editPlayer.experience} name="experience" onChange={player => setExperience(player.target.value)} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Level : <input defaultValue={editPlayer.lvl} name="lvl" onChange={player => setLvl(player.target.value)} />
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                <br />
              </form>
              <button onClick={() => editSubmit({
                number: editPlayer.number,
                username: username,
                email: email,
                experience: experience,
                lvl: lvl
              })}>Submit Edit</button>
            </td>
          </tr>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listContainer.map((players, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{players.username}</td>
                <td>{players.email}</td>
                <td>{players.experience}</td>
                <td>{players.lvl}</td>
                <td><button onClick={() => edit({
                  number: i,
                  username: players.username,
                  email: players.email,
                  experience: players.experience,
                  lvl: players.lvl
                })}>Edit</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>

  );
}

export default App;

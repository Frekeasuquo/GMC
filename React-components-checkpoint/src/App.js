import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import './Style.css'
import { Card, Container, Button } from 'react-bootstrap'

function App() {
  return (
    <div >
      <Container >
        <Card className="mt-5" >
          <Card.Title>
            <h1><b>ABOUT ME</b></h1>
          </Card.Title>
          <Card.Body className = "card">
            <ProfilePhoto />
            <br />
            <FullName />
            <br />
            <Address />
            <br />
            <Button variant='primary'> Read More </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;

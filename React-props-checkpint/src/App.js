import Profile from './Profile/ProfileComponents';


const App = () => {
  const handleName = (e) => {
        alert("Ndifreke Asuquo")
    }

  return (
    <div style={{textAlign: 'center' ,margin: '80px', border:'3px dashed black', padding: '50px', width: '700px', height: '1100px'}}>

      <Profile fullName="Ndifreke Asuquo" bio="I'm a programmer with a year experince in web development" profession="Web developer">
        <img  src="./pic/nea.PNG" alt="Profile" />
      </Profile>

      <handleName>
        <button style={{width: '120px', height: '40px', borderRadius: '10px', backgroundColor: "green", color: 'white'}} onClick= {handleName}><i>User's Name</i></button>
      </handleName>

    </div>
  );
}

export default App;

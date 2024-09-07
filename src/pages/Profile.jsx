import { useState } from 'react';
import '../App.css';
import ProfileModal from '../components/Profile.jsx'

function Profile() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([])
  async function dataUser(){
    const response = await Api({},'GET','/get-user')
    setUser(response)
  }
  useEffect(()=>{
    dataUser()
  },[])

  return (
    <>
      <ProfileModal/>
    </>
  );
}

export default Profile;

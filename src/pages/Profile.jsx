import { useState } from 'react';
import '../App.css';
import ProfileModal from '../components/Profile.jsx'

function Profile() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProfileModal/>
    </>
  );
}

export default Profile;

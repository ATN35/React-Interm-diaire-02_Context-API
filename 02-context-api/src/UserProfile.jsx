import { useContext } from 'react';
import UserContext from './UserContext';

export default function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const toggleOnlineStatus = () => {
    setIsOnline(prevStatus => !prevStatus);
  };

  return (
    <div>
      <h2>Statut de l'utilisateur : {isOnline ? "En ligne" : "Hors ligne"}</h2>
      <button onClick={toggleOnlineStatus}>Basculer le statut</button>
    </div>
  );
}


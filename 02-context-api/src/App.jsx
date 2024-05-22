import { useState } from 'react';
import UserContext from './UserContext';
import UserProfile from './UserProfile.jsx';

export default function App() {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <div>
      <UserContext.Provider value={{ isOnline, setIsOnline }}><UserProfile /></UserContext.Provider>
    </div>
  )
}
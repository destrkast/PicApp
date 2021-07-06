import { useContext, useEffect, useState } from 'react';
import FirebaseContext from '../context/firebase';

export default function UseAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //we have a user, therefore we can store the user in localStorage
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //we don't have an authUser, therefore we clear the localStorage
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);

  return { user };
}

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";

export const useObserver = () => {
  const [state, setState] = useState({
    user: null,
    isLogged: false,
  });

  const onAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setState({
          user: user,
          isLogged: true,
        });
      } else {
        setState({
          user: null,
          isLogged: false,
        });
      }
    });
  };

  useEffect(() => {
    onAuth();
  }, []);

  return {
    user: state.user,
    isLogged: state.isLogged,
  };
};
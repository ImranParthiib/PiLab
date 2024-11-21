import { createContext, useState, useEffect } from "react";
import { auth } from "../../Firebase/firebaseConfig";
import PropTypes from "prop-types";
export const MarksContext = createContext();

export const MarksProvider = ({ children }) => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const storedMarks = JSON.parse(
          localStorage.getItem(`marks_${currentUser.uid}`)
        );
        if (storedMarks) {
          setMarks(storedMarks);
        } else {
          setMarks([]);
        }
      } else {
        setMarks([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const addMark = (game, score) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setMarks((prevMarks) => {
        const existingMark = prevMarks.find((mark) => mark.game === game);
        let updatedMarks;
        if (existingMark) {
          updatedMarks = prevMarks.map((mark) =>
            mark.game === game ? { ...mark, score: mark.score + score } : mark
          );
        } else {
          updatedMarks = [...prevMarks, { game, score }];
        }
        localStorage.setItem(
          `marks_${currentUser.uid}`,
          JSON.stringify(updatedMarks)
        );
        return updatedMarks;
      });
    }
  };

  return (
    <MarksContext.Provider value={{ marks, addMark }}>
      {children}
    </MarksContext.Provider>
  );
};

MarksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

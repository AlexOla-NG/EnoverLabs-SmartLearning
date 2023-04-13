import React, { createContext, useContext, useEffect, useState } from "react";

const QuestionsContext = createContext();

export const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [isUserDone, setIsUserDone] = useState(false);

  const addQuestion = (_question) => {
    setQuestions([...questions, _question]);
  };

  useEffect(() => {
    console.log({ isUserDone });
    if (isUserDone) {
      alert("End of the line, my gee");
    }
  }, [isUserDone]);
  
  return (
    <QuestionsContext.Provider
      value={{
        questions,
        addQuestion,
        setIsUserDone,
        isUserDone
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestionContext = () => {
  return useContext(QuestionsContext);
};

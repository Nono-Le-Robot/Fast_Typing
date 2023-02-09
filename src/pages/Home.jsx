import React, { useState, useEffect } from "react";
import styled from "styled-components";
const WordList = ["bonjour", "absurde", "survol"];
const Home = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [score, setScore] = useState(3);
  const [correctLetters, setCorrectLetters] = useState(0);
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(10);
  const [lives, setLives] = useState(3);

  useEffect(() => {
    setCurrentWord(WordList[index]);
  }, [index]);

  useEffect(() => {
    if (timer === 0) {
      setLives((prevLives) => prevLives - 1);
      setTimer(10);
    } else {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === currentWord[correctLetters]) {
        setCorrectLetters((prevCorrectLetters) => prevCorrectLetters + 1);
        setScore((prevScore) => prevScore + 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentWord, correctLetters]);

  useEffect(() => {
    if (correctLetters === currentWord.length) {
      setCorrectLetters(0);
      setIndex((prevIndex) => (prevIndex + 1) % WordList.length);
      setTimer(10);
    }
  }, [correctLetters, currentWord.length]);
  return (
    <>
      <Container>
        {lives > 0 && (
          <div id="main">
            <div id="current-word">
              {currentWord.split("").map((letter, index) => (
                <span
                  class="current-word-letter"
                  key={index}
                  style={{
                    color: index < correctLetters ? "green" : "white",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div id="game-info">
              <p>Score: {score}</p>
              <p>Temps restant: {timer} secondes</p>
              <p> Vies restantes: {lives}</p>
            </div>
          </div>
        )}
        {lives <= 0 && <p id="game-over">Game Over</p>}
      </Container>
    </>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background-color: black;
  color: white;
  #current-word {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7rem;
  }
  #game-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 1rem;
  }
  #game-over {
    font-size: 5rem;
  }
`;
export default Home;

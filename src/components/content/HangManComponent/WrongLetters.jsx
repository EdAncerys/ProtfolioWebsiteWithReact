import React from 'react';

export default function WrongLetters({ wrongLetters, winner, game }) {
  const handleWrongLetters = (wrongLetters) => {
    return wrongLetters
      .map((letter, i) => <span key={i}>{letter}</span>)
      .reduce(
        (prev, curr) => (prev === null ? [curr] : [prev, ', ', curr]),
        null
      );
  };

  return (
    <div style={styles.container}>
      <p style={styles.mainText}>Wrong Letters Guessed</p>
      {!winner && (
        <React.Fragment>
          <p style={styles.mainText}>
            {!wrongLetters.length > 0
              ? 'Looking Good...'
              : handleWrongLetters(wrongLetters)}
          </p>
          {wrongLetters.length > 0 && (
            <p style={{ ...styles.mainText, ...styles.whiteText }}>
              {`You have ${6 - wrongLetters.length} attempts left`}
            </p>
          )}
        </React.Fragment>
      )}
      {winner && (
        <React.Fragment>
          <p style={styles.whiteText}>You Won!</p>
        </React.Fragment>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '30vh',
  },
  whiteText: {
    color: '#fff',
  },
  mainText: {
    color: '#546677',
    fontSize: 'large',
    fontWeight: '600',
  },
};

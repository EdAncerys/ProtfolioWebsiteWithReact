import React, { useState, useEffect } from 'react';
import Peter from '../../../images/TickTackToe/TileBoards/Peter-min.png';
import Brian from '../../../images/TickTackToe/TileBoards/Brian-min.png';
import Chris from '../../../images/TickTackToe/TileBoards/Chris-min.png';
import Glenn from '../../../images/TickTackToe/TileBoards/Glenn-min.png';
import Meg from '../../../images/TickTackToe/TileBoards/Meg-min.png';
import Herbert from '../../../images/TickTackToe/TileBoards/Herbert-min.png';
import Joe from '../../../images/TickTackToe/TileBoards/Joe-min.png';
import Lois from '../../../images/TickTackToe/TileBoards/Lois-min.png';
import Stewie from '../../../images/TickTackToe/TileBoards/hart-min.png';
import GameBoard from './GameBoard';
import PlayerChoice from './PlayerChoice';

export default function TickTackToe() {
  const winningFields = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '5', '9'],
    ['7', '5', '3'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
  ];

  const tileBoards = {
    Peter: Peter,
    Brian: Brian,
    Chris: Chris,
    Glenn: Glenn,
    Meg: Meg,
    Herbert: Herbert,
    Joe: Joe,
    Lois: Lois,
    Stewie: Stewie,
  };
  const [takenTiles, setTakenTiles] = useState([]);
  const [playerOneTiles, setPlayerOneTiles] = useState([]);
  const [playerTwoTiles, setPlayerTwoTiles] = useState([]);
  const [winnerName, setWinnerName] = useState();
  // player choice
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [playerOneChoice, setPlayerOneChoice] = useState();
  const [playerTwoChoice, setPlayerTwoChoice] = useState();
  const [playerOneWins, setPlayerOneWins] = useState(0);
  const [playerTwoWins, setPlayerTwoWins] = useState(0);
  // css settings
  const [tileOneCSS, setTileOneCSS] = useState();
  const [tileTwoCSS, setTileTwoCSS] = useState();
  const [tileThreeCSS, setTileThreeCSS] = useState();
  const [tileForCSS, setTileForCSS] = useState();
  const [tileFiveCSS, setTileFiveCSS] = useState();
  const [tileSixCSS, setTileSixCSS] = useState();
  const [tileSevenCSS, setTileSevenCSS] = useState();
  const [tileEightCSS, setTileEightCSS] = useState();
  const [tileNineCSS, setTileNineCSS] = useState();

  // Save state to local storage
  const LOCAL_STORAGE_KEY = 'EdAncerys.TickTackToe';
  const saveToLocalStorage = {
    takenTiles: takenTiles,
    playerOneTiles: playerOneTiles,
    playerTwoTiles: playerTwoTiles,
    winnerName: winnerName,
    playerOneTurn: playerOneTurn,
    tileOneCSS: tileOneCSS,
    tileTwoCSS: tileTwoCSS,
    tileThreeCSS: tileThreeCSS,
    tileForCSS: tileForCSS,
    tileFiveCSS: tileFiveCSS,
    tileSixCSS: tileSixCSS,
    tileSevenCSS: tileSevenCSS,
    tileEightCSS: tileEightCSS,
    tileNineCSS: tileNineCSS,
    playerOneChoice: playerOneChoice,
    playerTwoChoice: playerTwoChoice,
    playerOneWins: playerOneWins,
    playerTwoWins: playerTwoWins,
  };

  useEffect(() => {
    const savedToJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedToJSON != null) {
      setTakenTiles(JSON.parse(savedToJSON)['takenTiles']);
      setPlayerOneTiles(JSON.parse(savedToJSON)['playerOneTiles']);
      setPlayerTwoTiles(JSON.parse(savedToJSON)['playerTwoTiles']);
      setWinnerName(JSON.parse(savedToJSON)['winnerName']);
      setPlayerOneTurn(JSON.parse(savedToJSON)['playerOneTurn']);
      setTileOneCSS(JSON.parse(savedToJSON)['tileOneCSS']);
      setTileTwoCSS(JSON.parse(savedToJSON)['tileTwoCSS']);
      setTileThreeCSS(JSON.parse(savedToJSON)['tileThreeCSS']);
      setTileForCSS(JSON.parse(savedToJSON)['tileForCSS']);
      setTileFiveCSS(JSON.parse(savedToJSON)['tileFiveCSS']);
      setTileSixCSS(JSON.parse(savedToJSON)['tileSixCSS']);
      setTileSevenCSS(JSON.parse(savedToJSON)['tileSevenCSS']);
      setTileEightCSS(JSON.parse(savedToJSON)['tileEightCSS']);
      setTileNineCSS(JSON.parse(savedToJSON)['tileNineCSS']);
      setPlayerOneChoice(JSON.parse(savedToJSON)['playerOneChoice']);
      setPlayerTwoChoice(JSON.parse(savedToJSON)['playerTwoChoice']);
      setPlayerOneWins(JSON.parse(savedToJSON)['playerOneWins']);
      setPlayerTwoWins(JSON.parse(savedToJSON)['playerTwoWins']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(saveToLocalStorage));
  }, [saveToLocalStorage]);

  const playerOneCSS = {
    background: 'none',
    border: '1px solid hsl(0, 100%, 50%)',
    backgroundImage: `url(${tileBoards[`${playerOneChoice}`]})`,
    backgroundSize: 'cover',
  };
  const playerTwoCSS = {
    background: 'none',
    border: '1px solid hsl(0, 0%, 0%)',
    backgroundImage: `url(${tileBoards[`${playerTwoChoice}`]})`,
    backgroundSize: 'cover',
  };

  const cssStyle = playerOneTurn ? playerOneCSS : playerTwoCSS;
  const handleTileCSS = (id) => {
    if (id === '1') setTileOneCSS(cssStyle);
    if (id === '2') setTileTwoCSS(cssStyle);
    if (id === '3') setTileThreeCSS(cssStyle);
    if (id === '4') setTileForCSS(cssStyle);
    if (id === '5') setTileFiveCSS(cssStyle);
    if (id === '6') setTileSixCSS(cssStyle);
    if (id === '7') setTileSevenCSS(cssStyle);
    if (id === '8') setTileEightCSS(cssStyle);
    if (id === '9') setTileNineCSS(cssStyle);
  };

  const handleTakenTiles = (id) => {
    if (!takenTiles.includes(id) && !winnerName) {
      takenTiles.push(id);
      handleTileCSS(id);
      setPlayerOneTurn(!playerOneTurn);
      playerOneTurn ? playerOneTiles.push(id) : playerTwoTiles.push(id);
      handleGameWinner();
    }
  };

  const incrementWins = (name) => {
    if (name) setPlayerOneWins(playerOneWins + 1);
    else setPlayerTwoWins(playerTwoWins + 1);
  };

  const handleGameWinner = () => {
    let playerTiles;
    let playerName;
    let winner;
    if (playerOneTurn) {
      playerTiles = playerOneTiles;
      playerName = `${playerOneChoice} Wins`;
      winner = 'Player One';
    } else {
      playerTiles = playerTwoTiles;
      playerName = `${playerTwoChoice} Wins`;
    }
    winningFields.forEach((combo) => {
      if (combo.every((tiles) => playerTiles.includes(tiles))) {
        setWinnerName(playerName);
        incrementWins(winner);
      }
    });
  };

  const handleTileClicked = (e) => {
    const id = e.target.id;
    handleTakenTiles(id);
    // console.log(playerOneWins, playerTwoWins);
    // console.log(playerOneTiles, playerTwoTiles);
  };

  const playerSelection = (e) => {
    const id = e.target.id;
    if (playerOneTurn) setPlayerOneChoice(id);
    if (!playerOneTurn) setPlayerTwoChoice(id);
    setPlayerOneTurn(!playerOneTurn);
  };

  const restartGame = () => {
    setTakenTiles([]);
    setPlayerOneTiles([]);
    setPlayerTwoTiles([]);
    setPlayerOneTurn(true);
    setWinnerName();
    setTileOneCSS();
    setTileTwoCSS();
    setTileThreeCSS();
    setTileForCSS();
    setTileFiveCSS();
    setTileSixCSS();
    setTileSevenCSS();
    setTileEightCSS();
    setTileNineCSS();
  };

  const NewGame = () => {
    restartGame();
    setPlayerOneChoice();
    setPlayerTwoChoice();
    setPlayerOneWins(0);
    setPlayerTwoWins(0);
  };

  const gameOverCondition = takenTiles.length === 9 || winnerName;

  return (
    <div className="tick-tack-toe-page">
      <h4 className="tick-tack-toe-logo">Family Guy TickTackToe</h4>
      <PlayerChoice
        playerOneTurn={playerOneTurn}
        playerOneChoice={playerOneChoice}
        playerTwoChoice={playerTwoChoice}
        playerSelection={playerSelection}
        playerOneWins={playerOneWins}
        playerTwoWins={playerTwoWins}
      />
      {playerTwoChoice && (
        <div className="tick-tack-toe-board">
          {!gameOverCondition && (
            <p className="main-ticktacktoe-text">
              {playerOneTurn
                ? `${playerOneChoice} make a move`
                : `${playerTwoChoice} make a move`}
            </p>
          )}
          <p className="main-ticktacktoe-text">{winnerName}</p>
          <GameBoard
            tileOneCSS={tileOneCSS}
            tileTwoCSS={tileTwoCSS}
            tileThreeCSS={tileThreeCSS}
            tileForCSS={tileForCSS}
            tileFiveCSS={tileFiveCSS}
            tileSixCSS={tileSixCSS}
            tileSevenCSS={tileSevenCSS}
            tileEightCSS={tileEightCSS}
            tileNineCSS={tileNineCSS}
            handleTileClicked={handleTileClicked}
          />
        </div>
      )}
      <React.Fragment>
        {gameOverCondition && (
          <button
            onClick={restartGame}
            className="btn btn-lemon"
            variant="lemon"
          >
            Start Again
          </button>
        )}
      </React.Fragment>
      <React.Fragment>
        {playerTwoChoice && (
          <button
            style={{ margin: '2rem' }}
            onClick={NewGame}
            className="btn btn-danger"
            variant="danger"
          >
            New Game
          </button>
        )}
      </React.Fragment>
    </div>
  );
}

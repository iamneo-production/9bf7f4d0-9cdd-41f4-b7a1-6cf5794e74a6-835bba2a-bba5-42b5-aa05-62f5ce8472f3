import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/votehere.css';
import barcaLogo from '../assets/images/barca.png';
import DortmundLogo from '../assets/images/dortmund.png';
import AjaxLogo from '../assets/images/ajax.png';
import ChelseaLogo from '../assets/images/chelsea.png';

const partiesData = [
  { id: 1, name: 'Barcelona', image: barcaLogo },
  { id: 2, name: 'Dortmund', image: DortmundLogo },
  { id: 3, name: 'Ajax', image: AjaxLogo },
  { id: 4, name: 'Chelsea', image: ChelseaLogo },
];

function VoteHere() {
  const initialVotes = JSON.parse(localStorage.getItem('votes')) || {};
  const [votes, setVotes] = useState(initialVotes);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (partyId) => {
    const updatedVotes = { ...votes };
    updatedVotes[partyId] = (updatedVotes[partyId] || 0) + 1;
    setVotes(updatedVotes);
  };

  const handleReset = () => {
    // Reset all vote counts to 0
    const resetVotes = {};
    partiesData.forEach((party) => {
      resetVotes[party.id] = 0;
    });
    setVotes(resetVotes);
  };

  return (
    <div className="vote-container">
      <div className="toptext">
        <Link to="/dashboard"><p>Dashboard</p></Link>
      </div>
      <h1>Vote for your Favourite Team</h1>
      <div className="party-list">
        {partiesData.map((party) => (
          <div className="party" key={party.id}>
            <img src={party.image} alt={`${party.name} Logo`} />
            <h2>{party.name}</h2>
            <p>Votes: {votes[party.id] || 0}</p>
            <button onClick={() => handleVote(party.id)}>Vote</button>
          </div>
        ))}
      </div>

      <div className="results-container">
        <h2>Results:</h2>
        <ul className="results-list">
          {partiesData.map((party) => (
            <li key={party.id}>
              {party.name}: {votes[party.id] || 0} votes
            </li>
          ))}
        </ul>
        <p className="results-total">
          Total Votes: {Object.values(votes).reduce((total, count) => total + count, 0)}
        </p>
        <button onClick={handleReset} className="reset-button">
          Reset Votes
        </button>
      </div>
    </div>
  );
}

export default VoteHere;

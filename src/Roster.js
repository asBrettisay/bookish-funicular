import React from 'react';
import {getRoster, getPlayer} from './rosterService';
import { Route, Link } from 'react-router-dom';
import './Roster.css'

export function Player(props) {
  const player = getPlayer(props.match.params.player_id);
  return (
    <div>
      <img src={player.image} />
      <h1>{player.name}</h1>
      <Link to="/roster">Back</Link>
    </div>
  )
}

function Squad(props) {
  const players = getRoster().map((player, i) => (
    <div key={i}>
      <Link to={`/roster/${player.id}`}>
        {player.name}
      </Link>
    </div>
  ))

  return (
    <div>
      {players}
    </div>
  )
}

export default function Roster(props) {
  console.log(props.match.isExact ? 'Is exact' : "is not exact");


  return (
    <div>
      <h1>Team Roster</h1>
      <Squad />
    </div>
  )
}
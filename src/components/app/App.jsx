import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './characterList/CharacterList';

export default function App() {
  return (
    <Switch>
      <Route path="/" component={CharacterList}/>
    </Switch>
  );
}

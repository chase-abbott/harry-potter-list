import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './characterList/CharacterList';
import CharacterDetail from './CharacterDetail';

export default function App() {
  return (
    <Switch>
      <Route exact path="/:id" component={CharacterDetail}/>
      <Route path="/" component={CharacterList}/>
    </Switch>
  );
}

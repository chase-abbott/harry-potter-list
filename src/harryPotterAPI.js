const getCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.json());
};

export { getCharacters };

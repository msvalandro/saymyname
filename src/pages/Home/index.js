import React, { useState, useEffect } from 'react';
import {
  FaUser,
  FaBirthdayCake,
  FaBriefcase,
  FaCross,
  FaHeartbeat,
  FaSkullCrossbones,
  FaQuestion,
} from 'react-icons/fa';

import { CharacterList, CharacterData } from './styles';
import api from '../../services/api';

function Character({ img, name, nickname, birthday, occupation, status }) {
  function handleIcon(status) {
    if (status === 'Alive') {
      return <FaHeartbeat />;
    } else if (status === 'Deceased') {
      return <FaSkullCrossbones />;
    } else if (status === 'Presumed dead') {
      return <FaCross />;
    } else {
      return <FaQuestion />;
    }
  }

  return (
    <li>
      <img src={img} alt={name} />
      <CharacterData>
        <strong>{name}</strong>
        <span>
          <FaUser />
          {nickname}
        </span>
        <span>
          <FaBirthdayCake />
          {birthday}
        </span>
        {occupation.map(o => (
          <span key={o}>
            <FaBriefcase />
            {o}
          </span>
        ))}
        <span>
          {handleIcon(status)}
          {status}
        </span>
      </CharacterData>
    </li>
  );
}

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get('/characters', {
        params: {
          category: 'Breaking Bad',
        },
      });

      setCharacters(response.data);
    }

    loadCharacters();
  }, []);

  return (
    <CharacterList>
      {characters.map(character => (
        <Character
          key={character.char_id}
          img={character.img}
          name={character.name}
          nickname={character.nickname}
          birthday={character.birthday}
          occupation={character.occupation}
          status={character.status}
        />
      ))}
    </CharacterList>
  );
}

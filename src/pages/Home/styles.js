import styled from 'styled-components';

export const CharacterList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  justify-items: center;

  > li {
    width: 225px;
    background: #fff;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
`;

export const CharacterData = styled.div`
  padding: 20px;
  padding-top: 5px;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 20px;
    line-height: 20px;
    color: #333;
    margin-bottom: 15px;
  }

  span {
    font-size: 14px;
    height: 30px;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
      min-height: 14px;
      min-width: 14px;
    }
  }
`;

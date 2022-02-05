import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: white;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    transition: border-color 0.4s ease-out;

    &:hover {
      border-color: var(--green);
    }

    & + button:hover {
      border-color: var(--red);
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      font-size: 1rem;
      color: var(--text-title);
    }
`
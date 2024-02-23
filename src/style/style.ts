import { Link } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

export const MainStyled = styled.main`
  background-color: #f5f5f5;
  padding-bottom: 2.5rem;
  min-height: 70vh;
`
export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;

  :hover {
    color: white;
  }
`
export const TextDescription = styled.p`
  margin-top: 1rem;
`
export const GlobalStyle = createGlobalStyle`
    :root{

      };

   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body, #root{
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #001126;
      color: white;
    };

    footer{
      margin-top: auto;
    }

    p, h1, h2, h3{
      margin:0;
      padding:0;
    }

`

export const InputStyled = styled.input`
  /* all: unset; */
  width: 100%;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid #ced4da;
`
export const InputContainer = styled.div`
  /* all: unset; */
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    input {
      margin-bottom: 2rem;
    }
  }
`

export const GlobalButtonStyled = styled.button`
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border: none;
  background-color: #0047a1;
  color: white;
  font-weight: 700;
  margin-top: 1rem;
`

export const WhiteGlobalButtonStyled = styled.button`
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ced4da;
  border: none;
  background-color: white;
  color: #0047a1;
  font-weight: 700;
  margin-top: 1rem;
`
export const HasRegisterButtonStyled = styled.button`
  border: 1px solid #ced4da;
  border: none;
  background: none;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`

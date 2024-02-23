/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback, useContext, useEffect, useState } from 'react'

import {
  HasRegisterButtonStyled,
  InputContainer,
  InputStyled,
  GlobalButtonStyled,
} from 'style/style'

import useLogin from 'hooks/useLogin'

interface ILoginComponentProps {
  onRegisterButtonClick: () => void
}

const LoginComponent: React.FC<ILoginComponentProps> = ({
  onRegisterButtonClick,
}) => {
  const { email, error, handleLogin, senha, setEmail, setSenha } = useLogin()
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      setEmail(userData.email)
      setSenha(userData.senha)
    }
  }, [setEmail, setSenha])

  return (
    <InputContainer>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="emailLogin">
          E-mail:
          <InputStyled
            type="email"
            id="emailLogin"
            name="emailLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="senhaLogin">
          Password:
          <InputStyled
            type="password"
            id="senhaLogin"
            name="senhaLogin"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>
        {error && <label style={{ color: 'red' }}>{error}</label>}
        <GlobalButtonStyled type="submit">Enviar</GlobalButtonStyled>
      </form>
      <HasRegisterButtonStyled type="button" onClick={onRegisterButtonClick}>
        Não tenho Cadastro
      </HasRegisterButtonStyled>
    </InputContainer>
  )
}
export default memo(LoginComponent)

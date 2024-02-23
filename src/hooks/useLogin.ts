import { FormEvent, useCallback, useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { LoginContext } from 'context/LoginContext'

interface LoginData {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  senha: string
  setSenha: React.Dispatch<React.SetStateAction<string>>
  error: string
  handleLogin: (event: FormEvent<HTMLFormElement>) => void
}

const useLogin = (): LoginData => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [error, setError] = useState<string>('') // Estado para armazenar erros
  const navigate = useNavigate()
  const { users } = useContext(LoginContext)
  const userLoggingIn = users?.find((usuario) => usuario.email === email)

  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setError('')
      if (!userLoggingIn) {
        setError('E-mail não cadastrado')
        return
      }

      if (userLoggingIn?.senha !== senha) {
        setError('Senha Incorreta')
        return
      }

      localStorage.setItem('userData', JSON.stringify(userLoggingIn))
      navigate('/')
    },
    [navigate, senha, userLoggingIn],
  )

  return { email, setEmail, senha, setSenha, error, handleLogin }
}

export default useLogin

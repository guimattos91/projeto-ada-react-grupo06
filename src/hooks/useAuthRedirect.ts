import { useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { LoginContext } from 'context/LoginContext'

const useAuthRedirect = (): void => {
  const navigate = useNavigate()
  const { user } = useContext(LoginContext)

  useEffect(() => {
    if (!user) {
      navigate('/login') // Redireciona para a página de login se o usuário não estiver logado
    }
  }, [user, navigate])
}

export default useAuthRedirect

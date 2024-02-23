import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react'

import Api from 'services/API'

import { UserData } from 'types'

interface LoginContextProps {
  user: UserData | null
  users: UserData[] | null
  error: string | null
  isLoading: boolean
  fetchUsers: () => Promise<void>
  fetchUser: (id: string) => Promise<void>
}

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps)

const LoginContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [users, setUsers] = useState<UserData[] | null>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/`)
      setUsers(data)
    } catch {
      setError('Erro: Cadastro não encontrado!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchUser = useCallback(async (id: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const { data } = await Api.get(`/${id}`)
      setUser(data)
    } catch {
      setError('Erro: Cadastro não encontrado!')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <LoginContext.Provider
      value={useMemo(
        () => ({
          user,
          users,
          error,
          isLoading,
          fetchUser,
          fetchUsers,
        }),
        [user, users, error, fetchUser, fetchUsers, isLoading],
      )}
    >
      {children}
    </LoginContext.Provider>
  )
}

export { LoginContext, LoginContextProvider }

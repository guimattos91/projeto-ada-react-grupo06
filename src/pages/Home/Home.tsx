import { memo, useContext, useEffect } from 'react'

import { LoginContext } from 'context/LoginContext'

import ColumnsContainerComponent from 'components/ColumnsContainerComponent'
import Header from 'components/Header'

import useAuthRedirect from 'hooks/useAuthRedirect'
import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()
  const { user, fetchUser } = useContext(LoginContext)
  useAuthRedirect()

  useEffect(() => {
    setTitle('home.head-title')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData')
    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      fetchUser(userData.id)
    }
  }, [fetchUser])

  return (
    <>
      <Header />
      <main className="d-flex flex-column align-items-center">
        <h2>Seja Bem vindo, {user?.nome}</h2>
        <ColumnsContainerComponent />
      </main>
    </>
  )
}

export default memo(Home)

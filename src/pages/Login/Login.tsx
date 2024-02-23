/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useContext, useEffect, useState } from 'react'

import { LoginContext } from 'context/LoginContext'

import Header from 'components/Header'
import LoginComponent from 'components/LoginComponent'
import RegisterComponent from 'components/RegisterComponent'

import useTitle from 'hooks/useTitle'

const Login: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false)
  const { fetchUsers } = useContext(LoginContext)

  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <main>
        {!isRegistered && (
          <RegisterComponent
            onRegisterButtonClick={() => setIsRegistered(true)}
          />
        )}
        {isRegistered && (
          <LoginComponent
            onRegisterButtonClick={() => setIsRegistered(false)}
          />
        )}
      </main>
    </>
  )
}

export default memo(Login)

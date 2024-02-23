/* eslint-disable jsx-a11y/label-has-associated-control */
import { memo, useCallback, useState } from 'react'

import {
  HasRegisterButtonStyled,
  InputContainer,
  InputStyled,
  GlobalButtonStyled,
} from 'style/style'

import Api from 'services/API'

import { UserData } from 'types'

interface ILoginComponentProps {
  onRegisterButtonClick: () => void
}

const RegisterComponent: React.FC<ILoginComponentProps> = ({
  onRegisterButtonClick,
}) => {
  const [formData, setFormData] = useState<UserData>({
    nome: '',
    email: '',
    senha: '',
  })
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      await Api.post('/', formData)
      setIsSuccess(true)
      setFormData({
        ...formData,
        nome: '',
        email: '',
        senha: '',
      })
    },
    [formData],
  )

  return (
    <InputContainer>
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <InputStyled
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={(event) =>
              setFormData({
                ...formData,
                nome: event.currentTarget.value,
              })
            }
            required
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <InputStyled
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.currentTarget.value,
              })
            }
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <InputStyled
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={(event) =>
              setFormData({
                ...formData,
                senha: event.currentTarget.value,
              })
            }
            required
          />
        </label>
        <GlobalButtonStyled type="submit">Enviar</GlobalButtonStyled>
        {isSuccess && <p> Cadastro Realizado com sucesso!</p>}
      </form>
      <HasRegisterButtonStyled type="button" onClick={onRegisterButtonClick}>
        Já sou Cadastrado
      </HasRegisterButtonStyled>
    </InputContainer>
  )
}
export default memo(RegisterComponent)

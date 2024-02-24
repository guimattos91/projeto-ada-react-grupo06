import styled from 'styled-components'

export const ColumnDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  width: 350px;
  border-radius: 15px;
  background-color: #00234f;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 310px) {
    width: 310px;
  }
`
export const ButtonNoStyle = styled.button`
  background: none;
  border: none;
`
export const ColumnDivIntern = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.15rem;
  overflow-y: scroll;
`

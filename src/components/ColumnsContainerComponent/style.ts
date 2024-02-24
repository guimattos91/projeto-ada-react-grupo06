import styled from 'styled-components'

export const ColumnDivContainer = styled.div`
  margin: auto;
  display: flex;
  padding-top: 2rem;
  width: 100%;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 768px) {
    overflow-x: hidden;
    overflow-y: auto;
  }
`
export const InsideColumnDiv = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

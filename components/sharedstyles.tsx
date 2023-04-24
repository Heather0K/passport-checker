import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
 
  align-items: center;
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
  text-decoration: none;
`

export const Description = styled.p`
  max-width: 800px;
  font-size: 1.2rem;
  text-align: center;
`

export const Warning = styled.div`
  margin-top: 2em;
  background-color: rgba(245, 128, 43, 0.31);
  max-width: 800px;
  font-size: 1rem;
  border: 3px solid rgb(245, 128, 43);
  border-radius: 12px;
  padding: 1em;

  p {
    margin: 0.5em 0;
  }
  svg {
    fill: #522609;
    vertical-align: middle;
  }
`

export const Error = styled(Warning)`
  background-color: rgba(246, 9, 61, 0.31);
  border: 3px solid rgb(126, 4, 4);
  
  svg {
    fill: #520914;
  }
`

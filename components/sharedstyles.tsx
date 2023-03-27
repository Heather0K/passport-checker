import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
 
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 2.5rem;
  text-align: center;
  text-decoration: none;
`

const Description = styled.p`
  max-width: 800px;
  font-size: 1.2rem;
  text-align: center;
`

const Warning = styled.div`
  margin-top: 2em;
  background-color: rgba(245, 128, 43, 0.31);
  max-width: 800px;
  font-size: 1rem;
  border: 3px solid rgb(245, 128, 43);
  border-radius: 12px;
  padding: 1em;

  svg {
    fill: #522609;
    vertical-align: middle;
    
  }

`
export { Container, Main, Title, Description, Warning }

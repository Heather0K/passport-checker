import styled from 'styled-components'
import PassportIcon from "../public/icons/passport";

const Container = styled.header`
  background-color: #2a2a2a;
  height: 80px;
  width: 100vw;
`
const Title = styled.div`
  color: #f6f6f6;
  padding: 1em;
  font-size: 25px;
  font-weight: 600;

  svg {
    fill: #f6f6f6;
    vertical-align: middle;
  }

`
export default function SiteHeader() {
    return (
        <Container>
            <Title>  <PassportIcon/> Passport Checker </Title>
        </Container>
    )
}



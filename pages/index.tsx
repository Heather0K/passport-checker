import Head from 'next/head'
import {
    Container, Description,
    Main,
    Title, Warning,
} from '../components/sharedstyles'
import Form from '../components/form'
import PassportIcon from "../public/icons/passport";
import EarthIcon from "../public/icons/earth";
import SiteHeader from "../components/siteHeader";
import InfoIcon from "../public/icons/info";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Passport Checker</title>
        <meta name="description" content="Passport checker, check your UK passport is valid to travel to the EU" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <SiteHeader/>
     <Main>
        <Title>
          Welcome to passport checker! <PassportIcon/> <EarthIcon/>
        </Title>

         <Description>
             If you’re planning to travel in the EU, Norway, Switzerland, Iceland or Liechtenstein:
             <br/>
             <br/>
             your passport should have at lest 3 months left on the expiry date from the date you plan to leave
             and should be less than 10 years old (issue date) on the day you enter the country.

         </Description>


         <Form />
         <Warning>
             <InfoIcon/>  Please double check your passport before traveling, this site may not be accurate!
         </Warning>
      </Main>
    </Container>
  )
}

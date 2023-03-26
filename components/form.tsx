import styled from 'styled-components'
import Link from 'next/link'
import {useGetTimeBetween} from "../hooks/use-get-time-diff";
import {useState} from "react";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

export default function Form() {

    const today = new Date();
    const todayDate = today.toDateString();

    const [issueValid, setIssueValid] = useState(null);

    console.log(issueValid)


    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {
            issue: event.target.issue.value,
            expiry: event.target.expiry.value,
        }
        console.log(todayDate, data.issue)
        const printReadable = useGetTimeBetween(data.issue, todayDate);
        console.log(printReadable)

    }

    return (
        <FlexContainer>

            <form onSubmit={handleSubmit}>
                <label htmlFor="issue">Issue date</label>
                <input type="date" id="issue" name="issue" required/>

                <label htmlFor="expiry">Expiry Date</label>
                <input type="date" id="expiry" name="expiry" required/>

                <button type="submit">Submit</button>

            </form>

            <p>If you’re planning to travel in the EU, Norway, Switzerland, Iceland or Liechtenstein:</p>
         your passport should have at lest 3 months left on the expiry date from the date you plan to leave
          and it ahould be less than 10 years old (issue date) on the day you enter the country

            <sup> Please double check yourself before traveling, this site does not account for leap years or Febuary.. and is only meant to be a fun project
            because I apparently think date math in javascript is fun </sup>

        </FlexContainer>
    )
}



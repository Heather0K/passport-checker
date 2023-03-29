import styled from 'styled-components'
import {useGetTimeBetween} from "../hooks/use-get-time-diff";
import {useState} from "react";
import MagicIcon from "../public/icons/magic";
import TickIcon from "../public/icons/tick";
import NoEntryIcon from "../public/icons/noentry";
import PlaneIcon from "../public/icons/plane";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;

  font-weight: 500;
`

const Result = styled.div`
  border: 2px solid #12202d;
  border-radius: 4px;
  padding: 1em;
  margin: 1em;
  font-size: 1.2em;

  svg {
    vertical-align: middle;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1em;

  & label {
    font-size: 1.2rem;
    padding: 0.5em;

    :hover {
      svg {
        transform: translate(120px);
        opacity: 0;
      }
    }

    svg {
      vertical-align: middle;
      transform: rotateZ(-45deg);
      transition: all ease 0.5s;

    }
  }

  & input {
    font-size: 1rem;
    height: 50px;
    width: 150px;
    border: 2px solid black;
    transition: all ease 0.2s;
    border-radius: 12px;
  }

`

const SubmitButton = styled.button`
  height: 50px;
  width: 400px;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid black;
  background-color: #fcd867;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  transition: all ease 0.2s;

  :hover {
    cursor: pointer;
    transform: translateY(2px);
    box-shadow: 0 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`

export default function Form() {

    const today = new Date();
    const todayDate = today.toDateString();

    const [isLoading, setIsLoading] = useState(false);
    const [passAge, setPassAge] = useState(null);
    const [travelDiff, setTravelDiff] = useState(null);
    const [readableAge, setReadableAge] = useState('');
    const [readableExpiry, setReadableExpiry] = useState('');
    const [lastDate, setLastDate] = useState('');


    const handleSubmit = async (event) => {
        setIsLoading(true)
        event.preventDefault()

        const data = {
            issue: event.target.issue.value,
            expiry: event.target.expiry.value,
            travel: event.target.travel.value,
        }
        const {printReadable: readableAge, diffMonths: issueMonths} = useGetTimeBetween(data.issue, todayDate);
        const {
            printReadable: readableTravelDiff,
            diffMonths: expiryMonths
        } = useGetTimeBetween(data.travel, data.expiry);
        const {printReadable: expiry} = useGetTimeBetween(todayDate, data.expiry);


        const expiryDate = new Date(data.expiry);
        expiryDate.setDate(expiryDate.getDate() - 90);


        setPassAge(issueMonths)
        setTravelDiff(expiryMonths)
        setReadableAge(readableAge)
        setReadableExpiry(expiry)
        setLastDate(expiryDate.toDateString())
        setIsLoading(false)

    }

    return (
        <FlexContainer>


            <FormContainer onSubmit={handleSubmit}>
                <div style={{display: 'flex'}}>
                    <FormItem>
                        <label htmlFor="issue">Issue date </label>
                        <input type="date" id="issue" name="issue" required/>
                    </FormItem>

                    <FormItem>
                        <label htmlFor="expiry">Expiry Date </label>
                        <input type="date" id="expiry" name="expiry" required/>
                    </FormItem>

                    <FormItem>
                        <label htmlFor="expiry">Travel Date <PlaneIcon/></label>
                        <input type="date" id="travel" name="travel" required/>
                    </FormItem>
                </div>

                <SubmitButton type="submit">Check your passport <MagicIcon/></SubmitButton>

            </FormContainer>

            {!isLoading && passAge && (
                <Result>
                    <p> Passport is less than 10 years old ? {passAge < 120 ? <TickIcon fill={'green'}/> :
                        <NoEntryIcon fill={'red'}/>} </p>
                    <p> Expiry date is less than 3 months from departure ? {travelDiff > 3 ?
                        <TickIcon fill={'green '}/> : <NoEntryIcon fill={'red'}/>} </p>

                    <p> Your passport is {readableAge} old</p>
                    <p> Your passport will expire in {readableExpiry}</p>

                    <p> The last date you can travel in the EU is {lastDate} </p>
                </Result>
            )}


        </FlexContainer>
    )
}



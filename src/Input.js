import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addDates } from "./state/data/dataActions";

const Input = () => {
  // states
  // input
  const [message, setMessage] = useState("");
  // output
  const [results, setResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(false);
  //   alert can be its own comp. with different properties. show type of bool, and a type, string, for dynamic styling. success and danger
  const [alert, setAlert] = useState("");

  //   init redux
  const dispatch = useDispatch();

  //   get the iso date to compare if the date from user input is a date before 2019
  const dateLimit = new Date("1-1-2019").toISOString();

  // submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(message);
    // validating the date and making sure it is a number
    let isValidDate = Date.parse(message);
    if (isNaN(isValidDate)) {
      setAlert("Invalid date.");
    } else {
      // converting date from user input to iso string
      let dateInput = new Date(message).toISOString();
      if (dateInput < dateLimit) {
        setAlert(
          `Your date  was ${new Date(
            message
          ).toISOString()} too old. Try again.`
        );
      } else if (dateInput > dateLimit) {
        let dates = {
          id: Date.now(),
          date: message,
          ISODate: dateInput,
        };
        dispatch(addDates({ dates }));
        setAlert(
          `Success! Your date ${dateInput} was successfully tested and stored.`
        );
      }
      //   setAlert("This is a valid date format.");
    }

    setMessage("");
    setButtonStatus(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter texts here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* the text of the button is conditionally rendered based on the boolean value of buttonStatus */}
      <button
        disabled={buttonStatus}
        className="submit-btn"
        type="submit"
        aria-label="Submit"
      >
        {buttonStatus ? "Submitting..." : "Submit"}
      </button>
      {/* if the results, submitted text is greater than 0 then show a message otherwise display none */}
      {alert && <p className="results">{results.length > 0 && alert}</p>}
    </Form>
  );
};

// styling the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    outline: none;
    border: 1px solid #7e7e7e;
    padding: 10px;
    border-radius: 5px;
    margin: 20px;

    &::placeholder {
      text-transform: capitalize;
    }
    /* focus styles */
    /* &:focus  */
  }

  button {
    background: #000;
    color: #fff;
    border: 0;
    cursor: pointer;
    padding: 7px;
    border-radius: 7px;
    text-transform: capitalize;
    width: 100px;
    height: 30px;

    :disabled,
    button[disabled] {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #000;
      cursor: default;
    }
  }

  .results {
    padding: 20px;
    margin: 30px auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export default Input;

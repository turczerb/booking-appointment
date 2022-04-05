import { useState } from "react";
import DatePicker from "sassy-datepicker";
import { TimePicker } from "sassy-datepicker";

const Book = (email, date, dateHour, name, number, info) => {
  let status = true;
  return fetch("https://my-salon-api.herokuapp.com/appointments", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, date, dateHour, name, number, info }), // return res.json
  })
    .then((res) => {
      if (!res.ok) {
        status = false;
      }
      return res;
    })
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      if (status) {
        return info;
      }
      throw info;
    });
};

const BookApp = () => {
  const [date, setDate] = useState(new Date());
  const [dateHour, setDateHour] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [info, setInfo] = useState("");

  const [time, setTime] = useState({
    minutes: 0,
    hours: 18,
  });

  const onChangeTime = (newTime) => {
    console.log(`New date selected`, newTime);
    setDateHour(newTime);
  };

  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Book();
  };

  const minTime = { hours: 10, minutes: 0 };
  const maxTime = { hours: 20, minutes: 0 };
  return (
    <div>
      <h1 className="title">Book an appointment</h1>
      <div className="formContainer">
        <DatePicker
          onChange={onChange}
          selected={date}
          minDate={new Date()}
          maxDate={new Date(2022, 4, 31)}
        />
        <TimePicker
          onChange={onChangeTime}
          selected={time}
          minTime={minTime}
          maxTime={maxTime}
        />

        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="name" onChange={handleNameChange} />
          <input
            type="email"
            placeholder="email"
            onChange={handleEmailChange}
          />
          <input
            type="text"
            placeholder="phone number"
            onChange={handleNumberChange}
          />
          <input
            type="text"
            placeholder="other information"
            onChange={handleInfoChange}
          />
          <button className="btn-nav" onChange={Book}>
            Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookApp;

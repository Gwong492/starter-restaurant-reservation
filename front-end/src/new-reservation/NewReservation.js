import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router-dom";
import { today } from "../utils/date-time";

function NewReservation() {
    const navigate = useNavigate()

    const initialFormData = {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        reservationDate: today(),
        reservationTime: "",
        partySize: "1",
    }

    const [ formData, setFormData ] = useState({...initialFormData})

    const submitHandler = (event) => {
        event.preventDefault();
        
        if (window.confirm("Are you sure you want to schedule reservation?")) {
            console.log("submitted");
            navigate("/")
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event.target.value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        })) 
    }

    return (
        <div className="container w-50">
            <label>
                <h2>New Reservation</h2>
            </label>
            <br/>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName">
                    First Name &nbsp;
                </label>
                <input
                    className="form-control w-30"
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    onChange={handleChange}
                    value={formData.firstName}
                ></input>
                <label htmlFor="lastName">
                    Last Name &nbsp;
                </label>
                <input
                    className="form-control w-30"
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    onChange={handleChange}
                    value={formData.lasteName}
                ></input>
                <br />
                <label htmlFor="mobileNumber">
                    Mobile Number &nbsp;
                </label>
                <input
                    className="mobileNumber w-30"
                    id="mobileNumber"
                    type="tel"
                    name="mobileNumber"
                    pattern="^\d{3}-\d{3}-\d{4}$"
                    required
                    onChange={handleChange}
                    value={formData.mobileNumber}
                    onInvalid={(element) => {element.target.setCustomValidity("Must match format (123-456-7890)")}}
                ></input>
                <br />
                <label htmlFor="reservationDate">
                    Reservation Date &nbsp;
                </label>
                <input
                    className="reservationDate"
                    id="reservationdate"
                    type="date"
                    name="reservationDate"
                    required
                    min={today()}
                    onChange={handleChange}
                    value={formData.reservationDate}
                ></input>
                <br />
                <label htmlFor="reservationTime">
                    Reservation Time &nbsp;
                </label>
                <input
                    className="reservationTime"
                    id="reservationTime"
                    type="time"
                    name="reservationTime"
                    min={"08:00"}
                    max={"22:00"}
                    required
                    onChange={handleChange}
                    value={formData.reservationTime}
                ></input>
                <br />
                <label htmlFor="partySize">
                    Size of Party &nbsp;
                </label>
                <input
                    className="partySize"
                    id="partySize"
                    type="number"
                    name="partySize"
                    min={1}
                    max={6}
                    required
                    onChange={handleChange}
                    value={formData.partySize}
                ></input>
                <br />
                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Submit
                </button>
                <button
                    className="btn btn-secondary"
                    type="cancel"
                >
                    Cancel
                </button>
            </form>
        </div>
    )
}

export default NewReservation;
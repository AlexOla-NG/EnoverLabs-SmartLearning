import React, { useState } from "react";
import Calendar from "react-calendar";

// TODO: stopped here
// style calendar

const DatePicker = () => {
	const [value, onChange] = useState(new Date()); // no params defaults to today's date

	return <Calendar onChange={onChange} value={value} />;
};

export default DatePicker;

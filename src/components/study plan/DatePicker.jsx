import React, { useState } from "react";
import Calendar from "react-calendar";

const DatePicker = () => {
	const [value, onChange] = useState(new Date()); // no params defaults to today's date
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return (
		<Calendar
			onChange={onChange}
			value={value}
			nextLabel={null}
			next2Label={null}
			prevLabel={null}
			prev2Label={null}
			formatShortWeekday={(locale, value) =>
				["S", "M", "T", "W", "T", "F", "S"][value.getDay()]
			}
			tileClassName={({ date, view }) => {
				// date will return every date visible on calendar and view will view type (eg. month)
				if (
					date.toLocaleDateString("en-GB", options) ===
					new Date().toLocaleDateString("en-GB", options)
				) {
					return "highlight"; // your class name
				}
			}}
		/>
	);
};

export default DatePicker;

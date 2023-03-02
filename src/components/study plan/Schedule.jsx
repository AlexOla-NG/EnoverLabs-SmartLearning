import React from "react";
import { ReactComponent as CalendarIcon } from "../../assets/svg/calendar-icon.svg";
import DatePicker from "./DatePicker";

// NOTE: all links in schedule will redirect to the 404 page

// TODO: stopped here
// finish setting up schedule component

const Schedule = () => {
	return (
		<section className="schedule">
			<div className="text-details">
				<div className="header-wrapper">
					<h1>schedule</h1>
					<CalendarIcon />
				</div>
				<p>Pick the best study time that works for you</p>
			</div>

			<div className="date-picker">
				<DatePicker />
			</div>
		</section>
	);
};

export default Schedule;

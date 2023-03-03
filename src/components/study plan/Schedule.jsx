import React from "react";
import { ReactComponent as CalendarIcon } from "../../assets/svg/calendar-icon.svg";
import CreateSchedule from "./CreateSchedule";
import DatePicker from "./DatePicker";

// NOTE: all links in schedule will redirect to a coming soon modal (use mui)

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

			<div className="date-schedule-wrapper">
				<div className="date-picker">
					<DatePicker />
				</div>

				<hr />

				<div className="create-schedule">
					<CreateSchedule />
				</div>
			</div>
		</section>
	);
};

export default Schedule;

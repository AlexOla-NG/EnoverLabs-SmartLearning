import React from "react";
import { Button } from "@mui/material";
import { ReactComponent as TwoBarsIcon } from "../../assets/svg/two-bars-icon.svg";

const CreateSchedule = () => {
	return (
		<div>
			<TwoBarsIcon />
			<div className="create-schedule-wrapper">
				<p>You Have No Schedule Set</p>
				<Button
					variant="outlined"
					sx={{
						borderTop: "unset",
						borderLeft: "unset",
						borderRight: "unset",
					}}
				>
					Create a Schedule
				</Button>
			</div>
		</div>
	);
};

export default CreateSchedule;

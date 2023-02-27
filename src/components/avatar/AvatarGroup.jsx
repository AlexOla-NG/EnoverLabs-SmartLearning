import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import student1 from "../../assets/images/student-1.png";
import student2 from "../../assets/images/student-2.png";
import student3 from "../../assets/images/student-3.png";
import student4 from "../../assets/images/student-4.png";

const GroupAvatars = () => {
	return (
		<AvatarGroup max={4}>
			<Avatar alt="Travis Howard" src={student1} />
			<Avatar alt="Cindy Baker" src={student2} />
			<Avatar alt="Syndey Walker" src={student3} />
			<Avatar alt="Trevor Henderson" src={student4} />
		</AvatarGroup>
	);
};

export default GroupAvatars;

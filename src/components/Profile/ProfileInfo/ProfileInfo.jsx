import React from "react";
import Preloader from "../../UI/Preloader/Preloader";
import c from "./ProfileInfo.module.scss";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}

	return (
		<div>
			<div className={c.profile}>
				<img
					className={c.avatar}
					src={
						props.profile.photos.large
							? props.profile.photos.large
							: "https://sun9-57.userapi.com/impg/KtbsG2bjwdV4-4ihTCF52zo-rP6W7HKX1qHNKg/eVFopKEUYqk.jpg?size=510x510&quality=95&sign=9779954ff44ed3e24da9be688d5ee769&type=album"
					}
					alt="ava"
				/>
				<div className={c.nameAndDescription}>
					<p className={c.profileName}>{props.profile.fullName}</p>
					<p className={c.profileDescription}>
						{props.profile.aboutMe}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;

import React from "react";
import { Preloader } from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="photo3" />

        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

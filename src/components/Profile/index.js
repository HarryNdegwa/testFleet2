import React from "react";

import "./style.css";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-meta h-100">
        <div id="profile-meta-id">
          <small>
            <p>
              Chat ID:
              <span className="ml-1" style={{ fontWeight: "600" }}>
                3362Gd2
              </span>
            </p>
          </small>
        </div>
      </div>
      <div className="profile-action h-100">
        <div></div>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";

import "./style.css";

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-meta h-100"></div>
      <div className="profile-action h-100">
        <div id="profile-id">
          <small>
            <p>
              Chat ID:
              <span className="ml-1" style={{ fontWeight: "600" }}>
                3362Gd2
              </span>
            </p>
          </small>
        </div>

        <h5>Inquiry about relocation</h5>

        <p>Vacancy adds help you attract potential hires who are</p>
        <div id="profile-action-time">
          <p style={{ fontWeight: "600" }}>11:00 a.m</p>
        </div>

        <div class="unread-count">
          <p>4</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

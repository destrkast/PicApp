import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from '../../services/firebase';

export default function SuggestedProfile({
  username,
  profileDocId,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowedUser() {
    setFollowed(true);

    // firebase: create 2 services (functions)
    // update the following array of the logged in user (my account for now)
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    //update  the followers array of the user who has been followed
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return !followed ? (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt="profile pic"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
          <p>{profileDocId}</p>
        </Link>
      </div>
      <button className="text-xs font-bold text-blue-medium" onClick={handleFollowedUser}>Follow</button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};

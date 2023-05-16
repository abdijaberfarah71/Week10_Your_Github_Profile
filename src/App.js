import React, { useState, useEffect } from "react";

// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos

import "./App.css";
import MyProfile from "./components/MyProfile";
import axios from "axios";

function App() {
  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"
  const [profile, setProfile] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [repos, setRepos] = useState([]);

  const API_For_Profile = "https://api.github.com/users/abdijaberfarah71";
  const API_For_Followers =
    "https://api.github.com/users/abdijaberfarah71/followers";
  const API_For_Following =
    "https://api.github.com/users/abdijaberfarah71/following";

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
  useEffect(() => {
    (function () {
      axios.get(API_For_Profile).then(({ data }) => setProfile(data));
      axios.get(API_For_Followers).then(({ data }) => setFollowers(data));
      axios.get(API_For_Following).then(({ data }) => setFollowing(data));
      axios.get(`${API_For_Profile}/repos`).then(({ data }) => setRepos(data));
    })();
  }, []);

  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      <MyProfile
        profile={profile}
        followers={followers}
        following={following}
        repos={repos}
      />
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}
    </div>
  );
}

export default App;

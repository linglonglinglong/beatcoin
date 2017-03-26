import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import Profile from './components/profile.js';
import MyProfile from './components/my-profile.js';
import ContactUs from './components/contact-us.js';
import PlaylistView from './components/playlist-view.js';
import Redeem from './components/redeem.js';
import UserHome from './components/user-home.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <Profile />,
    document.getElementById('profile')
  );
} else if (document.getElementById('my-profile') !== null) {
  ReactDOM.render(
    <MyProfile />,
    document.getElementById('my-profile')
  );
}else if (document.getElementById('contact-us') !== null) {
  ReactDOM.render(
    <ContactUs />,
    document.getElementById('contact-us')
  );
}else if (document.getElementById('playlist-view') !== null) {
  ReactDOM.render(
    <PlaylistView />,
    document.getElementById('playlist-view')
  );
}else if (document.getElementById('redeem') !== null) {
  ReactDOM.render(
    <Redeem />,
    document.getElementById('redeem')
  );
}else if (document.getElementById('user-home') !== null) {
  ReactDOM.render(
    <UserHome />,
    document.getElementById('user-home')
  );
}

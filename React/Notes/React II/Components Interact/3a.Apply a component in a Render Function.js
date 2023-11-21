/*
1. The code editor has two files: ProfilePage.js and NavBar.js.

Complete the <ProfilePage /> component by having it return a <NavBar /> component above <h1>All About Me!</h1>.

Don’t forget to import the necessary component!
*/
/* Profile.js*/
import React from 'react';


function ProfilePage() {
  return (
    <div>
       <NavBar />
        <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
}

export default ProfilePage;

/* NavBar.js*/

import React from 'react';

function NavBar() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
           &nbsp;{page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
}
export default NavBar;
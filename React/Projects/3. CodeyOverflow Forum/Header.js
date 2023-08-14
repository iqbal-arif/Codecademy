import React from "react";

function Header(props) {
  return (
    <div>
      <h1>{props.username}r</h1>
      <img src={props.profileImg} />
    </div>
  );
}

export default Header;

// import React from 'react';

// function Header (props) {
//   return (
//     <div>
//     <img src={props.profileImg} alt=''/>
//     <h1>{props.username}</h1>
//     </div>
//   )
// }

// export default Header;

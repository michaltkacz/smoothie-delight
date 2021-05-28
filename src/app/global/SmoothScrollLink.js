import React from 'react';

import { Link } from 'react-scroll';

const SmoothScrollLink = ({ to, children }) => {
  return (
    <Link to={to} spy={true} smooth={true} offset={0} duration={500}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;

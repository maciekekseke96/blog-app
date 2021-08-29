import React from 'react';

import { withRouter } from 'react-router';

import './CustomButton.scss';

const CustomButton = withRouter(({ id, className, content, history }) => {
  return (
    <button onClick={() => history.push(`posts/${id}`)} className={className}>
      {content}
    </button>
  );
});

export default CustomButton;

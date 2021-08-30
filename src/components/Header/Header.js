import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setMainTitle } from '../../redux/mainTitle/mainTitle.actions';

import './Header.scss';

const Header = ({ mainTitle, changeMainTitle }) => {
  return (
    <div className="app-header">
      <span className="title">
        <Link onClick={() => changeMainTitle('')} to="/posts">
          Posts
        </Link>
        {mainTitle.length > 0 ? <span>{` > ${mainTitle}`}</span> : null}
      </span>
    </div>
  );
};

const mapStateToProps = ({ mainTitle }) => ({
  mainTitle,
});

const mapDispatchToProps = (dispatch) => ({
  changeMainTitle: (title) => dispatch(setMainTitle(title)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

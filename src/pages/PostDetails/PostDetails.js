import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

import { setMainTitle } from '../../redux/mainTitle/mainTitle.actions';

import Post from '../../components/Post/Post';
import PostComments from '../../components/PostComments/PostComments';

import './PostDetails.scss';

const PostDetails = ({ posts, changeMainTitle }) => {
  let { id } = useParams();
  const postToDisplay = posts.find((post) => post.id === parseFloat(id));
  const { title, body } = postToDisplay;

  useEffect(() => {
    changeMainTitle(postToDisplay.title);
  }, []);

  return (
    <div className="post-details">
      <Post title={title} body={body} withButton={false} />
      <PostComments />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeMainTitle: (title) => dispatch(setMainTitle(title)),
});
const mapStateToProps = ({ posts }) => ({
  posts,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

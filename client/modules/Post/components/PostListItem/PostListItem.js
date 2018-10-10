import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-desc']}>
        <span className={styles['likes']}>Likes: {props.post.likes}</span>
        <span className={styles['dislikes']}>Dislikes: {props.post.dislikes}</span>
      </p>
      <div className={styles['post-action']}>
        <a href="#" onClick={props.onThumbUp}><FormattedMessage id="thumbUpPost" /></a>
        <a href="#" onClick={props.onThumbDown}><FormattedMessage id="thumbDownPost" /></a>
        <a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onThumbUp: PropTypes.func.isRequired,
  onThumbDown: PropTypes.func.isRequired,
};

export default PostListItem;
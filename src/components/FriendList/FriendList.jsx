import PropTypes from 'prop-types';
import css from './FriendList.module.css';


export const FriendList =({ friends })=> {
		return <ul className={css.friendList}>
					{friends.map((friend, index) => {
						return <li key={friend.id} className={css.item} >
  						<span className={`${css.status} ${friend.isOnline ? css.isOnline : css.offline}`}></span>
  						<img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
 								<p className={css.name}>{friend.name}</p>
						</li>
						})
					}
</ul>
}

FriendList.propTypes ={
	friends: PropTypes.array.isRequired,
}
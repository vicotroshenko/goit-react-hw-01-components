import { Contacts } from '../Contacts/Contacts';
import { StatsBlock } from '../StatsBlock/StatsBlock';
import PropTypes from 'prop-types';
import css from './Profile.module.css';


export const Profile = ({ username, tag, location, avatar, stats }) => {
	return <div className={css.profile}>
		  					<div className={css.description}>
   	 						<img
      						src={avatar}
      						alt={username}
									className={css.avatar}
    						/>
								<Contacts 
									username={username}
									tag={tag}
									location={location}
								/>
  					</div>
						<StatsBlock 
							followers ={stats.followers}
							views = {stats.views}
							likes = {stats.likes}
						/>
	</div>
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }),
}
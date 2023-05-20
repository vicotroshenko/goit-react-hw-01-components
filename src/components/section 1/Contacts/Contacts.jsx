import PropTypes from 'prop-types';
import css from './Contacts.module.css'

export const Contacts =({username, tag, location}) => {
	return <>
	    			<p className={css.name}>{username}</p>
    				<p className={css.tag}>@{tag}</p>
    				<p className={css.location}>{location}</p>
					</>
}

Contacts.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
}
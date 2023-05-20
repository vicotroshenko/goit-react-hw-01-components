import PropTypes from 'prop-types';
import css from './StatList.module.css';

export const StatList = ({ stats }) => {
	return   <ul className={css.statList}>
		{stats.map(element => (
			<li key={element.id} className={`${css.item} ${css[element.label.replace('.', "")]}`}>
					<span className={css.label}>{element.label}</span>
					<span className={css.percentage}>{element.percentage}%</span>
			</li>
		))}
</ul>
}

StatList.propTypes ={
	data: PropTypes.array,
}
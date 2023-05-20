import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics =({ stats, title })=> {
	return <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
	<ul className={css.statList}>
		{stats.map(element => (
			<li key={element.id} className={`${css.item} ${css[element.label.replace('.', "")]}`}>
					<span className={css.label}>{element.label}</span>
					<span className={css.percentage}>{element.percentage}%</span>
			</li>
		))}
</ul>
</section>
}

Statistics.propTypes ={
	data: PropTypes.array,
	title: PropTypes.string
}
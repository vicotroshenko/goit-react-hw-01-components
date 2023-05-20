import { StatList } from '../StatList/StatList';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics =({ stats, title })=> {
	return <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
	<StatList stats={stats} />
</section>
}

StatList.propTypes ={
	data: PropTypes.array,
	title: PropTypes.string
}
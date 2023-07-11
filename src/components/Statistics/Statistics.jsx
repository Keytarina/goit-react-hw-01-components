import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

export const Statistics = ({ title, stats}) => {
  return ( 
    <section className={css.statistics}>
    {title !== undefined && (<h2 className={css.title}>{title}</h2>)}
  
    <ul className={css.statList}>
        {stats.map(element => {
            return (
                <li key={element.id} className={css.item}>
                    <span className={css.label}>{element.label}</span>
                    <span className={css.percentage}>{element.percentage}</span>
                </li>
            )            
        })}
    </ul>
  </section>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

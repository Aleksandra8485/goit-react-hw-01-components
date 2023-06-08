import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statsList}>
        {stats.map(item => (
          <li key={item.id} className={styles.item}>
            <span className="label">{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

// const Statistics = ({stats}) => {
//     return (
//         <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>
//     )
// }

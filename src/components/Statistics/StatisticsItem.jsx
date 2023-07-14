import css from './StatisticsItem.module.css';

export const StatisticsItem = ({ style, label, percentage }) => {
  return (
    <li className={css.item} style={style}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

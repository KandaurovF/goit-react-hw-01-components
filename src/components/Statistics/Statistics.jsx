import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';
import { GenerateColor } from './GenerateColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={`${css.stat__list} list`}>
        {stats
          .reduce((accumulator, { id, label, percentage }) => {
            const existingItem = accumulator.find(item => item.label === label);

            if (existingItem) {
              existingItem.percentage += percentage;
            } else {
              accumulator.push({ id, label, percentage });
            }

            return accumulator;
          }, [])
          .map(({ id, label, percentage }) => {
            return (
              <StatisticsItem
                key={id}
                label={label}
                percentage={percentage}
                style={{ backgroundColor: GenerateColor() }}
              />
            );
          })}
      </ul>
    </section>
  );
};

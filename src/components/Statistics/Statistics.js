import React from 'react';
import style from './Statistics.module.css';
import capitalizeFirstLetter from '../../helpers/CapitalizeFirstLetter';

const Statistics = ({ list, total, positivePercentage }) => {
  return (
    <ul className={style.statistics__list}>
      {list.map(({ label, value }) => {
        return (
          <li key={label}>
            {capitalizeFirstLetter(label)}:{' '}
            <span className={style[label]}>{value}</span>
          </li>
        );
      })}
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};
export default Statistics;

import React from 'react';
import { FaFaceLaugh, FaFaceMeh, FaFaceFrown } from 'react-icons/fa6';
import style from './FeedbackOptions.module.css';
import classNames from 'classnames/bind';
import capitalizeFirstLetter from '../../helpers/CapitalizeFirstLetter';

const cx = classNames.bind(style);

const iconMap = {
  good: <FaFaceLaugh />,
  neutral: <FaFaceMeh />,
  bad: <FaFaceFrown />,
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.button__wrapper}>
    {options.map(option => {
      const buttonClass = cx('button', `button__${option}`);
      return (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={buttonClass}
        >
          {iconMap[option]}
          {capitalizeFirstLetter(option)}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;

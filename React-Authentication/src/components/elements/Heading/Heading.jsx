/* eslint-disable react/prop-types */
import classnames from 'classnames';

export const Heading = ({ title, level, className = '', ...rest }) => {
  const headingStyles = new Map([
    [1, 'text-4xl'],
    [2, 'text-3xl'],
    [3, 'text-2xl'],
    [4, 'text-xl'],
    [5, 'text-lg'],
    [6, 'text-base'],
  ]);
  const Tag = `h${level}`;
  return (
    <Tag
      {...rest}
      className={classnames(headingStyles.get(level), 'text-white', className)}
    >
      {title}
    </Tag>
  );
};

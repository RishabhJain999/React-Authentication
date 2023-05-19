/* eslint-disable react/prop-types */
import classnames from 'classnames';
export const Button = ({
  children,
  className,
  large = false,
  variant = 'primary',
  type = 'button',
  disabled = false,
  ...rest
}) => {
  const variantClasses = new Map([
    [
      'primary',
      classnames(
        large ? 'text-2xl px-8 py-3' : 'text-sm px-5 py-2.5',
        'font-medium border rounded-lg bg-cornflower hover:bg-cornflower-500 text-white border-cornflower focus:ring-2 focus:ring-cornflower focus:ring-offset-2 disabled:border-gray-400 disabled:bg-gray-400 disabled:cursor-not-allowed'
      ),
    ],
    [
      'secondary',
      classnames(
        large ? 'text-2xl px-8 py-3' : 'text-sm px-5 py-2.5',
        'font-medium border rounded-lg bg-berry hover:bg-opacity-95 text-white border-berry focus:ring-2 focus:ring-berry focus:ring-offset-2 disabled:border-gray-400 disabled:bg-gray-400 disabled:cursor-not-allowed'
      ),
    ],
    [
      'outline',
      classnames(
        large ? 'text-2xl px-8 py-3' : 'text-sm px-5 py-2.5',
        'font-medium border rounded-lg bg-transparent hover:bg-gray-100 text-cornflower border-cornflower focus:ring-2 focus:ring-cornflower focus:ring-offset-2 disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed'
      ),
    ],
    [
      'disabled',
      classnames(
        large ? 'text-2xl px-8 py-3' : 'text-sm px-5 py-2.5',
        'font-medium border rounded-lg bg-crawford-light-gray-two cursor-not-allowed bg-opacity-75'
      ),
    ],
    [
      'text',
      classnames(
        large ? 'text-2xl py-3' : 'text-sm py-0.5',
        'font-medium bg-transparent text-cornflower hover:text-cornflower-700 hover:underline focus:ring-0 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed'
      ),
    ],
  ]);
  return (
    <button
      className={classnames(
        variantClasses.get(variant),
        'w-full focus:outline-none whitespace-nowrap',
        className
      )}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

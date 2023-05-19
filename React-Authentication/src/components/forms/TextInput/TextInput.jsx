/* eslint-disable react/prop-types */
export const TextInput = ({
  className,
  label = '',
  id,
  error,
  required = true,
  type = 'text',
  disabled,
  ...rest
}) => {
  return (
    <div className={className}>
      <label className='text-white text-sm block mb-1' htmlFor={id}>
        <span>{label}</span>
        {required ? (
          <>
            <span className='text-red-500 ml-1'>*</span>
            <span className='sr-only'>This field is required</span>
          </>
        ) : null}
      </label>

      <div className='mt-1 shadow-sm'>
        <input
          {...rest}
          type={type}
          name={id}
          required={required}
          disabled={disabled}
          className=' w-full max-w-xl  px-1.5 py-1 border-gray-300 border- border-solid shadow-lg outline-none rounded-md text-gray-700 text-sm focus:outline-none disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500'
        />
      </div>
      {error ? <p className='text-red-800 ml-1 mt-1 text-sm'>{error}</p> : null}
    </div>
  );
};

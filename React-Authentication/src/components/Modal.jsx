/* eslint-disable react/prop-types */
export const Modal = ({ children }) => {
  return (
    <div className='w-full absolute top-2/4 left-2/4 sm:w-2/4 h-2/4 -translate-y-1/2 -translate-x-1/2 text-white font-semibold flex justify-center items-center bg-green-600'>
      {children}
    </div>
  );
};

/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Confetti from 'react-confetti';

export const Modal = ({ children, setStatus, status }) => {
  const ref = useRef(null);

  //  detect click outside Modal
  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         setStatus && setStatus();
  //       }
  //     };
  //     document.addEventListener('click', handleClickOutside);
  //     return () => {
  //       document.removeEventListener('click', handleClickOutside);
  //     };
  //   }, [setStatus]);

  return (
    <>
      <div
        onClick={() => setStatus('')}
        className='fixed top-0 left-0 bottom-0 right-0 w-screen  bg-blue-300/95'
      >
        {status && <Confetti></Confetti>}
      </div>
      <div
        ref={ref}
        className='w-full fixed top-2/4 left-2/4 sm:w-2/4 h-2/4 -translate-y-1/2 -translate-x-1/2 text-white font-semibold flex justify-center items-center bg-green-600'
      >
        {children}
      </div>
    </>
  );
};

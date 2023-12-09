import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CloseSvg from '../../CloseSvg/CloseSvg';

const modalRoot = document.querySelector('#modal-root');
const maxHeightClass =
  window.innerWidth < 600 ? 'max-h-[550px] overflow-auto rounded-[20px]' : '';

export function BasicModal({ isOpen, onCloseModal, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onCloseModal]);
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="modal-overlay flex items-center justify-center fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-50">
            <div className={`modal m-auto ${maxHeightClass}`} ref={modalRef}>
              <div className=" modal-content relative justify-center  bg-white w-full p-3 sm:p-8 md:p-9 rounded-3xl shadow-lg">
                <div
                  className="absolute top-2 right-4 z-50 cursor-pointer hover:opacity-75"
                  onClick={() => onCloseModal()}
                >
                  <CloseSvg size={24} fill={'#54adff'} />
                </div>
                <div>{children}</div>
              </div>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
}

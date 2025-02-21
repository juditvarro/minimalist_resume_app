import { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  buttonRef?: React.RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        buttonRef?.current &&
        !ref.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, buttonRef]);
};

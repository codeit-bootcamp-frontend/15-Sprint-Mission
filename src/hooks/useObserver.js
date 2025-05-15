import { useEffect } from "react";

/**
 * Observer Hook
 * @param {React.RefObject} ref - 관찰 대상 ref
 * @param {Function} callback - 감지 시 실행할 콜백
 */
export const useObserver = (ref, callback) => {
  useEffect(() => {
    const target = ref?.current;
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [ref, callback]);
};

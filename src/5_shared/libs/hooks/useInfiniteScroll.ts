import {
    useEffect,
    MutableRefObject,
} from 'react';

export interface useInfiniteScrollOptions {
    callback: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef }: useInfiniteScrollOptions) {

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback && triggerRef) {
            const options = {
                root: document,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([el]) => {
                if (el.isIntersecting) callback();
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer && triggerRef?.current) {
                observer?.unobserve(triggerRef.current);
            }
        };
    }, [callback, triggerRef]);
}

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
        const triggerElement = triggerRef.current;

        if (callback && triggerElement) {
            const options = {
                root: document,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([el]) => {
                if (el.isIntersecting) callback();
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer) {
                observer?.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef]);
}

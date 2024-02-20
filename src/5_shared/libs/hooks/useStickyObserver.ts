import {
    useState,
    useEffect,
    MutableRefObject, useRef,
} from 'react';

export interface useStickyObserverOptions {
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useStickyObserver() {
    const ref = useRef<HTMLDivElement>(null);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        let observer: IntersectionObserver;

        const options = {
            threshold: [1],
            rootMargin: '-1px 0px 0px 0px',
        };

        const callbackEvent = ([el]: IntersectionObserverEntry[]): void => {
            setIsSticky(el.intersectionRatio < 1);
        };

        if (ref.current) {
            observer = new IntersectionObserver(callbackEvent, options);
            observer.observe(ref.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, []);

    return { ref, isSticky };
}

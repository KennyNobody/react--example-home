import {
    useState,
    useEffect,
    MutableRefObject,
} from 'react';

export interface useStickyObserverOptions {
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useStickyObserver({ triggerRef }: useStickyObserverOptions): boolean {
    const [isSticky, setIsSticky] = useState<boolean>(false);

    // useEffect(() => {
    //     // console.log('Оп');
    //     console.log(isSticky);
    // }, [isSticky]);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement: HTMLElement = triggerRef.current;
        const options = {
            root: document,
            // rootMargin: '0px',
            threshold: 0,
        };

        const callbackEvent = ([el]: IntersectionObserverEntry[]) => {
            console.log(el);
            // setIsSticky(el.boundingClientRect.top === 0);
            if (el.isIntersecting) {
                // Вызовите функцию или обработайте данные здесь
                console.log('Element is intersecting with the viewport!');
                console.log(el.target); // Это элемент, который пересекается с viewport
            }
        };

        observer = new IntersectionObserver(callbackEvent, options);

        observer.observe(triggerElement);

        return (): void => {
            if (observer) observer?.unobserve(triggerElement);
        };
    }, [triggerRef]);

    return isSticky;
}

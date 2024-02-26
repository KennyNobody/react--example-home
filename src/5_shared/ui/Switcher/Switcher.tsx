import classNames from 'classnames';
import { ChangeEvent, memo } from 'react';
import cls from './Switcher.module.scss';

interface SwitcherProps {
    className?: string;
    isChecked: boolean;
    changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Switcher = memo((props: SwitcherProps) => {
    const {
        className,
        isChecked,
        changeEvent,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <label className={classNames(cls.label)}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={changeEvent}
                    className={classNames(cls.input)}
                />
                <span className={classNames(cls.wrapper)}>
                    <span
                        className={
                            classNames(
                                cls.button,
                                { [cls['button--fixed']]: true },
                            )
                        }
                    />
                </span>
            </label>
        </div>
    );
});

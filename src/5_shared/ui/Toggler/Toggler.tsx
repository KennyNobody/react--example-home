import classNames from 'classnames';
import { ChangeEvent, memo } from 'react';
import cls from './Toggler.module.scss';

interface TogglerProps {
    className?: string;
    isChecked: boolean;
    arr?: [string, string];
    changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Toggler = memo((props: TogglerProps) => {
    const {
        arr,
        className,
        isChecked,
        changeEvent,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <label className={classNames(cls.label)}>
                <div className={classNames(cls.content)}>
                    {
                        arr && arr[0] && (
                            <div className={classNames(cls.cell)}>
                                { arr[0] }
                            </div>
                        )
                    }
                    {
                        arr && arr[1] && (
                            <div className={classNames(cls.cell)}>
                                { arr[1] }
                            </div>
                        )
                    }
                </div>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={changeEvent}
                    className={classNames(cls.input)}
                />
                <div
                    className={
                        classNames(
                            cls.button,
                            { [cls['button--fixed']]: true },
                        )
                    }
                />
            </label>
        </div>
    );
});

import classNames from 'classnames';
import cls from './Description.module.scss';

interface DescriptionProps {
    className?: string
}

export const Description = (props: DescriptionProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <p>
                Фотографирую жизнь, людей, котов и разное. Занимаюсь front-end разработкой, пишу заметки о кино, искусстве и играх. Фанат лего и кастомных гитар. Гордый обладатель кейтара Roland AX-1.
            </p>
        </div>
    );
};

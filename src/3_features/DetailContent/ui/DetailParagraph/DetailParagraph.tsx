import { ReactNode } from 'react';
import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';

interface DetailParagraphProps {
    children: ReactNode;
}

export const DetailParagraph = (props: DetailParagraphProps) => {
    const {
        children,
    } = props;

    return (
        <div className={classNames(grid.grid)}>
            <div className={classNames(grid['grid__col-1'])} />
            <div className={classNames(grid['grid__col-2'])}>
                <p>{ children }</p>
            </div>
            <div className={classNames(grid['grid__col-1'])} />
        </div>
    );
};

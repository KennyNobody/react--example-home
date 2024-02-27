import React, { ReactNode } from 'react';
import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';

interface DetailParagraphProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}

export const DetailHeading = (props: DetailParagraphProps) => {
    const {
        level,
        children,
    } = props;

    const tag = `h${level > 0 && level < 7 ? level : 6}`;

    return (
        <div className={classNames(grid.grid)}>
            <div className={classNames(grid['grid__col-1'])} />
            <div className={classNames(grid['grid__col-2'])}>
                { React.createElement(tag, null, children) }
            </div>
            <div className={classNames(grid['grid__col-1'])} />
        </div>
    );
};

import { ReactNode } from 'react';
import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';

interface DetailCodeProps {
    children: ReactNode;
}

export const DetailCode = (props: DetailCodeProps) => {
    const {
        children,
    } = props;

    return (
        <div className={classNames(grid.grid)}>
            <div className={classNames(grid['grid__col-1'])} />
            <div className={classNames(grid['grid__col-2'])}>
                <pre>
                    <code>
                        { children }
                    </code>
                </pre>
            </div>
            <div className={classNames(grid['grid__col-1'])} />
        </div>
    );
};

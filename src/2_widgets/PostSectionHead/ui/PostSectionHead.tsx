import React from 'react';
import classNames from 'classnames';
import { SortToolbar } from '3_features/PostFilter';
import grid from '5_shared/css/grid.module.scss';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import cls from './PostSectionHead.module.scss';
import {Toolbar} from "5_shared/ui/Toolbar";

interface HeadSectionProps {
    className?: string;
}

export const PostSectionHead = (props: HeadSectionProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(grid.grid, cls.grid)}>
                <div className={classNames(grid['grid__col-2'])}>
                    <Title mode={TitleModeType.REGULAR}>
                        Заметки
                    </Title>
                </div>
                <div className={classNames(grid['grid__col-2'])}>
                    <Toolbar>
                        <Title
                            className={classNames(cls.subtitle)}
                            mode={TitleModeType.REGULAR}
                        >
                            2016 — 2023
                        </Title>
                    </Toolbar>
                </div>
                <div className={classNames(grid['grid__col-2'])} />
                <div className={classNames(grid['grid__col-2'])}>
                    <SortToolbar
                        className={classNames(cls.category)}
                    />
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';
import {LinkTitle} from '5_shared/ui/LinkTitle/LinkTitle';
import cls from './Toolbar.module.scss';
import {Title, TitleModeType} from "5_shared/ui/Title/Title";

interface ToolbarProps {
    className?: string
}

export const Toolbar = (props: ToolbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(grid.grid)}>
                <div className={classNames(grid['grid__col-2'])}>
                    <Title mode={TitleModeType.REGULAR}>
                        Разработал
                    </Title>
                </div>
                <div className={classNames(grid['grid__col-2'])}>
                    <div className={classNames(cls.toolbar)}>
                        <Title mode={TitleModeType.REGULAR}>
                            2016 — 2023
                        </Title>
                        <LinkTitle
                            href="https://github.com/KennyNobody"
                        >
                            Github
                        </LinkTitle>
                    </div>
                </div>
            </div>
        </div>
    );
};

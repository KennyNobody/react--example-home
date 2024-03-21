import React from 'react';
import classNames from 'classnames';
import { AppData } from '0_app/types/MainResponseType';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container/Container';
import useLayoutMode from '5_shared/libs/hooks/useLayoutMode';
import { PageLayoutMode } from '5_shared/config/router/routerConfig';
import {MenuMobile, menuMobileActions, MenuMobileButton, menuMobileReducer} from '3_features/MenuMobile';
import { Nav } from '../Nav/Nav';
import { Head } from '../Head/Head';
import { Name } from '../Name/Name';
import cls from './Header.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { Description } from '../Description/Description';
import {DynamicModuleLoader, ReducersList} from "5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "5_shared/libs/hooks/useAppDispatch";

interface HeaderProps {
    className?: string;
    data: AppData,
}

const reducers: ReducersList = {
    menuMobile: menuMobileReducer,
};

export function Header(props: HeaderProps) {
    const {
        data,
        className,
    } = props;

    const layoutMode = useLayoutMode();
    const dispatch = useAppDispatch();

    const toggleMenu = () => {
        dispatch(menuMobileActions.setMenuMobileState());
    };

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div
                data-testid="header"
                className={
                    classNames(
                        cls.block,
                        cls[`block--${layoutMode}`],
                        className,
                    )
                }
            >
                <Container>
                    <div className={classNames(grid.grid)}>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-mob-4'],
                                )
                            }
                        >
                            <MenuMobile>
                                <Head
                                    isMain={layoutMode === PageLayoutMode.FRONT}
                                >
                                    {data?.preview?.data?.formats?.thumbnail?.url
                                    && (
                                        <Avatar
                                            isMain={layoutMode === PageLayoutMode.FRONT}
                                            className={classNames(cls.avatar)}
                                            url={data.preview.data.formats.thumbnail.url}
                                        />
                                    )}
                                    {
                                        data?.name
                                        && (
                                            <Name
                                                name={data.name}
                                                nickname={data.nickname}
                                                isMain={layoutMode === PageLayoutMode.FRONT}
                                                className={
                                                    classNames(
                                                        cls.name,
                                                        { [cls['name--front']]: layoutMode !== PageLayoutMode.FRONT },
                                                    )
                                                }
                                            />
                                        )
                                    }
                                    <LanguageSwitcher
                                        className={
                                            classNames(
                                                cls.switcher,
                                                { [cls['switcher--mob-hidden']]: layoutMode !== PageLayoutMode.FRONT },
                                            )
                                        }
                                    />
                                    {
                                        layoutMode !== PageLayoutMode.FRONT
                                        && (
                                            <MenuMobileButton
                                                clickEvent={toggleMenu}
                                                className={
                                                    classNames(
                                                        cls.button,
                                                    )
                                                }
                                            />
                                        )
                                    }
                                </Head>
                            </MenuMobile>
                        </div>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-mob-4'],
                                    cls['column-nav'],
                                )
                            }
                        >
                            { layoutMode === PageLayoutMode.FRONT && <Description data={data} />}
                            { layoutMode !== PageLayoutMode.FRONT && <Nav className={classNames(cls.nav, cls['nav--desktop'])} />}
                        </div>
                    </div>
                </Container>
            </div>
        </DynamicModuleLoader>
    );
}

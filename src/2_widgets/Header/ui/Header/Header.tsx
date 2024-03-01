import React from 'react';
import classNames from 'classnames';
import { AppData } from '0_app/types/MainResponseType';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container/Container';
import { Nav } from '../Nav/Nav';
import { Head } from '../Head/Head';
import { Name } from '../Name/Name';
import cls from './Header.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { Description } from '../Description/Description';

export enum HeaderMode {
    MAIN = 'main',
    REGULAR = 'regular',
}

interface HeaderProps {
    className?: string;
    mode: HeaderMode;
    data: AppData,
}

export function Header(props: HeaderProps) {
    const {
        mode,
        data,
        className,
    } = props;

    return (
        <div
            data-testid="header"
            className={
                classNames(
                    cls.block,
                    cls[`block--${mode}`],
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
                        <Head
                            isMain={mode === HeaderMode.MAIN}
                        >
                            {data?.preview?.data?.formats?.thumbnail?.url
                            && (
                                <Avatar
                                    isMain={mode === HeaderMode.MAIN}
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
                                        isMain={mode === HeaderMode.MAIN}
                                        className={
                                            classNames(
                                                cls.name,
                                                { [cls['name--main']]: mode !== HeaderMode.MAIN },
                                            )
                                        }
                                    />
                                )
                            }
                            <LanguageSwitcher className={classNames(cls.langSwitcher)} />
                        </Head>
                    </div>
                    <div
                        className={
                            classNames(
                                grid['grid__col-2'],
                                grid['grid__col-mob-4'],
                            )
                        }
                    >
                        { mode === HeaderMode.MAIN && <Description data={data} />}
                        { mode === HeaderMode.REGULAR && <Nav />}
                    </div>
                </div>
            </Container>
        </div>
    );
}

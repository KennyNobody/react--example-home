import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';

interface GridPostsProps {
    className?: string
}

export const GridPosts = (props: GridPostsProps) => {
    const { className } = props;

    return (
        <div className={classNames(grid.grid, cls.grid, className)}>
            {
                new Array(12).fill(null).map((item, index) => (
                    <div
                        key={index}
                        className={classNames(grid['grid__col-1'])}
                    >
                        <ArticlePost />
                    </div>
                ))
            }
        </div>
    );
};

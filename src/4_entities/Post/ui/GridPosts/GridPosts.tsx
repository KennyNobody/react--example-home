import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';
import { PostArticleType } from '../../model/types/PostArticle';

interface GridPostsProps {
    className?: string;
    data?: PostArticleType[];
    showSkeleton?: boolean;
}

export const GridPosts = (props: GridPostsProps) => {
    const {
        data,
        showSkeleton,
        className,
    } = props;

    const skeleton = (
        new Array(12).fill(null).map((item, index) => (
            <div
                key={index}
                className={classNames(grid['grid__col-1'])}
            >
                <ArticlePost />
            </div>
        ))
    );

    const content = (
        data
        && data?.length > 0
        && data.map((item: PostArticleType, index: number) => (
            <div
                key={index}
                className={classNames(grid['grid__col-1'])}
            >
                <ArticlePost data={item} />
            </div>
        ))
    );

    return (
        <div className={classNames(grid.grid, cls.grid, className)}>
            { showSkeleton ? skeleton : content }
        </div>
    );
};

import {
    memo,
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Editor } from '5_shared/ui/Editor';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
import {
    ReducersList,
    DynamicModuleLoader,
} from '5_shared/libs/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './DetailPost.module.scss';
import { postReducer } from '../../model/slices';
import { ArticlePostType } from '../../model/types/ArticlePost';
import { fetchPostBySlug } from '../../model/services/fetchPostBySlug/fetchPostBySlug';
import { getDetailPostData, getDetailPostIsLoading } from '../../model/selectors/detailPost';

interface DetailPostProps {
    className?: string;
    slug?: string;
}

const reducers: ReducersList = {
    post: postReducer,
};

export const DetailPost = memo((props: DetailPostProps) => {
    const {
        slug,
        className,
    } = props;

    const dispatch = useAppDispatch();
    const data: ArticlePostType | undefined = useSelector(getDetailPostData);
    const isLoading: boolean | undefined = useSelector(getDetailPostIsLoading);

    useEffect(() => {
        if (slug) {
            dispatch(fetchPostBySlug(slug));
        }
    }, [slug]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.block, className)}>
                {
                    data?.title?.rendered
                    && (
                        <h2>
                            { data?.title?.rendered }
                        </h2>
                    )
                }
                {
                    data?.content?.rendered && <Editor data={data?.content?.rendered} />
                }

            </div>
        </DynamicModuleLoader>
    );
});

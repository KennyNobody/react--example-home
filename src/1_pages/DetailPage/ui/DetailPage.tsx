import { useParams } from 'react-router-dom';
import { DetailPost } from '4_entities/Post';
import cls from './DetailPage.module.scss';

function DetailPage() {
    const { slug } = useParams<{ slug: string }>();

    return (
        <div className={cls.page}>
            <DetailPost
                slug={slug}
            />
        </div>
    );
}

export default DetailPage;

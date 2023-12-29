import { DetailPost } from '4_entities/Posts';
import cls from './DetailPage.module.scss';

function DetailPage() {
    return (
        <div className={cls.page}>
            <DetailPost />
        </div>
    );
}

export default DetailPage;

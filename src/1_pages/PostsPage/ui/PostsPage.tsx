import { Container } from '5_shared/ui/Container';
import { ListPosts } from '4_entities/Post';
import cls from './PostsPage.module.scss';

function PostsPage() {
    return (
        <div className={cls.page}>
            <Container>
                <ListPosts isActive />
            </Container>
        </div>
    );
}

export default PostsPage;

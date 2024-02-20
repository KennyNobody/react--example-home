import {
    EmailShareButton,
    FacebookShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";
import classNames from 'classnames';
import cls from './Share.module.scss';

interface ShareProps {
    className?: string
}

export const Share = (props: ShareProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <VKShareButton
                children={'<>123</>'}
                url="/vk.com/"
            />
        </div>
    );
};

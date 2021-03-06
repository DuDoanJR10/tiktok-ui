import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faArrowUpFromBracket,
    faUser,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import images from '~/assets/images';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MailboxIcon, MessengerIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Korea',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'American',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Espanol',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'French',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Italiano',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Brazil',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Australian',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Singapore',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'Germany',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Argentina',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Chile',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Thai',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shorcuts',
    },
];

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@thanhh',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Change language!');
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn', 'upload')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy content="Messenger" placement="bottom">
                                <button className={cx('action-btn', 'messenger')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Mailbox" placement="bottom">
                                <button className={cx('action-btn', 'mailbox')}>
                                    <MailboxIcon />
                                    <span className={cx('badge')}>99</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1c60bd6f6e3f9647081fda5206dcbfd9~c5_100x100.jpeg?x-expires=1657443600&x-signature=GCOFzexPILqm7doDkqC2gRqUBa4%3D"
                                className={cx('use-avatar')}
                                alt="Nguyen Ngoc Thanh"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

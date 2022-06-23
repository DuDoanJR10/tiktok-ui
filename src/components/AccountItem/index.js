import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1c60bd6f6e3f9647081fda5206dcbfd9~c5_100x100.jpeg?x-expires=1656176400&x-signature=kHfP4UFs4o6kmB9gfuL%2FeKbFJ6w%3D"
                alt="Ngoc Thanhh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Ngoc Thanhh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>mylove</span>
            </div>
        </div>
    );
}

export default AccountItem;

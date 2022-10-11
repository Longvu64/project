import {RiContrastLine} from 'react-icons/ri'
import styles from './Header.module.scss';
import className from 'classnames/bind'

const cx = className.bind(styles)

function Header({onClick, isLight}) {
    return ( 
        <header className={isLight ? cx('header', 'light-element') : cx('header')}>
            <h3>Where in the world</h3>
            <div onClick={onClick} className={cx('dark-mode')}>
                <RiContrastLine/>
                <p>Dark mode</p>
            </div>
        </header>
     );
}

export default Header;
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <nav className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="./">Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="./about">About</AppLink>
        </nav>
    </div>
);
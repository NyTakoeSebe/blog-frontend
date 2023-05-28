import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChangeTheme } from '@/modules/ChangeTheme';
import LoginButton from '@/components/LoginButton';
import Burger from '@/ui/icons/Burger';
import Container from '@/ui/Container';
import Logo from '@/ui/Logo';

import styles from './HeaderWithBurger.module.scss';
import { useAppSelector } from '@/hooks/redux';
import { selectUser } from '@/redux/slices/user.slice';
import { CloseIcon } from '@/ui/icons';
import { ChangeThemeController } from '@/modules/ChangeTheme/helpers/ChangeThemeController';

const HeaderWithBurger = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);

  const [isMenuOpen, openMenu] = useState<boolean>(false);

  const openMenuHandler = () => openMenu((prev) => !prev);

  useEffect(() => {
    if (document) {
      new ChangeThemeController(document.querySelector('html') as HTMLHtmlElement);
    }
  }, []);

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          <button className={styles.burger} onClick={openMenuHandler}>
            <Burger width={40} height={40} />
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div className={styles.menu}>
          <nav>
            <ul>
              <li>
                <Link className={router.pathname === '/' ? styles.active : ''} href="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className={router.pathname === '/posts' ? styles.active : ''} href="/">
                  Статьи
                </Link>
              </li>
              <li>
                <Link className={router.pathname === '/about' ? styles.active : ''} href="/">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link className={router.pathname === '/authors' ? styles.active : ''} href="/">
                  Авторы
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.buttons}>
            {!user ? <LoginButton onClick={openMenuHandler} /> : null}
            <ChangeTheme />
          </div>
          <button className={styles.close} onClick={openMenuHandler}>
            <CloseIcon width={30} height={30} />
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderWithBurger;

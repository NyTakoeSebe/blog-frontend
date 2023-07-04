import { AuthCard } from '@/widgets/AuthCard';
import Container from '@/shared/ui/Container';
import getServerSideProps from '@/shared/utils/getProps/getProps';

import styles from '@/app/styles/Auth.module.scss';

const Auth = () => {
  return (
    <>
      <div className={styles.root}>
        <AuthCard />
      </div>
    </>
  );
};

export default Auth;

export { getServerSideProps };

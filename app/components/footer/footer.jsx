import Logo from "@public/logo.svg";

import styles from "./footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <Logo className={styles.logo} />
      <p className={styles.rights}>All rights reserved</p>
    </div>
  );
}

export default Footer;

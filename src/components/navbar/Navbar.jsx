import Link from "next/link";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/users">USERS</Link>
        </li>
        <li>
          <Link href="/users/1">SINGLE USER</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
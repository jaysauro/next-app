import styles from "../../styles/users.module.scss";

export default function Users({ users }) {
    return (
      <div className={styles.Pages}>
        <div className={styles.Pages__users}>
          {users && users.map((user) => {
            return (
            <div className={styles.userCard}>
              <div className={styles.identity}>
                <h3>{user.lastName}</h3>
                <h4 key={user.id}>{user.firstName}</h4>
                <p>{user.birthDate}</p>
              </div>
              <div className={styles.userDescrip}>
                <div className={styles.topDescrip}>
                  <p>{user.address.city}</p>
                  <p>{user.phone}</p>
                </div>
                <div className={styles.bottomDescrip}>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            )})}
        </div>
      </div>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/users");
    const users = await res.json();
  
    return {
      props: {
        users: users.users,
      },
    };
  }
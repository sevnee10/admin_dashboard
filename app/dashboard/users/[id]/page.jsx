import styles from "@/app/ui/dashboard/users/detailUser/detailUser.module.css"
import Image from "next/image"

const detailUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        Tuan Anh
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value />
          <label>Username</label>
          <input type="text" name="username" placeholder="Tuan Anh" />
          <label>Email</label>
          <input type="email" name="email" placeholder="anhcv@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="0387641694" />
          <label>Address</label>
          <textarea type="text" row="1" name="address" placeholder="Haiphong" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>
              Yes
            </option>
            <option value={false}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>
              Yes
            </option>
            <option value={false}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default detailUserPage

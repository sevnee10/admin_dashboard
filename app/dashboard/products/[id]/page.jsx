import styles from "@/app/ui/dashboard/products/detailProduct/detailProduct.module.css"
import Image from "next/image"

const DetailProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        IPhone 15 Promax
      </div>
      <div className={styles.formContainer}>
        <form action="/" className={styles.form}>
          <input type="hidden" name="id" value={"IPhone 15 Promax"} />
          <label>Title</label>
          <input type="text" name="title" placeholder={'$1000'} />
          <label>Price</label>
          <input type="number" name="price" placeholder={'10'} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={'Gold'} />
          <label>Color</label>
          <input type="text" name="color" placeholder={"color"} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={"size"} />
          <label>Category</label>
          <select name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="Desc"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default DetailProductPage

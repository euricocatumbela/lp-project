import { banner, products } from "@/src/components/banner/Banner.types";
import HeroBanner from "@/src/components/Home/HeroBanner";
import Product from "@/src/components/product/Product";
import { client } from "../lib/client";


type Props = {
  products: products[]
  banner: banner[]
}


const IndexHome: React.FC<Props> = ({ products, banner }) => {

  return (
    <div>
    <HeroBanner heroBanner={banner}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </div>
  )
}

export default IndexHome

export const getServerSideProps = async () => {

  //this get all the products within the database
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  //this get all the banner within the database
  const bannerQuery = '*[_type == "banner"]';
  const banner = await client.fetch(bannerQuery)

  return {
    props: {
      products, banner

    }
    
  }
}

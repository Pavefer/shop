import { Banner } from "./Banner"
import { Categories } from "./Categories"
import { Promo } from "./Promo"
import { Reviews } from "./Reviews"

export const Home = () => {
  return (
    <div>
        <Banner />
         <Promo />
        <Categories />
        <Reviews />
    </div>
  )
}

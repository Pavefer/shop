import { Link } from "react-router-dom"

export const Promo = () => {
  return (
    <div>
        <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-20">
        <div className="relative  w-full sm:px-6 lg:px-8 sm:static">
          <div className="max-w-3">
            <h1 className="text-3xl mb-12 font font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Новые товары для школы уже здесь!
            </h1>
             <Link
                to="/category/school-items"
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                Смотреть категорию
              </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
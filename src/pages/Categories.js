import { Link } from "react-router-dom"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    description: 'Рисование',
    imageSrc: 'https://images.unsplash.com/photo-1525278070609-779c7adb7b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80',
    href: '#',
    to: '/category/drawing'
  },
  {
    description: 'Черчение',
    imageSrc: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
     to: '/category/mechanical-drawing'
  },
  {
    description: 'Обложки',
    imageSrc: 'https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2356&q=80',
     to: '/category/covers'
  },
   {
    description: 'Офисная канцелярия',
    imageSrc: 'https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    to: '/category/office-stationery',
  },
   {
    description: 'Товары для школы',
    imageSrc: 'https://images.unsplash.com/photo-1509191436522-d296cf87d244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80',
    to: '/category/school-items'
  },
]

export  const Categories = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-10 lg:max-w-none">
          <h2 className="text-4xl font-extrabold text-gray-900 text-left">Категории</h2>

          <div className="mt-6 space-y-0 col-start-auto mb-6 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
            {callouts.map((callout) => (
              <Link to={callout.to} key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-6 text-base font-semibold text-gray-900">{callout.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
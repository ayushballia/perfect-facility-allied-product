const products = [
    {
      id: 1,
      name: 'Glass Cleaner',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dz95mun6e/image/upload/v1743091508/perfect-facility/Glass_Cleaner_a75uim.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'A symbol of quality cleaning',
    },
    {
      id: 1,
      name: 'Toilet Cleaner',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dz95mun6e/image/upload/v1743091508/perfect-facility/toilet_cleaner_hbyhth.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'A symbol of quality cleaning',
    },
    {
      id: 1,
      name: 'Multipurpose Cleaner',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dz95mun6e/image/upload/v1743091507/perfect-facility/Multipurpose_cleaner_xosabe.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'A symbol of quality cleaning',
    },
    {
      id: 1,
      name: 'Liquid Cleaner',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dz95mun6e/image/upload/v1743091507/perfect-facility/Fragrant_liquid_soap_tveeyg.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'A symbol of quality cleaning',
    },
    {
      id: 1,
      name: 'Black Surface Cleaner',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dz95mun6e/image/upload/v1743091507/perfect-facility/black_surface_cleaner_k98xs7.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'A symbol of quality cleaning',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
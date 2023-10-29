import React from 'react'

const Contents = () => {

  const products = [
    {
      pId: 1,
      pName: 'Product 1',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 100,
    },
    {
      pId: 2,
      pName: 'Product 2',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 200,
    },
    {
      pId: 3,
      pName: 'Product 3',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 300,
    },
    {
      pId: 4,
      pName: 'Product 4',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 400,
    },
    {
      pId: 5,
      pName: 'Product 5',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 500,
    },
    {
      pId: 6,
      pName: 'Product 6',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 600,
    },
    {
      pId: 7,
      pName: 'Product 7',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 700,
    },
    {
      pId: 8,
      pName: 'Product 8',
      pImg: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
      pPrice: 800
    }
  ]

  return (
    <div>
      <h1 className='text-4xl mb-5 text-center'>IPHONE</h1>
      <div className='container flex flex-wrap'>
      {
        products.map((product) => (
          <div key={product.pId} className='w-1/5 flex flex-1 flex-col items-center justify-center shadow-md gap-1 m-2'>
            <div className='w-64 h-64'>
              <img src={product.pImg} alt={product.pName} className='w-full h-full object-cover'/>
            </div>
            <div className='text-center'>
              <h3 className='text-lg font-semibold'>{product.pName}</h3>
              <p className='text-sm text-gray-500'>${product.pPrice}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Contents

import crypto from 'node:crypto'

let products = []
console.log(products)

export function createProduct(productData, productImage) {
  const newProduct = {
    id: crypto.randomUUID().toString(),
    ...productData,
    imageUrl: productImage,
  }

  products.push(newProduct)
  console.log(products)

  return newProduct
}

export function getAllProducts() {
  return products
}

export function getProductById(productId) {
  return products.filter((product) => product.id === productId)
}

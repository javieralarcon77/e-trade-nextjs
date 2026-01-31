import mockProducts from '../mock/products.json'
import mockArrivals from '../mock/arrivals.json'

export async function getProducts() {
  return mockProducts;
}

export async function getNewArrivals() {
  return mockArrivals;
}
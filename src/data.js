import data from "./data.json"

// Count of all items
const count = data.length

// Array of all categories
const categories = data.map((item) => {
  return item.category
})

// Set of unique categories
const categoriesSet = new Set(categories)
const categoriesUnique = Array.from(categoriesSet)

// Histogram of categories (obj)
const categoriesHistogramObj = data.reduce((obj, item) => {
  if (item.category in obj) {
    obj[item.category] += 1
  } else {
    obj[item.category] = 1
  }
  return obj
}, {})

// Loop over each item in categoriesHistogramObj, create object, push to array
let categoriesHistogramArray = []
for (const item in categoriesHistogramObj) {
  categoriesHistogramArray.push({name: item, count: categoriesHistogramObj[item]})
}

// Histogram of categories (array)
// const categoriesHistogramArray = data.reduce((ret, item) => {
//   if (ret.includes(item.category)) {
//     ret[item.category] += 1
//   } else {
//     ret.push({item.category : 1})
//   }
//   return ret
// }, [])

console.log("All categories:")
console.log(categories)
console.log("Unique categories:")
console.log(categoriesUnique)
console.log("Categories histogram (object):")
console.log(categoriesHistogramObj)
console.log("Categories histogram (array):")
console.log(categoriesHistogramArray)


export default data
export {categoriesUnique, count}
// import data, {categories} from "./index"

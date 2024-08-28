//I added comments for myself to the memo so I can come back and check these codes with explanation(I added sometimes japanese. Sorry if it is difficult to look it through)

// Step 1: Turn this into an enum)
//why use enum?
//Should use enum types whenever you need to represent a fixed set of constants. That includes enum types such as the planets in our solar system and data sets where you know all possible values at compile time — for example, the choices on a menu, command line flags,
enum Categories {
  ELECTRONICS = "Electronics",
  GROCERIES = "Groceries",
  CLOTHING = "Clothing",
}
// Step 2: Create a list of products (using plain objects)
//Why use interface?
//Defines the structure of an object such as string, number, and boolean and use the Product to products´s object so the items understand what kind of type are they
interface Product {
  id: number;
  name: string;
  price: number;
  category: Categories;
  //using enum Categories here
}
const products: Product[] = [
  { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
  { id: 2, name: "T-Shirt", price: 19.99, category: Categories.CLOTHING },
  { id: 3, name: "Bananas", price: 1.99, category: Categories.GROCERIES },
];
// Step 3: Create a shopping cart (initially empty)
let shoppingCart: Product[] = [];
//Defining what type of items the array will hold. Interface Product specifies what properties an objects should have.

// Step 4: Function to add a product to the cart (using arrow function)
//If there is not return, add void because a function does not return any value
//Adds one product to the cart, so don`t need to use []array.
const addToCart = (products: Product): void => {
  shoppingCart.push(products);
  console.log(`${products.name} has been added to your cart.`);
};
// Step 5: Function to calculate the total price of the cart (using arrow function)
//This function is calculating the total price, so that`s why using forEach and it requires an array of Product
//toFixedがなければ、ReturnがNumberになるのでその時はNumberを入れる。
const calculateTotal = (cart: Product[]): string => {
  let total = 0;
  cart.forEach((item) => (total += item.price));

  return total.toFixed(2);
};
// Step 6: Function to display the cart contents (using arrow function)
//Use void because there is no return value in this function.　ReturnにValue がある時点で、Voidは使えない。こんな感じのやつ　return "Cart is empty"
const displayCart = (cart: Product[]): void => {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }
  console.log("Your cart contains:");
  cart.forEach((item) => {
    console.log(`- ${item.name} (${item.category}): $${item.price}`);
  });
  console.log(`Total: $${calculateTotal(cart)}`);
};
// Step 7: Simulate adding products to the cart and displaying it
addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas

displayCart(shoppingCart);

//This is the terminal shown
// Laptop has been added to your cart.
// Bananas has been added to your cart.
// - Laptop (Electronics): $999.99
// - Bananas (Groceries): $1.99
// Total: $1001.98

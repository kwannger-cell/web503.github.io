// Định nghĩa interface Product
interface Product {
  id: number;        // Mã sản phẩm
  name: string;      // Tên sản phẩm
  price: number;     // Giá sản phẩm
  category: string;  // Danh mục sản phẩm (ví dụ: "Điện tử", "Thực phẩm")
}


// Tạo danh sách sản phẩm
const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 25000000, category: "Điện tử" },
  { id: 2, name: "Laptop Dell XPS 13", price: 32000000, category: "Điện tử" },
  { id: 3, name: "Bánh mì", price: 15000, category: "Thực phẩm" },
  { id: 4, name: "Nước ngọt Coca-Cola", price: 10000, category: "Thực phẩm" },
  { id: 5, name: "Áo thun Uniqlo", price: 350000, category: "Thời trang" }
];


// Hàm lọc sản phẩm theo category
function filterByCategory(products: Product[], category: string): Product[] {
  return products.filter((p) => p.category === category);
}


// 4. Hàm tính tổng giá trị sản phẩm
function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, p) => total + p.price, 0);
}

// 5. Hàm tìm sản phẩm giá nhỏ nhất và lớn nhất
function findMinMax(products: Product[]): { min: Product; max: Product } {
  if (products.length === 0) {
    throw new Error("Danh sách sản phẩm trống!");
  }

  let min = products[0];
  let max = products[0];

  for (const p of products) {
    if (p.price < min.price) min = p;
    if (p.price > max.price) max = p;
  }

  return { min, max };
}

// ----------------------------
// Test thử
// ----------------------------

console.log("👉 Danh sách sản phẩm:", products);

console.log("👉 Lọc sản phẩm 'Điện tử':", filterByCategory(products, "Điện tử"));

console.log("👉 Tổng giá trị tất cả sản phẩm:", calculateTotalPrice(products));

const { min, max } = findMinMax(products);
console.log("👉 Sản phẩm rẻ nhất:", min);
console.log("👉 Sản phẩm đắt nhất:", max);
type ProductId = number;
type SupplierId = number;
type InventoryId = number;

type ProductName = string;
type SKU = string;

type Quantity = number;
type Price = number;

type ProductCategory =
  | "technology"
  | "clothing"
  | "food"
  | "home";

const product: {
  id: ProductId;
  name: ProductName;
  sku: SKU;
  category: ProductCategory;
  price: Price;
} = {
  id: 1,
  name: "Laptop",
  sku: "LAP123",
  category: "technology",
  price: 1500,
};

const supplier: {
  id: SupplierId;
  name: string;
  contactEmail: string;
} = {
  id: 1,
  name: "Tech Supplies Inc.",
  contactEmail:"techsupplies@example.com",
};

const inventory: {
  id: InventoryId;
  productId: ProductId;
  supplierId: SupplierId;
  quantity: Quantity;
} = {
  id: 1,
  productId: product.id,
  supplierId: supplier.id,
  quantity: 100,
};
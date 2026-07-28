"use strict";
const product = {
    id: 1,
    name: "Laptop",
    sku: "LAP123",
    category: "technology",
    price: 1500,
};
const supplier = {
    id: 1,
    name: "Tech Supplies Inc.",
    contactEmail: "techsupplies@example.com",
};
const inventory = {
    id: 1,
    productId: product.id,
    supplierId: supplier.id,
    quantity: 100,
};

import { useEffect, useState } from "react";
import api from "../../api";
import { PRODUCTS } from "../Shop/product";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch stock from backend
  useEffect(() => {
    api.get("/admin/products")
      .then(res => {
        setProducts(res.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Toggle stock using SLUG
  const toggleStock = (slug, inStock) => {
    api.put(`/admin/products/${slug}/stock`, {
      inStock: !inStock,
    }).then(() => {
      setProducts(prev =>
        prev.map(p =>
          p.slug === slug
            ? { ...p, inStock: !inStock }
            : p
        )
      );
    });
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <>
      <h1>Products</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => {
            // 🔹 Match frontend product using SLUG
            const product = PRODUCTS.find(
              pr => pr.slug === p.slug
            );

            return (
              <tr key={p._id}>
                <td>{product?.title || p.slug}</td>
                <td>{product?.price ? `₹${product.price}` : "-"}</td>
                <td>{p.inStock ? "In Stock" : "Out of Stock"}</td>
                <td>
                  <button
                    onClick={() =>
                      toggleStock(p.slug, p.inStock)
                    }
                  >
                    {p.inStock ? "Mark Out" : "Mark In"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

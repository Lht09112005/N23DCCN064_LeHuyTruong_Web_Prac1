import Navbar from "@/components/Navbar";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { id } = await params; // ← Thêm await vào đây
  const product = await getProduct(id);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-80 object-contain"
          />

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-500 text-sm mb-4">{product.category}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <span className="text-3xl font-bold text-green-600 mb-4">
              ${product.price}
            </span>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-80">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

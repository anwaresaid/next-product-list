import mockData from "@/assets/mockData";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <main>
      <div className="app-content">
        <ProductListing products={mockData} />
      </div>
    </main>
  );
}

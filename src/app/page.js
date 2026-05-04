import Banner from "@/components/Banner";
import BooksApi from "@/components/BooksApi";

import MarqueePage from "@/components/MarqueePage";
import Newsletter from "@/components/Newsletter";



export default function Home() {
  return (
    <div>
      <MarqueePage></MarqueePage>
      <Banner></Banner>

      <BooksApi></BooksApi>
      <Newsletter></Newsletter>
    </div>
  );
}

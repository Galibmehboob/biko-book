import Banner from "@/components/Banner";
import BooksApi from "@/components/BooksApi";
import MarqueePage from "@/components/MarqueePage";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";



export default function Home() {
  return (
    <div className="w-11/12 mx-auto">
      <MarqueePage></MarqueePage>
      <Banner></Banner>
      <Stats></Stats>
      <BooksApi></BooksApi>
      <Newsletter></Newsletter>

    </div>
  );
}

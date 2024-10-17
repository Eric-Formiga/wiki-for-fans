import { useEffect, useState } from "react";
import { AkatsukiData, Member } from "../Interfaces";
import Cards from "../components/Cards";
import NotFound from "./NotFound";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState<AkatsukiData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://narutodb.xyz/api/akatsuki');
        const data = await response.json();
        setData({
          akatsuki: data.akatsuki,
          currentPage: data.currentPage,
          pageSize: data.pageSize,
          totalMembers: data.totalMembers,
        });
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <><Loading/></>;
  }

  if (!data) {
    return <>
    <NotFound/>
    </>;
  }

  const akatsukiMembers: Member[] = data.akatsuki;

  return (
    <div className="container mx-auto p-4 flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Akatsuki members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {akatsukiMembers.map((member) => (
         <Cards member={member}/>
        ))}
      </div>
    </div>
  );
};

export default Home;

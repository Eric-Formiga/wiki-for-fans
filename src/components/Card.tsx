import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Member } from '../Interfaces';
import Loading from './Loading';

const Card = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await fetch(`https://narutodb.xyz/api/akatsuki/${id}`);
        const data = await response.json();
        setMember(data);
      } catch (error) {
        console.error('Error loading member details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (loading) {
    return <><Loading/></>;
  }

  if (!member) {
    return <div>Error loading member details.</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen" style={{ maxWidth: '600px' }}>
      <div className="bg-white rounded-lg shadow-lg p-6" style={{ maxHeight: '950px', overflowY: 'auto' }}>
        <img
          src={member.images?.[0] || 'https://via.placeholder.com/150'}
          alt={member.name}
          className="w-full h-96 mb-4 rounded-lg"
        />
        <h1 className="text-3xl font-bold mb-4 text-center">{member.name}</h1>
        <div className="mb-4">
          <p className="text-gray-700"><strong>Debut no Manga:</strong> {member.debut?.manga || 'Desconhecido'}</p>
          <p className="text-gray-700"><strong>Debut no Anime:</strong> {member.debut?.anime || 'Desconhecido'}</p>
        </div>
        {member.jutsu && member.jutsu.length > 0 && (
          <div className="mb-4">
            <strong>Jutsus:</strong>
            <ul className="list-inside">
              {member.jutsu.slice(0,4).map((jutsu, index) => (
                <li key={index} className="text-gray-700">- {jutsu}</li>
              ))}
            </ul>
          </div>
        )}
        {member.tools && member.tools.length > 0 && (
          <div className="mb-4">
            <strong>Tools:</strong>
            <ul className="list-inside">
              {member.tools.slice(0,4).map((tool, index) => (
                <li key={index} className="text-gray-700">- {tool}</li>
              ))}
            </ul>
          </div>
        )}
        {member.voiceActors && (
          <div className="mb-4">
            <strong>Voice actors:</strong>
            <p className="text-gray-700"><strong>Japonese:</strong> {member.voiceActors.japanese}</p>
            <p className="text-gray-700"><strong>English:</strong> {member.voiceActors.english!.join(', ') || 'none'}</p>
          </div>
        )}
      </div>
    </div>

  );
};

export default Card;

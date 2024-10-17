import React from 'react';
import { Link } from 'react-router-dom';
import { Member } from '../Interfaces';

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" >
      <img
        src={member.images?.[0] || 'https://via.placeholder.com/150'}
        alt={member.name}
        className="w-full h-48 sm:h-56 object-cover"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-bold mb-2">{member.name}</h2>
        <p className="text-gray-700">
          <strong>Debut in Manga:</strong> {member.debut?.manga || 'Desconhecido'}
        </p>
        <p className="text-gray-700">
          <strong>Debut in Anime:</strong> {member.debut?.anime || 'Desconhecido'}
        </p>
        {member.jutsu && member.jutsu.length > 0 && (
          <p className="text-gray-700">
            <strong>Jutsu:</strong> {member.jutsu[0]}
          </p>
        )}
        {member.personal?.status && (
          <p className="text-gray-700">
            <strong>Status:</strong> {member.personal.status}
          </p>
        )}
      </div>
      <Link
        to={`/card/${member.id}`}
        className="mt-4 mb-4 mx-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 text-center"
      >
        See more
      </Link>
    </div>
  );
};

export default MemberCard;

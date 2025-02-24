import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      image: '/images/about/gokhanozdemir.jpeg',
      username: 'Gökhan Özdemir',
      profession: 'Project Manager',
      socials: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      }
    },
    {
      id: 2,
      image: '/images/about/foto.jpg.jpg',
      username: 'Faruk Kuyucuoğlu',
      profession: 'Full Stack Developer',
      socials: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      }
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300',
      username: 'Mahmut Abi',
      profession: 'Full Stack Developer',
      socials: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      }
    },
  ];

  return (
    <div className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-sm max-w-[225px] mx-auto leading-tight md:max-w-[450px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px] mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Member Image */}
              <div className="relative pb-[75%]">
                <img
                  src={member.image}
                  alt={member.username}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-base font-semibold text-[#252B42] mb-1">
                  {member.username}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {member.profession}
                </p>

                {/* Social Links */}
                <div className="flex justify-center items-center space-x-5">
                  <Link 
                    to={member.socials.facebook} 
                    className="text-[#23A6F0] hover:text-blue-700 transition-colors"
                  >
                    <Facebook size={20} strokeWidth={1.5} />
                  </Link>
                  <Link 
                    to={member.socials.instagram} 
                    className="text-[#23A6F0] hover:text-blue-700 transition-colors"
                  >
                    <Instagram size={20} strokeWidth={1.5} />
                  </Link>
                  <Link 
                    to={member.socials.twitter} 
                    className="text-[#23A6F0] hover:text-blue-700 transition-colors"
                  >
                    <Twitter size={20} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
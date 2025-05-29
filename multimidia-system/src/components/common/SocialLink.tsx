import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  description?: string;
  bgClass?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, description, bgClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100 mb-2"
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${bgClass || 'bg-blue-500'}`}>
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-gray-800">{label}</h3>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  </a>
);

export default SocialLink;

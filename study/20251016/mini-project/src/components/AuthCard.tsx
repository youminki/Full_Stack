import React from 'react';

type Props = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
};

const AuthCard = ({ title, subtitle, children }: Props) => (
  <div className="w-full max-w-md">
    <div className="bg-white rounded-xl shadow-lg p-8">
      {title && <div className="flex flex-col items-center gap-2 mb-6">{title}</div>}
      {subtitle && <div className="text-center text-sm text-gray-500 mb-6">{subtitle}</div>}
      {children}
    </div>
  </div>
);

export default AuthCard;

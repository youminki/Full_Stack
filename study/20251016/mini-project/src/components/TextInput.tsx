import React from 'react';

type Props = {
  label?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
};

const TextInput = ({ label, value, onChange, type = 'text', placeholder }: Props) => (
  <div className="mb-4">
    <div className="flex flex-col md:flex-row md:items-center md:gap-4">
      {label && (
        <label className="md:w-20 text-sm text-gray-800 text-center font-medium">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 md:mt-0 flex-1 border rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
    </div>
  </div>
);

export default TextInput;

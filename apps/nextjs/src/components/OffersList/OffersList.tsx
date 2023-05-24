import React, { useEffect, useState } from 'react';
import useSearchOffers from '~/common/hooks/useSearchOffers';

interface SearchInputProps {
  placeholder?: string;
}

const Suggestions = ({
  suggestions,
  onSelect,
}: {
  suggestions: { title: string }[];
  onSelect: (suggestion: string) => void;
}) => {
  return (
    <div className="relative">
      <ul className="mb-4 mt-4 w-full rounded-xl border border-gray-100 bg-white">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.title}
            onClick={() => onSelect(suggestion.title)}
            className="relative cursor-pointer rounded-xl py-2 pl-8 pr-2 text-gray-400 hover:bg-blue-50 hover:text-gray-900"
          >
            {suggestion.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const OffersList = ({ placeholder = 'Type here' }: SearchInputProps) => {
  const { data, handleSelect, value, handleChange } = useSearchOffers();
  console.log(data);
  return (
    <>
      <div className="form-control w-full">
        <div className="input-group">
          <input
            type="text"
            placeholder={placeholder}
            className="input-bordered input w-screen"
            value={value}
            onChange={handleChange}
          />
          <button className="btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {data && data?.offers && data?.offers.length > 0 && (
        <Suggestions suggestions={data?.offers} onSelect={handleSelect} />
      )}
    </>
  );
};

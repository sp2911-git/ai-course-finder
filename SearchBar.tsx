import React from 'react';

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

export default function SearchBar({ 
  placeholder = "Search for AI courses...",
  onSearch = () => {}
}: SearchBarProps) {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder} 
          className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button 
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-r-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}

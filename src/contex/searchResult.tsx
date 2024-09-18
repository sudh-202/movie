import { createContext, useState } from "react";

// Define the types for the context
interface SearchResultContextType {
  searchText: string;
  searchData: any; // Replace 'any' with the correct type of your search data, if available
  setSearchText: (text: string) => void;
  setSearchData: (data: any) => void; // Replace 'any' with the correct data type if available
}

// Create the context with default values
export const SearchResultContext = createContext<SearchResultContextType>({
  searchText: "",
  searchData: null,
  setSearchText: () => {},
  setSearchData: () => {},
});

// SearchProvider component
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchData, setSearchData] = useState<any>(null); // Replace 'any' with the actual type if available

  const value = { searchText, searchData, setSearchText, setSearchData };

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};

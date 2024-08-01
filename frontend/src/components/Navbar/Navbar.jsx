import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileInfo from '../Cards/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const onLogout = () => {
    localStorage.clear();
    console.log("Logging out...");
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup'; // Updated to match signup link

  return (
    <div className="bg-white flex items-center justify-between px-4 py-2 shadow-md flex-wrap">
      <h2 className="text-lg sm:text-xl font-medium text-black py-2">Notes</h2>

      {!isAuthPage && (
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      )}

      <div className="flex items-center">
        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Navbar;

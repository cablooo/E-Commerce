// Import React and other necessary libraries
import React from 'react';
import styled from 'styled-components';

// Define styled components for the Sidebar
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 4rem 20px;
  background-color: #f0f0f0;
  overflow-y: auto;
  height: 100%;

  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
    padding: 2rem;
    align-items: center;
  }
`;

const SearchBar = styled.input`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  margin-bottom: 10px;
`;

const FilterItem = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FilterCheckbox = styled.input`
  margin-right: 5px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

// Define the Sidebar component
const Sidebar = ({ products, searchTerm, setSearchTerm, filterType, handleCheckboxChange }) => {
    return (
      <SidebarContainer>
        {/* Search bar component */}
        <SearchBar
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterContainer>
          <FilterTitle>Filter by Type</FilterTitle>
          {/* Use the products prop to map through product types */}
          {Array.from(new Set(products.map((product) => product.type))).map((type, index) => (
            <FilterItem key={index}>
              <FilterCheckbox
                type="checkbox"
                value={type}
                checked={filterType.includes(type)}
                onChange={handleCheckboxChange}
              />
              {type}
            </FilterItem>
          ))}
        </FilterContainer>
      </SidebarContainer>
    );
  };

export default Sidebar; // Export the Sidebar component

import React, { useEffect, useState } from 'react'


function Repositories() {
    const [currentPage, setCurrentPage] = useState(1);
    const [repositoriesPerPage, setRepositoriesPerPage] = useState(10);
    const [totalRepositories, setTotalRepositories] = useState(0);
    const [repositories, setRepositories] = useState([]);
    const [userName, setUserName] = useState('');
    const [pfpUrl, setPfpUrl] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
  
    
  useEffect(() => {
    fetchUserDetails();
    fetchRepositories();
    
  }, [currentPage, repositoriesPerPage]);

  async function fetchUserDetails() {
    const userDetailsResponse = await fetch('https://api.github.com/users/Yekiiii');
    const userDetails = await userDetailsResponse.json();

    setUserName(userDetails.name);
    setPfpUrl(userDetails.avatar_url);
  }

  async function fetchRepositories() {
        const apiUrl = 'https://api.github.com/users/Yekiiii/repos';

    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    const response = await fetch(`${apiUrl}?page=${currentPage}&per_page=${repositoriesPerPage}`);
    const data = await response.json();

    const totalCountResponse = await fetch(apiUrl);
    const totalCountData = await totalCountResponse.json();

    setTotalRepositories(totalCountData.length);
    setRepositories(data);

    loader.style.display = 'none';
  }

  function updatePerPage() {
    setRepositoriesPerPage(parseInt(document.getElementById('perPage').value));
    setCurrentPage(1);
  }

  function filterRepositories() {
    setSearchTerm(document.getElementById('searchInput').value.toLowerCase());
  }

  function displayRepositories(repos) {
    return repos.map(repo => (
        <a  href=''>
        <div className='border-wrapper'>
      <div href="" className="repository" key={repo.id}>
        <h3 className='white'>{repo.name}</h3>
        <p className='white'>{repo.description || 'No description available'}</p>
       </div>
      </div>
      </a>
    ));
  }
  function displayPagination() {
    let totalPages = Math.ceil(totalRepositories / repositoriesPerPage);

    const paginationButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "pagNumButton current" : "pagNumButton"}
        >
          {i}
        </button>
      );
    }

    return (

      <div className="pagination d-flex justify-content-center align-items-center" id="pagination">
        <button className='pagButton'onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        {paginationButtons}
        <button className='pagButton' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>&gt;</button>
      </div>

    );
  }

  return (
    <div>
      <div className="text-center">
        <p id="tech-title">My repositories</p>
      </div>

      <div className="container styled-form">
        

      </div>

      <div id="repositories">
        {displayRepositories(repositories.filter(repo => repo.name.toLowerCase().includes(searchTerm)))}
      </div>

      <div className="loader" id="loader">Loading...</div>

      {displayPagination()}
    </div>
  );

}

export default Repositories
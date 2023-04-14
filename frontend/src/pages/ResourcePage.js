import React from 'react';
import { getResources } from '../api/user';

const ResourcePage= ()=>{
    const [query, setQuery] = useState('');
    const [resources, setResources] = useState([]);
    handleSearch = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const response = await getResources(token, query);
        setResources(response.resources);
        };

        return (
            <div>
            <h2>Resources</h2>
            <form onSubmit={handleSearch}>
            <input
            type="text"
            placeholder="Search resources"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
            </form>
            <div>
            {resources.map((resource, index) => (
            <div key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
            Read more
            </a>
            </div>
            ))}
            </div>
            </div>
            );
};


import React, { useState, useRef, useEffect } from 'react';

function Buscador({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='buscador-1'>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                ref={inputRef}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            
            <div className="row">
                {filteredData.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
    );
}

export default Buscador;


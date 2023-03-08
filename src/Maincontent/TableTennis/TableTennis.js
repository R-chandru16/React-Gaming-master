import './TableTennis.css';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

function TableTennis() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        setSelectedFiles([...selectedFiles, ...event.target.files]);
    };

    const renderSelectedFiles = () => {
        return selectedFiles.map((file, index) => {
            return (
                <>

                    <div className='sizeing1'>
                        <div key={index} className='imgcontent'>
                            <p>File name: {file.name}</p>
                            <p>Upload time: {file.lastModifiedDate.toLocaleString()}</p>

                            <img src={URL.createObjectURL(file)} alt={file.name} />

                        </div>
                    </div>
                </>

            );
        });
    };

    return (
        <>
            <Navbar />
            <input className='inp' type="file" multiple onChange={handleFileSelect} />
            <div>{renderSelectedFiles()}</div>
        </>
    );
}

export default TableTennis;

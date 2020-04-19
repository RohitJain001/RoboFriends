import React from 'react';


const searchBox =({searchChange})=>{
    return(
        <input type='search' placeholder='Robot Name Search' onChange={searchChange} />
    );
}

export default searchBox
import React from 'react';

function Search(props) {

    const searchHandle =(e) =>{
        props.search(e.target.value);


    }


    return (
        <div>
            <from>
                <input  
                style={
                    {
                      width: '50%',
                      height: '10px',
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '20px',
                      fontWeight: 'blue',
                      color: 'black',
                      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
                      borderRadius: '10px',
                      marginLeft:'25%',
                      marginBottom:'30px',
                      padding: '10px 0px'
                    
                     }}
                type="text" name="search" placeholder="Search" onChange={(e)=>searchHandle(e)}
                />
            </from>
        </div>
    );
}

export default Search;
import React from 'react';
import Image from 'react-bootstrap/Image';

const Images = (props) => {
    return (
      <div className="container">
        <Image src={URL.createObjectURL(props.data)} alt="Example Image" fluid />
      </div>
    );
  };
  
  export default Images;
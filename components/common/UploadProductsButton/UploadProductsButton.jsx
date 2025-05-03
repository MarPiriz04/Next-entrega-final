import React from 'react';

const UploadProductsButton = ({ setUploadedProducts }) => {
  const handleUpload = async () => {
    try {
      const response = await fetch('/api/upload-products', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Products uploaded successfully:', data);
      setUploadedProducts(data.products);
    } catch (error) {
      console.error('Error uploading products:', error);
      // TODO: Handle error, e.g., show an error message
    }
  };

  return (
    <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Subir Productos
    </button>
  );
};

export default UploadProductsButton;
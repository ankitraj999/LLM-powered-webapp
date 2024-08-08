import React,{useEffect,useState} from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import GoogleMapService from './map.component';
// function index() {
//   const [message,setMessage]=useState("Loading");
//   useEffect(()=>{
//     fetch("http://localhost:8080/api/home")
//     .then((response)=> response.json())
//     .then((data)=>{
//       setMessage(data.message);
//     })
//   },[]);
//   return (
//     <div>{message}</div>
//   )
// }

// export default index
function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [answer, setAnswer] = useState<string>('');
  // Function to handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  // const loader = new Loader({
  //   apiKey: "AIzaSyCveqavUnsjsNtuGYgOSGFrbMR",
  //   version: "weekly"
  // });
  
 
  // Function to handle form submission
  const handleSubmit = async(event) => {
    event.preventDefault();
    setAnswer("Analyzing...")
    console.log("Thinking")
    // Create a FormData object to send the image file
    const formData = new FormData();
    formData.append('image', selectedImage);
    
    try {
      // Make a POST request to the desired URL
      const response = await fetch('http://localhost:8080/api/upload', {
        method: 'POST',
        body: formData,
       
      });
      console.log("posted");

      if (response.ok) {
        // If the request is successful, set the imageUrl state with the URL of the uploaded image
        const data = await response.json();
        console.log('Response from the server:', data);
        setAnswer(data.message);
        
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    
  };

  return (
    <div className="flex w-fit h-full bg-gray-300">
      <div className=" max-w-full mx-auto p-4 bg-gray-100 rounded-lg shadow-lg w-1/2">
      <h2 className="text-2xl font-bold mb-4">Upload an Image</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Upload
        </button>
      </form>
      {selectedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Selected Image Preview:</h3>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="mt-2 w-full rounded-lg shadow-md"
          />
        </div>
      )}
      <div>
      <h3 className="text-lg w-fill h-fill">{answer}</h3>
      </div>
      </div>
      <div className="max-w-fit mx-auto p-4 bg-gray-100 rounded-lg shadow-lg w-1/2">
      <GoogleMapService/>
      </div>
      
      
      </div>
  );
}

export default ImageUpload;
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import Footer component
import { ToastContainer, Bounce,toast } from "react-toastify";
function SyncGoogle() {
  // Function to handle Google Sync
  const handleGoogleSync = async () => {
    // Logic to sync data with Google
    const data = await fetch("http://localhost:8080/");
    let response = await data.json();

    if (response.message === "Data appended successfully!") {
      toast('Data synced successfully!');
    } else {
      toast("Failed to sync data.");
    }
    if (response.data) {
      navigator.clipboard.writeText(response.data);
      toast('Data copied to clipboard!');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar /> {/* Add Navbar component here */}
      {/* main */}
      <div className="h-[80vh] flex justify-center">
        <div className="w-[90%] bg-yellow-50 flex justify-center items-center">
          <button
            className="bg-[#3f0808] flex items-center h-12 my-20 py-4  px-4 rounded-lg text-white font-semibold"
            onClick={handleGoogleSync}
          >
            Sync your data
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SyncGoogle;

// import React from 'react'
import loading from "../../public/loading.gif.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-transparent">
      <img className="object-cover" src={loading} />
    </div>
  );
};

export default Loading;

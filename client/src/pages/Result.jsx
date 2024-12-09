// Here the real img generate by giving the prompt

import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  // do display the generate and download btn once the img is generate or already present.
  const [image, setimage] = useState(assets.sample_img_1);

  // initially the img is not loaded then display the input field and the genrate btn
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Loading img
  const [loading, setLoading] = useState(false);

  // in this whatever the user type on the texttext that will  be store 
  const [input,setInput] = useState('');

  // when form is submitted
  const onSubmitHandler = async (e) => {

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img className="max-w-sm rounded" src={image} alt="sample img" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            } `}
          />
        </div>

        {/* when their is no loading then hde this prompt but if img is loading then show this prompt */}
        <p className={!loading ? "hidden" : ""}>Loading....</p>
      </div>

      {/* when img is not generate doisplay i/p textfield and generate btn */}
      {!isImageLoaded && (
        // form here
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
           {/*store the input text into state here  */}
          <input
            onChange={e => setInput(e.target.value)} value={input}
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
            type="text"
            placeholder="Describe what you want to generate"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {/* if img is already loaded / present that time show this on ui*/}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>

          {/* when click on download it will download the img */}
          <a
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            href={image}
            download
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;

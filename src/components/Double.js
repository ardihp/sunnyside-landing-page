import React from "react";

function Double() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-6/12 bg-cerry bg-center bg-cover">
        <div className="flex flex-col justify-center items-center text-center pt-72 md:pt-96 pb-8 px-4 md:px-32">
          <h3 className="font-fraunces text-2xl font-black text-green-900">Graphic Design</h3>
          <p className="font-barlow max-w-sm py-6 text-green-800">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="md:w-6/12 bg-orange pt-300 px-50 bg-center bg-cover">
        <div className="flex flex-col justify-center items-center text-center pt-72 md:pt-96 pb-8 px-4 md:px-32">
          <h3 className="font-fraunces text-2xl font-black text-blue-900">Photography</h3>
          <p className="font-barlow max-w-xs py-6 text-blue-900">
          Increase your credibility by getting the most stunning, 
          high-quality photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Double;

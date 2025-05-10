import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <h1 className="text-5xl mt-5 mb-5 lg:mb-10 text-white font-bold tracking-wider">
        Contact
      </h1>
      <div className="w-[80%] h-fit gap-5">
        <div className=" flex items-center flex-col gap-5">
          <a
            href="tel:+85587932289"
            className="lg:w-[400px] w-full h-[80px] px-5 rounded bg-gray-800/80 gap-5 flex items-center"
          >
            <span className="size-[50px] text-white  rounded-full flex items-center justify-center bg-gray-500/80">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <p className="text-xl text-white font-medium tracking-wide">
              +855 87932289
            </p>
          </a>
          <a
            href="mailto:angkimsor@gmail.com"
            className="lg:w-[400px] w-full h-[80px] px-5 rounded bg-gray-800/80 gap-5 flex items-center"
          >
            <span className="size-[50px] text-white  rounded-full flex items-center justify-center bg-gray-500/80">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <p className="text-xl text-white font-medium tracking-wide">
              angkimsor@gmail.com
            </p>
          </a>
          <a
            href="https://www.google.com.kh/maps/place/Phnom+Penh/@11.5793176,104.7253762,11z/data=!3m1!4b1!4m6!3m5!1s0x3109513dc76a6be3:0x9c010ee85ab525bb!8m2!3d11.5563738!4d104.9282099!16zL20vMGRsd2o?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
            className="lg:w-[400px] w-full h-[80px] px-5 rounded bg-gray-800/80 gap-5 flex items-center"
          >
            <span className="size-[50px] text-white  rounded-full flex items-center justify-center bg-gray-500/80">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <p className="text-xl text-white font-medium tracking-wide">
              Phnom Penh, Cambodia
            </p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;

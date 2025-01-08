/* eslint-disable no-unused-vars */
import { useState } from "react";
import { redirectAlert, successAlert } from "../SuccessAlert/SuccessAlert";

/* eslint-disable react/prop-types */
const CouponCard = ({ coupon, isSaleOn, shop_Link }) => {
  const { condition, coupon_code, coupon_type, description, expiry_date } =
    coupon;
  const [copied, setCopied] = useState("Copy Code");
  const [btnAnimate, setBtnAnimate] = useState(false);
  const copyBtnHandler = (shop_Link) => {
    setBtnAnimate(true);
    addToTextClipboard();
  };

  const addToTextClipboard = () => {
    navigator.clipboard
      .writeText(coupon_code)
      .then(() => {
        setCopied("copied");
        successAlert("Copied success!");
        setTimeout(() => {
          redirectAlert("go to store").then((res) => {
            if (res) {
              window.open(shop_Link, "_blank");
            }
          });
        }, 2000);
      })
      .catch(() => setCopied(false));
  };
  return (
    <div className="grid grid-cols-3 min-h-36 text-gray-400 ">
      <div className="col-span-2  rounded-r-2xl rounded-md bg-yellow-50 shadow-lg relative  border border-r-0 border-amber-200 overflow-hidden">
        <div className="absolute right-0 top-0 h-[calc(100%-30%)] border-amber-300 mt-6 border-r-[1.5px] border-dashed "></div>
        <div className="relative p-2">
          <p className="font-black text-xl z-10 mt-10 ml-5">{condition}</p>
          <p className="absolute -rotate-45 -left-6 top-5 font-bold px-4 bg-white z-0">
            {expiry_date}
          </p>
          <p className="ml-5 mb-5">{description}</p>
        </div>
      </div>
      <div className=" rounded-l-2xl rounded-md bg-yellow-50 shadow-lg border border-l-0 border-amber-200 flex flex-col justify-center items-center ">
        <p className="font-bold text-lg">{coupon_type}</p>
        <div className="my-4">
          <input
            type="text"
            className="border w-20 text-center rounded"
            value={coupon_code}
          />
        </div>
        {!isSaleOn ? (
          <button
            className={`btn btn-disabled btn-sm btn-outline bg-amber-200 hover:bg-amber-300 hover:text-gray-600 ${
              btnAnimate && "-rotate-[20deg]"
            } border-amber-300 hover:border-amber-400`}
          >
            Run Out
          </button>
        ) : (
          <button
            onClick={() => copyBtnHandler(shop_Link)}
            className={`btn btn-sm btn-outline bg-amber-200 hover:bg-amber-300 hover:text-gray-600 ${
              btnAnimate && "-rotate-[20deg]"
            } border-amber-300 hover:border-amber-400`}
          >
            {copied}
          </button>
        )}
      </div>
    </div>
  );
};

export default CouponCard;

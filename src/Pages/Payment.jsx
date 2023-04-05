import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Cart/cart.actions";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import { useState } from "react";
import styles from "../styles/Cart.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const arr = JSON.parse(localStorage.getItem("address")) || [];

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userAddress, setUserAddress] = useState(
    JSON.parse(localStorage.getItem("address")) || {
      name: "",
      address: "",
      city: "",
      mob: "",
    }
  );

  const cartItem = useSelector((store) => {
    return store.cartReducer.cart;
  });

  const handleRemove = (el) => {
    dispatch(removeFromCart(el));
  };

  const truncatedstring = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  let value = 0;
  let offerValue = 0;
  cartItem.map((el) => {
    offerValue += Number(el.price);
    return (value = value + Number(el.price2));
  });
  const finalAmount = offerValue;
  offerValue = value - offerValue;

  console.log(cartItem.length, "cart");

  function myBtn() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  function closeSpan() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const handlePayment = () => {
    const { name, address, city, mob } = userAddress;
    if (
      name.length > 4 &&
      mob.length > 9 &&
      address.length > 4 &&
      city.length > 3
    ) {
      navigate("/payment");
    } else {
      toast.warn("Check Your Details properly!");
    }
  };
  console.log(arr, "vvvv");

  return (
    <>

      <div className="flex flex-col bg-[#F5F1F7] h-[100vh]">
        <div className="flex pl-[13%] pt-8 pb-5">
          <h2 className="text-[24px] font-semibold ">
            Cart ({cartItem.length + " " + "Item"})
          </h2>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-4 ">
          <div className="overflow-y-scroll scroll-smooth h-[300px]">
            <div>
              {cartItem.map((el) => (
                <div className=" border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-6 py-10 flex flex-row mb-3 bg-[#FFFFFF]">
                  <div className="flex flex-row">
                    <div>
                      <img src={el.img} alt="img" className="h-[70px] " />
                    </div>
                    <div className="ml-5 flex flex-col font-medium gap-y-2">
                      <div>{truncatedstring(el.title, 40)}</div>
                      <div className="flex flex-row gap-x-2">
                        <div className="font-semibold">₹{el.price}</div>
                        <div className="font-medium line-through">
                          ₹{el.price2}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-60">
                    <button
                      onClick={() => handleRemove(el)}
                      className="bg-[#f61571] text-white px-4 py-2 rounded-lg flex flex-row justify-center items-center gap-x-2"
                    >
                      Remove
                      <MdDelete className="text-[20px]" />{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-4 py-6 flex flex-row mb-3 justify-between bg-[#FFFFFF] ">
                <div className="flex flex-col px-4 ">
                  <p className="pt-2">Total MRP</p>
                  <p className="pt-2">Discount on MRP</p>
                  <p className="pt-2 pb-2 border-b-2">Delivery Fee</p>
                  <p className="pt-2 font-bold text-[18px]">Total Amount</p>
                </div>
                <div className="flex flex-col px-4 text-[#7a7a7a]">
                  <p className="pt-2">₹{value}</p>
                  <p className="pt-2">₹{offerValue}</p>
                  <p className="pt-2 pb-2 border-b-2">rate</p>
                  <p className="pt-2 text-black font-bold text-[18px]">₹{finalAmount}</p>
                </div>
              </div>

              <div className="border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-4 py-8 flex flex-col mb-3 justify-center items-center bg-[#FFFFFF] ">
                {arr.length == 0 ? (
                  <div className="text-[16px] font-medium pb-4 flex flex-row justify-center items-center gap-x-2">
                    <TfiLocationPin className="text-[30px] text-[#f61571]" />
                    <p>Enter Your Address</p>
                  </div>
                ) : (
                  <div className="px-5">
                    <div>
                      <span className="font-semibold text-[18px]">Address</span>- {userAddress.name},<br/>
                      {userAddress.address}, {userAddress.city},<br/>{userAddress.mob}
                      
                    </div>
                    {/* <div>
                      <button className="px-5 py-2 bg-[#f61571] text-[#ffffff] rounded-md mt-3 mb-4" onClick={myBtn}>CHANGE ADDRESS</button>
                    </div> */}
                  </div>
                )}
                {arr.length == 0 ? (
                  <button
                    id="myBtn"
                    className={styles.addressBtn}
                    onClick={myBtn}
                  >
                    Add Address to proceed
                  </button>
                ) : (
                  <button
                    id="myBtn"
                    className="px-4 py-2 text-white bg-[#f61571] rounded-md mt-2 mb-4"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

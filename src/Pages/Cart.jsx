import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/Cart/cart.actions";
import styles from "../styles/Cart.module.css";
import { MdDelete } from "react-icons/md";
import { GiTwoCoins } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import Empty from "../components/Empty";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const arr = JSON.parse(localStorage.getItem("address")) || [];

function Cart() {
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

  const handleSubmit = () => {
    localStorage.setItem("address", JSON.stringify(userAddress));
    closeSpan();
  };

  const handleAddress = (e) => {
    let x = e.target.name;
    setUserAddress({ ...userAddress, [x]: e.target.value });
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
      {cartItem.length == 0 ? (
        <Empty />
      ) : (
        <div className="flex flex-col bg-[#F5F1F7] h-[100vh]">
          <div className="flex pl-[13%] pt-4 pb-3">
            <h2 className="text-[24px] font-semibold ">
              Cart ({cartItem.length + " " + "Item"})
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-4">
            <div className="">
              <div className="overflow-y-scroll scroll-smooth h-[300px]">
                {cartItem.map((el) => (
                  <div className=" border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-6 py-10 flex flex-row mb-3 bg-[#FFFFFF] ">
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
              <div className="border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-6 py-8 flex flex-col mb-3 bg-[#FFFFFF]">
                <p className="font-semibold text-[17px]">
                  Delivery Partner Tip
                </p>
                <p className="text-[#696969] pt-2">
                  The entire amount will be sent to your delivery partner
                </p>
                <div className="flex flex-row gap-x-4 pt-3 ">
                  <button className="flex flex-row justify-center items-center gap-x-1 px-3 border-2 rounded-xl border-[#f61571]">
                    <GiTwoCoins className="text-[#ffbf3f]" />
                    <span className="text-[#f61571]">₹ 10</span>
                  </button>
                  <button className="flex flex-row justify-center items-center gap-x-1 px-3 border-2 rounded-xl border-[#f61571]">
                    <GiTwoCoins className="text-[#ffbf3f]" />
                    <span className="text-[#f61571]">₹ 20</span>
                  </button>
                  <button className="flex flex-row justify-center items-center gap-x-1 px-3 border-2 rounded-xl border-[#f61571]">
                    <GiTwoCoins className="text-[#ffbf3f]" />
                    <span className="text-[#f61571]">₹ 35</span>
                  </button>
                  <button className="flex flex-row justify-center items-center gap-x-1 px-3 border-2 rounded-xl border-[#f61571]">
                    <GiTwoCoins className="text-[#ffbf3f]" />
                    <span className="text-[#f61571]">₹ 50</span>
                  </button>
                </div>
              </div>
              <div>
                <div className="border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-6 py-6 flex flex-row justify-start items-center bg-[#FFFFFF] mb-3">
                  <img
                    src="https://cdn.zeptonow.com/app/images/zeptonian-riding.png"
                    alt="img"
                    className="h-[50px] mr-2"
                  />
                  <p>See how we ensure our delivery partner’s safety</p>
                  <a href="/allproducts/Fruits" className="text-[#f61571] pl-2">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-4 py-6 flex flex-row mb-3 justify-between bg-[#FFFFFF] ">
                  <div className="flex flex-col px-4 ">
                    <p className="pt-2">Total MRP</p>
                    <p className="pt-2">Discount on MRP</p>
                    <p className="pt-2 pb-2 border-b-2">Delivery Fee</p>
                    {/* <div className="h-[1px] bg-[#7a7a7a] mt-2 w-[200px]"></div> */}
                    <p className="pt-2">Total Amount</p>
                  </div>
                  <div className="flex flex-col px-4 text-[#7a7a7a]">
                    <p className="pt-2">₹{value}</p>
                    <p className="pt-2">₹{offerValue}</p>
                    <p className="pt-2 pb-2 border-b-2">rate</p>
                    <p className="pt-2 text-black">₹{finalAmount}</p>
                  </div>
                </div>

                <div className="border-[1px] border-[#dbdbdb65] shadow-xl w-auto rounded-lg px-4 py-8 flex flex-col mb-3 justify-center items-center bg-[#FFFFFF] ">
                  {arr.length == 0 ? (
                    <div className="text-[16px] font-medium pb-4 flex flex-row justify-center items-center gap-x-2">
                      <TfiLocationPin className="text-[30px] text-[#f61571]" />
                      <p>Enter Your Address</p>
                    </div>
                  ) : (
                    <div className="">
                      <div className="px-4">
                        <span className="font-semibold text-[18px]">Address</span>- {userAddress.name}<br/>
                        {userAddress.address},{userAddress.city}<br/>
                        {userAddress.mob}"
                      </div>
                      <div>
                        <button onClick={myBtn} className="text-[#f61571] pt-3 pb-3">CHANGE ADDRESS</button>
                      </div>
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
                      className={styles.addressBtn}
                      onClick={handlePayment}
                    >
                      Continue To Payment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div id="myModal" className={styles.modal}>
            <div className={styles.modal_content}>
              <p>Enter Your Current Address</p>
              <span onClick={closeSpan} className={styles.close}>
                &times;
              </span>
            </div>
            <div className={styles.addressInputBox}>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleAddress}
                  value={userAddress.name}
                />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={handleAddress}
                  value={userAddress.address}
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleAddress}
                  value={userAddress.city}
                />
                <input
                  type="text"
                  placeholder="Mobile No."
                  name="mob"
                  onChange={handleAddress}
                  value={userAddress.mob}
                />
                <input type="submit" id={styles.submitBtn} />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;

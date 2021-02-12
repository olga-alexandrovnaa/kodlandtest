import React, {useEffect} from 'react';

function Card(props) {
  const { item } = props;
  if (!item) return null;

  return (
    <div
      className="border-gray-300 border flex-col shadow-md rounded-md  justify-items-center bg-white m-5 "
      style = {{width: "300px", height: "440px"}}
    >
      <img className="" src="images/boots.png" alt=""/>
      
      <p className="text-xl ml-6 mt-7 font-sans font-semibold">{item.name}</p>
      <p className="mt-2 ml-6 text-base text-gray-500 font-sans">{`${item.description}`}</p>
      <div className="flex ml-6 font-sans mt-6 mb-7">
      <p className="mt-2  text-3xl  font-semibold">{`${item.price}`}</p><p className=" ml-1 mt-3  text-xl">{` руб.`}</p>
      <button type="button" className="ml-24 " >
          <img className=" " src="images/basket.jpg" alt="" style = {{width: "50px", height: "40px"}}/>
        </button>
      </div>
      
    </div>
  );
}

export default Card;

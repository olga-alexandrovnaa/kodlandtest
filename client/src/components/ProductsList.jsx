import React, { useEffect } from 'react';
import Card from './Card'

const getCards = (products, id) => {
  let content = [];
  for (let i = id*3; (i < products.length) && (i<id+3); i++) {
    const item = products[i];
    content.push(<Card item={item} key={i} />);
  }
  return content;
};

const getProducts = (products, header) => {
  let content = [];
  let Bottons = [];
  let Cards = [];
  let sliders=Math.ceil(products.length/3); 
  for (let i = 0; i < sliders; i++) {
    Cards = getCards(products, i);
    Bottons.push(<a className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center" href={"#slide-"+(i+1)} key={i}>{i+1}</a>);
    if(i===sliders-1){
      content.push(
        <div
          className=" snap-start w-full h-full flex items-center justify-center flex-shrink-0 flex flex-col"
          id={"slide-"+(i+1)}
          key={"slide-"+(i+1)}
        >
          <div className="-mb-8 text-4xl font-serif font-light mt-5" style={{textShadow: '1px 1px 2px gray'}}>{header}</div>
          <div className="flex flex-row">
            {Cards}
          </div>
          <div className="flex mt-6 mb-5">
            {Bottons}
          </div>
        </div>
      )
    }
  }
  return content;
};

function ProductsList(props) {
  //console.log(props);
  //const { products } =  props ?? [];
  //const { header } = props.header ?? [];
  return (
    <div className="flex flex-col items-center " style = {{margin: "-50px auto 0"}}>
      <div className="w-full rounded overflow-x-hidden overflow-y-hidden flex snap-x" style={{height: "80vh"}}>
        {getProducts(props.products, props.header)}
      </div>
    </div>
  );
}

export default ProductsList;

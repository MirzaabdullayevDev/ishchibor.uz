import React from "react";
import "./CategoryItems.css";
import CategotyImg from "../../images/cardImg.jpg";

export default function CategoryItems() {
  const categories = [
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
    {
      images: CategotyImg,
    },
  ];

  return (
    <div className="category_items">
      {categories.map((item, index) => (
        <div className="category_item" key={index}>
          <div className="category_item_img">
            <img src={item.images} alt="img" />
          </div>
          <a href="/">Убрать квартиру</a>
        </div>
      ))}
    </div>
  );
}

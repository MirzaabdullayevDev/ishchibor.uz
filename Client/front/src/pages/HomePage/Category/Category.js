import React from "react";
import CategoryItems from "../../../components/Category_items/CategoryItems";
import "./Category.css";

export default function Category() {
  return (
    <section className="category">
      <div className="container">
        <div className="category_title">
          <h2 className="section_title">Предложите ваше задание</h2>
        </div>
        <CategoryItems />
      </div>
    </section>
  );
}

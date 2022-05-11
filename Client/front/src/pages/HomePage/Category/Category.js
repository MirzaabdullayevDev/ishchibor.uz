import React from "react";
import CategoryItems from "../../../components/Category_items/CategoryItems";
import "./Category.css";

export default function Category() {
  return (
    <section class="category">
      <div class="container">
        <div class="category_title">
          <h2 class="section_title">Предложите ваше задание</h2>
        </div>
        <CategoryItems />
      </div>
    </section>
  );
}

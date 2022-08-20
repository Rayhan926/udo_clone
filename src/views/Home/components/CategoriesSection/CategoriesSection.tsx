import { categories } from "@config/constants";
import React from "react";

const CategoriesSection = () => {
  return (
    <section className="mt-12 hidden md:block">
      <div className="container">
        <h2 className="mb-1.5 text-2xl text-dark font-bold">Kategorien</h2>
        <ul className="columns-3">
          {categories.slice(1, categories.length).map((category, i) => (
            <li key={i}>
              <button className="outline-none text-[16px] leading-[42px]  font-medium text-dark">
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CategoriesSection;

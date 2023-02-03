import React from "react";

const Categories = () => {
  const [categories, setCategories] = useState(items);
  const newCategory = categories.filter(category => category.id !== id) {
    return (
      <button></button>
    )
  }
  return (
    <div className="btn-container">
      {newCategory}
    </div>
  );
};

export default Categories;


// {categories.filter((category) => {
//   console.log(category);
//   return (
//     <button key={category.id} className="filter-btn">
//       {category.category}
//     </button>
//   );
// })}
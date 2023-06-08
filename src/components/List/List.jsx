import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][categories][id]=${catId}${subCats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    
  );

  {/*}
const subcatFilter = subCats && subCats.map(
  (item) => `&[filters][subcategories][id][$eq]=${item}`
).join('');

const maxPriceFilter = maxPrice && `&[filters][price][$lte]=${maxPrice}`
const sortFilter = sort ? `&sort=price:${sort}` : ''
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subcatFilter}${maxPriceFilter}${sortFilter}`
  );
  */}

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
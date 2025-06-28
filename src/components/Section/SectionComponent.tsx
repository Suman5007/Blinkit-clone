import React, { FC } from "react";
import "./style.css";


interface CategoryItem {
  category: string;
  color: string;
  src: string;
}

interface SectionComponentProps {
    title:string;
    data:CategoryItem;

}

const SectionComponent:FC<SectionComponentProps> = ({title,data}) => {
  return (
    <div className="section">
      <h3 className="section-title">{title}</h3>
      <div className="grid-container">
        {data?.map((item, index) => (
          <div key={index} className="category-card">
            <img src={item.src} alt={item.category} className="category-image" style={{background:item?.color ? item?.color : "#eaf9f9"}} />
            <p className="category-label">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionComponent;

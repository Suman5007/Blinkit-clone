import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import SearchComponent from "./components/Search/SearchComponent";
import SectionComponent from "./components/Section/SectionComponent";
import CategoryComponent from "./components/Category/CategoryComponent";

const AllCategories = [
  {
    category: "Vegetables & Fruits",
    src: "https://cdn.grofers.com/app/images/category/cms_images/icon/1487_1679466558536.png"
  },
  {
    category: "Dairy & Breakfast",
    src: "https://cdn.grofers.com/app/images/category/cms_images/icon/14_1678949253289.png"
  },
  {
    category: "Munchies",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/1237_1670927167688.png"
  },
  {
    category: "Cold Drinks & Juices",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269009421.png"
  },
  {
    category: "Instant & Frozen Food",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/15_1676610279582.png"
  },
    {
    category: "Tea, Coffee & Health Drinks",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/12_1670926444151.png"
  },
      {
    category: "Bakery & Biscuits",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/888_1688712847171.png"
  },
      {
    category: "Sweet Tooth",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/9_1693202755712.png"
  },
];

const AllStore = [
    {
    category: "Pet Store",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2024-05/pet-store-new-icon-1.png",
    color:"#FFAA58"
  },
    {
    category: "Local Store",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-09/Mumbai-Store-Entry-point-1.jpg",
    color:"red"
  },
    {
    category: "Electronics Store",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/electrics-store.png",
     color:"priple"
  },
    {
    category: "Stationery Store",
    src: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/stationery-store.png",
    color:"lightgreen"
  },
]

const App = () => {
  return (
    <div className="app">
      <Header />
      <SearchComponent />
      <CategoryComponent/>
      <SectionComponent 
      title="Shop by category"
      data={AllCategories}
      />
      <SectionComponent 
      title="Shop by store"
      data={AllStore}
      />
    </div>
  );
};

export default App;

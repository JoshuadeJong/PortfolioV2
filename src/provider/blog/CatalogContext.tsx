import React from "react";
import Catalog from "type/blog/Catalog";

const CatalogContext = React.createContext<Catalog>({
  articles: [],
});

export default CatalogContext;

import React from "react";

interface Props {
  params: { id: string };
}

const ProductDetailPage = ({ params }: Props) => {
  console.log(params.id);
  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;

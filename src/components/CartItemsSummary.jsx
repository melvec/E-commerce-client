import React from "react";

const CartItemsSummary = () => {
  return (
    <div>
      <Stack direction="vertical">
        <Image
          src={product?.thumbnail}
          width={150}
          height={150}
          className="p-1 "
          rounded
        />
      </Stack>
      <Stack>
        <span>Author: {product.author}</span>
        <span>Shop: {product.shop}</span>
        <span>Description: {product.description}</span>
        <span>Dimensions: {product.dimensions}</span>
        <span>Frame: {product.frame}</span>
      </Stack>
      <Stack>
        <span>Delivering to: </span>
        <span>entered address</span>
      </Stack>
    </div>
  );
};

export default CartItemsSummary;

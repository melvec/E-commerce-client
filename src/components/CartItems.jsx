// import React from "react";
// import {
//   Badge,
//   Card,
//   Dropdown,
//   DropdownButton,
//   Image,
//   InputGroup,
//   Stack,
// } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { format } from "date-fns";

// const CartItems = () => {
//   const { products } = useSelector((state) => state.product);
//   const { cartProducts } = useSelector((state) => state.shoppingCart);

//   const handleSelect = (productId, newQuantity) => {
//     const currentProduct = cartProducts.find((product) => product.id === productId);
//     if (currentProduct.quantity < newQuantity) {
//       dispatch(increaseQuantity(productId));
//     } else if (currentProduct.quantity > newQuantity) {
//       dispatch(decreaseQuantity(productId));
//     }
//   };

//   return (
//     <div>
//       {cartProducts.map((product) => {
//         return (
//           <>
//             <div>
//               <Card className="d-flex flex-row align-items-center rounded">
//                 <Image
//                   src={product?.thumbnail}
//                   width="20%" // Set the width as a percentage
//                   height="auto"
//                   style={{ boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)" }}
//                 />

//                 <Card.Body>
//                   <Stack direction="horizontal">
//                     <Stack gap={1}>
//                       <Card.Title>
//                         {product.name}
//                         <Badge style={{ marginLeft: "15px" }} bg="secondary">
//                           {product.parentCategory}
//                         </Badge>
//                       </Card.Title>

//                       <Stack>Author: {product.author}</Stack>
//                       <Stack>
//                         Date:{" "}
//                         {format(new Date(product?.date), "yyyy-MM-dd", "")}
//                       </Stack>

//                       <Stack>Description: {product.description}</Stack>
//                       <Stack>Dimensions: {product.dimensions}</Stack>
//                       <Stack>Frame: {product.frame}</Stack>
//                       <Stack>Shop: {product.shop}</Stack>
//                     </Stack>

//                     <Stack>
//                       <Stack> ${product.price * product.quantity}</Stack>
//                       <Stack> Quantity: {product.quantity}</Stack>
//                       <Stack>
//                         <InputGroup className="mb-3">
//                           <DropdownButton
//                             variant="outline-secondary"
//                             title={`Quantity: ${product.quantity}`}
//                             id="input-group-dropdown-1"
//                           >
//                             {Array.from(
//                               { length: product.quantity },
//                               (_, index) => (
//                                 <Dropdown.Item
//                                   key={index + 1}
//                                   onClick={() => handleSelect(index + 1)} // Update state on selection
//                                 >
//                                   {index + 1}
//                                 </Dropdown.Item>
//                               )
//                             )}
//                           </DropdownButton>
//                         </InputGroup>
//                       </Stack>

//                     </Stack>
//                   </Stack>
//                 </Card.Body>
//               </Card>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default CartItems;

import React from "react";
import {
  Badge,
  Card,
  Dropdown,
  DropdownButton,
  Image,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";

import {
  addCartProduct,
  decreaseCartQuantity,
} from "../redux/shoppingCart/shoppingCartSlice";
import { setCartQuantityAction } from "../redux/shoppingCart/shoppingCartActions";

const CartItems = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { cartProducts } = useSelector((state) => state.shoppingCart);

  const handleSelect = (product, cartQuantity) => {
    dispatch(setCartQuantityAction({ ...product, cartQuantity }));
  };

  return (
    <div>
      {cartProducts.map((cartProduct) => {
        const product = products.find((prod) => prod._id === cartProduct._id);
        const maxQuantity = product?.quantity || 1;

        return (
          <div key={cartProduct.id}>
            <Card className="d-flex flex-row align-items-center rounded">
              <Image
                src={cartProduct?.thumbnail}
                width="20%" // Set the width as a percentage
                height="auto"
                style={{ boxShadow: "12px 16px 15px rgba(0, 0, 0, 0.2)" }}
              />
              <Card.Body>
                <Stack direction="horizontal">
                  <Stack gap={1}>
                    <Card.Title>
                      {cartProduct.name}
                      <Badge style={{ marginLeft: "15px" }} bg="secondary">
                        {cartProduct.parentCategory}
                      </Badge>
                    </Card.Title>

                    <Stack>Author: {cartProduct.author}</Stack>
                    <Stack>
                      Date:{" "}
                      {format(new Date(cartProduct?.date), "yyyy-MM-dd", "")}
                    </Stack>
                    <Stack>Description: {cartProduct.description}</Stack>
                    <Stack>Dimensions: {cartProduct.dimensions}</Stack>
                    <Stack>Frame: {cartProduct.frame}</Stack>
                    <Stack>Shop: {cartProduct.shop}</Stack>
                  </Stack>

                  <Stack>
                    <Stack>
                      $ {cartProduct.price * cartProduct.cartQuantity}
                    </Stack>
                    <Stack>
                      <InputGroup className="mb-3">
                        <DropdownButton
                          variant="outline-secondary"
                          title={`Quantity: ${cartProduct.cartQuantity}`}
                          id="input-group-dropdown-1"
                        >
                          {Array.from({ length: maxQuantity }, (_, index) => (
                            <Dropdown.Item
                              key={index + 1}
                              onClick={() =>
                                handleSelect(cartProduct, index + 1)
                              }
                            >
                              {index + 1}
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      </InputGroup>
                    </Stack>
                  </Stack>
                </Stack>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;

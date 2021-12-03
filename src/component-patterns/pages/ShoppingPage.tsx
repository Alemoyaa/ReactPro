import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"
import "../styles/custom-styles.css";

export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {products.map((product: Product) => (
                    <ProductCard
                        product={product}
                        className="bg-dark text-white"
                        key={product.id}
                        onChange={onProductCountChange}
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image " />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                {
                    shoppingCart &&
                    Object.entries(shoppingCart).map(([key, product]) => {
                        return (
                            <ProductCard
                                key={key}
                                product={product}
                                className="bg-dark text-white"
                                style={{ width: "100px" }}
                                onChange={onProductCountChange}
                                value={product.count}
                            >
                                <ProductImage className="custom-image " />
                                <ProductButtons
                                    className="custom-buttons"
                                    style={{ display: "flex", justifyContent: "center" }}
                                />
                            </ProductCard>
                        );
                    })
                }
            </div>
        </div>
    );
};

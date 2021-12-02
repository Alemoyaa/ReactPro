import { createContext, CSSProperties, ReactElement } from "react";
import { ProductButtons, ProductImage, ProductTitle } from ".";

import { useProduct } from "../hooks/useProduct";
import { onChangeArgs, Product, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css"

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
    const { counter, increaseBy } = useProduct({ onChange, product });

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`}
                style={ style }>
                { children }
                {/* <ProductImage img={product.img} />

                <ProductTitle title={product.title} />

                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    )
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

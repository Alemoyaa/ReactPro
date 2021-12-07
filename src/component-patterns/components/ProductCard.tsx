import { createContext, CSSProperties } from "react";
import { ProductButtons, ProductImage, ProductTitle } from ".";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css"

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    
    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{ counter, increaseBy, maxCount, product }}>
            <div className={`${styles.productCard} ${className}`}
                style={ style }>
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }
            </div>
        </Provider>
    )
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;

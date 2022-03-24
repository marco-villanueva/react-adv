import styles from "../../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../../interfaces/interfaces";
import { useProduct } from "../../hooks/useProduct";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <div className={styles.productCard}>{children}</div>
        </Provider>
    );
};
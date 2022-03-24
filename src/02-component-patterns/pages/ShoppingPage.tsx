import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCards";

const product = {
    id: "1",
    title: "Coffee Mug - Card",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
                <ProductCard product={product}>
                    <ProductImage img={product.img} />
                    <ProductTitle title={product.title} />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage img={""} />
                    <ProductTitle title={"Hola Mundo"} />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    );
};

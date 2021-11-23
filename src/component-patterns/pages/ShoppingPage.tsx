import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png",
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'hola mundo'}/>
                    <ProductCard.Buttons counter={0} increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    } } />
                    {/* HOC  High Order Component */}
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={'hola mundo'}/>
                    <ProductButtons counter={0} increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    } } />
                    {/* HOC  High Order Component */}
                </ProductCard>
            </div>
        </div>
    )
}

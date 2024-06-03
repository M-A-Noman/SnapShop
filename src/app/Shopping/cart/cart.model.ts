export interface CartProduct{
    productId: number,
    quantity: number,
    image?: string,
    price?: number,
    name?: string,
    
}
export interface CartKey{
    name:string,
    id: number
}
export interface Cart{
    id: number,
    userId: number,
    date: string,
    products:CartProduct[]
}
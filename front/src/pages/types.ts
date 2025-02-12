export interface I_ProductDetails {
    id: number
    slug?: string
    image: string
    price: number
    title: string
    description: string,
    brend: string,
    isLiked: boolean,
    hideLikes?: boolean,
    newModel?: boolean,
}
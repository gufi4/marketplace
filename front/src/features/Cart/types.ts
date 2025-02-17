export interface ItemCart  {
    id: number;
    slug?: string
    image: string
    title: string;
    brend: string;
    price: number;
    quantity: number;
}

export interface ItemCartWithoutQuantity {
    id: number;
    slug?: string
    image: string
    title: string;
    brend: string;
    price: number;
}

export interface CartState {
    items: ItemCart []
}


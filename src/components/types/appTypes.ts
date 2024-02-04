export type Product = {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating:number
    stock: number
    thumbnail: string
    title: string
}

export type User = {
    id?: number
    firstName?: string
    lastName?: string
    maidenName?: string
    age?: number
    gender?: string
    email?: string
    phone?: string
    username?: string
    password?: string
    birthDate?: string
    image?: string
    bloodGroup?: string
    height?: string
    weight?: string
    eyeColor?: string
    hair?: {
        color: string
        type: string
    }
    domain?: string
    ip?: string
    address?: {
        address: string
        city: string
        coordinates: {
            lat: number
            lng: number
        }
        postalCode: string
        state: string
    }
    macAddress?: string
    university?: string
    bank?:{
        cardExpire: string
        cardNumber: string
        cardType: string
        currency: string
        iban:string
    }
    company?: {
        address: {
            address: string
            city: string
            coordinates: {
                lat: number
                lng: number
            }
            postalCode: string
            state: string
        }
        department: string
        name: string
        title: string
    }
    ein?: string
    ssn?: string
    userAgent?: string
    crypto?: {
        coin: string
        wallet: string
        network: string
    }
}
export type UserCarts = {
    discountedTotal: number
    id: number
    products: {
        discountPercentage: number
        discountedPrice: number
        id: number
        price: number
        quantity: number
        thumbnail: string
        title: string
        total: number
    }[]
    total: number
    totalProducts: number
    totalQuantity: number
    userId: number
}

export type CartProduct = {
        discountPercentage?: number
        discountedPrice?: number
        id?: number
        price?: number
        quantity?: number
        thumbnail?: string
        title?: string
        total?: number
}
export interface CityInformation {
id:number ,
name: string
}

export interface SHOPDATAOFCITY {
    id:number,
    cityId:number,
    name:string,
    productsInShop : Array<any>,
    shopImage : string,
    timing: string,
    shopDescription: string
}

export interface ShopsInCity {
    id:number,
    cityId:number,
    shopList: Array<SHOPDATAOFCITY>
}

export interface ProductsInShop {
    id:number,
    shopID:number,
    cityID:number,
    name: string,
    price: number,
    imageURL:string,
    qty:number,
}
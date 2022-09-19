export interface CityInformation {
id:number ,
name: string
}

export interface SHOPDATAOFCITY {
    id:number,
    cityId:number,
    name:string,
    productsInShop : Array<any>,
    shopImage : string
}

export interface ShopsInCity {
    id:number,
    cityId:number,
    shopList: Array<SHOPDATAOFCITY>
}
import { SHOPDATAOFCITY, ShopsInCity } from "../../interfaces/CommonInterfaces";

const SHOPLIST1 : Array<SHOPDATAOFCITY> = [
    {
        id:1,
        cityId:1,
        name:'Fast Food Shop',
        productsInShop : [],
        shopImage : ''

    },
    {
id:2,
cityId:1,
name: 'Electronics Shop',
productsInShop : [],
shopImage:''
    },
    {
id:3,
cityId:1,
name: 'Akash Stationary',
productsInShop: [],
shopImage:''
    },
    {
id:4 ,
cityId:1,
name: 'Vishal Machinery',
productsInShop: [],
shopImage:''
    },
    {
id:5,
cityId:1,
name: 'Anil Pizza',
productsInShop : [],
shopImage: ''
    }
 ]

 const SHOPLIST2 : Array<SHOPDATAOFCITY> = [
    {
        id:1,
        cityId:2,
        name:'Hair Saloon',
        productsInShop : [],
shopImage:''
    },
    {
id:2,
cityId:2,
name: 'Mobile Shop',
productsInShop : [],
shopImage:''
    },
    {
id:3,
cityId:2,
name: 'Abhinav Tea Stall',
productsInShop: [],
shopImage:''
    },
    {
id:4 ,
cityId:2,
name: 'Raju Samosa Corner',
productsInShop: [],
shopImage:''
    },
    {
id:5,
cityId:2,
name: 'Pizza Hut',
productsInShop : [],
shopImage:''
    }
 ]


 const SHOPLIST3 : Array<SHOPDATAOFCITY> = [
    {
        id:1,
        cityId:3,
        name:'Abhinav Dosa Corner',
        productsInShop : [],
shopImage:''
    },
    {
id:2,
cityId:3,
name: 'Juice Corner',
productsInShop : [],
shopImage:''
    },
    {
id:3,
cityId:3,
name: 'Akash Coaching Center',
productsInShop: [],
shopImage:''
    },
    {
id:4 ,
cityId:3,
name: 'Vishal Machinery',
productsInShop: [],
shopImage:''
    },
    {
id:5,
cityId:3,
name: 'Anil RealEstates And Corp.',
productsInShop : [],
shopImage:''
    }
 ]


 export const CITYSHOPS : Array<ShopsInCity> = [
    {
        id:1,
        cityId:1,
        shopList: SHOPLIST1
    },
    {
id:2,
cityId:2,
shopList:SHOPLIST2
    },
    {
id:3,
cityId:3,
shopList:SHOPLIST3
    },

];
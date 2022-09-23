import { ProductsInShop, SHOPDATAOFCITY, ShopsInCity } from "../../interfaces/CommonInterfaces";

export const PRODUCTSFORSHOP1 : Array<ProductsInShop> = [
    {
        id:1,
        shopID:1,
        cityID:1,
        name: 'Burger-Veg',
        price: 50,
        imageURL:'./images/productsimages/burgernonveg.jpg',
        qty:4,
    },
    {
        id:2,
        shopID:1,
        cityID:1,
        name: 'Burger-Non Veg',
        price: 70,
        imageURL:'./images/productsimages/burgernonveg.jpg',
        qty:8,
    },
    {
        id:3,
        shopID:1,
        cityID:1,
        name: 'Momos-Veg',
        price: 80,
        imageURL:'./images/productsimages/momos.jpg',
        qty:20,
    },
    {
        id:4,
        shopID:1,
        cityID:1,
        name: 'Momos-Non Veg',
        price: 100,
        imageURL:'./images/productsimages/momos.jpg',
        qty:20,
    }
]

const SHOPLIST1 : Array<SHOPDATAOFCITY> = [
    {
        id:1,
        cityId:1,
        name:'Fast Food Shop',
        productsInShop : PRODUCTSFORSHOP1,
        shopImage : './images/shopimages/FastFood.jpg',
        timing: '4:00 PM - 10:00 PM',
        shopDescription: 'All kind of chinese food variety available'
    },
    {
id:2,
cityId:1,
name: 'Electronics Shop',
productsInShop : PRODUCTSFORSHOP1,
shopImage:'./images/shopimages/electronic.jpg',
timing: '10:00 AM - 8:00 PM',
shopDescription: 'All kind of electronics and mobile devices repair center'
    },
    {
id:3,
cityId:1,
name: 'Akash Stationary',
productsInShop: PRODUCTSFORSHOP1,
shopImage:'./images/shopimages/stationary.jpg',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of Stationary Products'
    },
    {
id:4 ,
cityId:1,
name: 'Vishal Machinery',
productsInShop: PRODUCTSFORSHOP1,
shopImage:'./images/shopimages/machinary.jpg',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of repair and construction machines'
    },
    {
id:5,
cityId:1,
name: 'Anil Pizza',
productsInShop : PRODUCTSFORSHOP1,
shopImage: './images/shopimages/pizza.jpg',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of chinese food variety available'
    }
 ]

 const SHOPLIST2 : Array<SHOPDATAOFCITY> = [
    {
        id:1,
        cityId:2,
        name:'Hair Saloon',
        productsInShop : [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of chinese food variety available'
    },
    {
id:2,
cityId:2,
name: 'Mobile Shop',
productsInShop : [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of chinese food variety available'
    },
    {
id:3,
cityId:2,
name: 'Abhinav Tea Stall',
productsInShop: [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of chinese food variety available'
    },
    {
id:4 ,
cityId:2,
name: 'Raju Samosa Corner',
productsInShop: [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of chinese food variety available'
    },
    {
id:5,
cityId:2,
name: 'Pizza Hut',
productsInShop : [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of chinese food variety available'
    }
 ]


 const SHOPLIST3 : Array<SHOPDATAOFCITY> = [
    {
        id:1,
        cityId:3,
        name:'Abhinav Dosa Corner',
        productsInShop : [],
        shopImage:'',
        timing: '6:00 PM - 10:00 PM',
        shopDescription: 'Dosa , Idly with all Varieties'
    },
    {
id:2,
cityId:3,
name: 'Juice Corner',
productsInShop : [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'Fresh Juice Available'
    },
    {
id:3,
cityId:3,
name: 'Akash Coaching Center',
productsInShop: [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'English And Maths Coaching center'
    },
    {
id:4 ,
cityId:3,
name: 'Vishal Machinery',
productsInShop: [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'All kind of repair Machines'
    },
    {
id:5,
cityId:3,
name: 'Anil RealEstates And Corp.',
productsInShop : [],
shopImage:'',
timing: '8:00 AM - 8:00 PM',
shopDescription: 'Book Flats and Plots at cheap rates'
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



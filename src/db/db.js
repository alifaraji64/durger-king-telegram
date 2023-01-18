import pizzaImg from '../assets/pizza.png'
import burgerImg from '../assets/burger.png'
import cocaImg from "../assets/coca.png"
import icecreamImg from '../assets/icecream.png'
import kebabImg from '../assets/kebab.png'
import saladImg from '../assets/salad.png'
import waterImg from '../assets/water.png'

export function getData(){
    return[
        {title:'Pizza', price:17.99, image:pizzaImg, id:0},
        {title:'Burger', price:17.99, image:burgerImg, id:1},
        {title:'Coca', price:17.99, image:cocaImg, id:2},
        {title:'Ice Cream', price:17.99, image:icecreamImg, id:3},
        {title:'Kebab', price:17.99, image:kebabImg, id:4},
        {title:'Salad', price:17.99, image:saladImg, id:5},
        {title:'Water', price:17.99, image:waterImg, id:6},
    ]
}
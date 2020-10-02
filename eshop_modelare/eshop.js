
import 'https://cdnjs.cloudflare.com/ajax/libs/js-sha1/0.6.0/sha1.min.js';

class User {
    constructor(email, password){
        this.email = email
        this.hashedPassword = sha1(password)
        this.isLoggedIn = false
        this.cart = null
    }
    login(password){
        if (this.hashedPassword !==sha1(password)){
            return false;
        }
        this.isLoggedIn = true
        if(!this.cart) {
            this.cart = new ShoppingCart()
        }
    }
}

class Users{
    constructor(){
        this.users = []
    }
    searchUserWithEmail(email){
        this.users.find(user => user.email === email)
    }
    userExists(email){
        return this.users.some(user => user.email === email)
    }
    signUp(user, password){
        if(this.userExists(email)){
            throw new Error('User already exists')
        }
        let newUser = new User(user,password)
        this.users.push(newUser)
    }
}

class ShoppingCart {
    constructor(){
        this.products = []
    }
    add(product) {
        this.products.push(product)
    }
    remove(productIndex){
        this.products.splice(productIndex,1)
    }
    calculateTotalPrice() {
        return this.products.reduce((product, price) => product.price + price, 0)
    }
    checkout(){
        // todo
    }
}

class Session {
    constructor(users){
        this.user = users
        this.loggedUser = null
    }
    login(email,password){
        if(this.users.userExists(email)){
            throw new Error('Login failed')
        }
        let user = this.users.searchUserWithEmail(email)
        if (!user.login(password)){
            throw new Error('Login failed')
        }
        this.loggedUser = user
    }
    logout(){
        this.user.logout()
        this.loggedUser = null
    }
}

class ProductCatalog {
    constructor() {
        this.products = []
    }
    addProduct(product) {
        this.product.push(product)
    }
}

class Product {
    constructor(code, name, price, description, image){
        this.code = code
        this.name = name
        this.price = price
        this.description = description
        this.image = image
    }
}

new Vue({
    el:'#app',
    data: () => {
        let users = new Users()
        users.add(new User('admin','test123'))
        let session = new Session(this.users)
        let catalog = new ProductCatalog()
        catalog.add(new Product(1, 'VueJs Basic', 0, ''))
        catalog.add(new Product(2, 'VueJs intermediate', 10,''))
        catalog.add(new Product(3, 'VueJs Advanced', 20, ''))
        return {
            users,
            session,
            catalog
        }
    },
    template: ``,
    methods: {

    },
    computed: {

    },
})
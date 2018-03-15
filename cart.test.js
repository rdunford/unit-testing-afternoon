const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', () => {

    test('default cart length should be 0', () => {

        // let result = Array.isArray.cart.cart.length = 0
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })

    it('default total should be 0', () => {
        expect(cart.total).toEqual(0)
    })


})



describe('Cart Methods:', () => {
    afterEach(() => {
        cart.cart = [];
        cart.total = 0;
    })

    test('addToCart() should add a car object to the cart array', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        
        expect(cart.cart[0]).toEqual(cars[0])
        expect(cart.cart[1]).toEqual(cars[1])
    })

    it('addToCart() should increase the total', () => {
        cart.addToCart(cars[0])
        expect(cart.total).toEqual(cars[0].price)

        cart.addToCart(cars[1])
        expect(cart.total).toEqual(cars[0].price + cars[1].price)
    })

    it('removeFromCart should remove car object from the cart array', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])

        cart.removeFromCart(1, cars[1].price)

        expect(cart.cart.length).toEqual(2)
        expect(cart.cart[0]).toEqual(cars[0])
        expect(cart.cart[1]).toEqual(cars[2])
    })

    it('removeFromCart() should decrease the total', () => {
        cart.addToCart(cars[0])
        cart.addToCart(cars[15])
        cart.addToCart(cars[4])

        cart.removeFromCart(0, cars[0].price)
        expect(cart.total).toEqual(cars[15].price + cars[4].price)

        cart.removeFromCart(1, cars[4].price)
        expect(cart.total).toEqual(cars[15].price)
    })

    test('checkout() should empty the cart and reset total to 0', () => {
        cart.addToCart(cars[19])
        cart.addToCart(cars[12])
        cart.addToCart(cars[7])

        expect(cart.cart.length).toEqual(3)

        cart.checkout()

        expect(cart.cart.length).toEqual(0)
        expect(cart.total).toEqual(0)

    })

})

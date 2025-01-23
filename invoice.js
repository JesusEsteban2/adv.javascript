class Invoice {
    #numInvoice;
    #product;
    #numProduct;
    #price;
    #amount;
    #withIva;
    #iva = 1.21;

    constructor(numInvoice, product, numProduct, price) {
        this.#numInvoice = numInvoice;
        this.#product = product;
        this.#numProduct = numProduct;
        this.#price = price;
        this.#amount = (price * numProduct).toFixed(2);
        this.#withIva = (this.#amount * this.#iva).toFixed(2);
    }

    print() {
        console.log("Invoice nº: ", this.#numInvoice);
        console.log("Product: ", this.#product);
        console.log("Units: ", this.#numProduct);
        console.log("Price: ", this.#price);
        console.log("Amount: ", this.#amount);
        console.log("With Iva: ", this.#withIva);
    }
}

const invoice1 = new Invoice(1, "Manzana", 10, 2);
invoice1.print();
const invoice2 = new Invoice(2, "Peras", 5, 1.5);
invoice2.print();

class Invoice {
    #numInvoice;
    #client = null;
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

    addClient(clientObj) {
        this.#client = clientObj;
    }

    print() {
        if (this.#client == null) {
            this.printError();
            return;
        }
        this.printInvoice();
    }

    printInvoice() {
        console.log("Invoice nº: ", this.#numInvoice);
        console.log("Cliente: ", this.#client.companyName);
        console.log("Product: ", this.#product);
        console.log("Units: ", this.#numProduct);
        console.log("Price: ", this.#price);
        console.log("Amount: ", this.#amount);
        console.log("With Iva: ", this.#withIva);
    }

    printError() {
        console.log("----------------------------------------------------");
        console.log("Debe asignar un cliente antes de imprimir la factura.");
        console.log("-----------------------------------------------------");
    }
}

class Company {
    nif;
    companyName;

    constructor(nif, company) {
        this.nif = nif;
        this.companyName = company;
    }
}

const invoice1 = new Invoice(1, "Manzana", 10, 2);
const company1 = new Company("2144A", "Empresa AA");
invoice1.addClient(company1);
invoice1.print();
const invoice2 = new Invoice(2, "Peras", 5, 1.5);
invoice2.print();

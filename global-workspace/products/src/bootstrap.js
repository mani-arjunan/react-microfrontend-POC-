import faker from 'faker'

function App(noOfProducts){
    this.productLength = noOfProducts
    this.totalProduct = ''
    this.products = []

    this.INIT()
}

App.prototype.INIT = function(){
    for(let i=0;i<this.productLength;i++){
        let tempProd = {}
        const prodName = tempProd.name = `<div>${faker.commerce.productName()}</div>`
        const prodDesc = tempProd.description = `<div>${faker.commerce.productDescription()}</div>`
        const prodPrice = tempProd.price = `<div>${faker.commerce.price()}</div>`
        this.products.push(tempProd)
        tempProd = {}
        this.totalProduct += `<div>${prodName + prodDesc + prodPrice}</div>`
    }
}

App.prototype.appendIntoDOM = function(node, elements){
    node.innerHTML = elements
}

const app = new App(3)

const mount = el => {
    app.appendIntoDOM(el, app.totalProduct)
}

// mount(document.getElementById('dev-products'))
export { mount }
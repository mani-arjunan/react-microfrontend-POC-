import Faker from 'faker'

const cartText = `<div>You have ${Faker.random.number()} items in your Cart</div>`

const mount = node => {
    node.innerHTML = cartText
}

// mount('dev-cart')

export { mount }
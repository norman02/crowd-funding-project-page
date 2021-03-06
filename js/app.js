const products = [
    {
        name: 'bamboo stand',
        pledge: 25,
        description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        stock: 101,
        inStock: true,
    },
    {
        name: 'black edition stand',
        pledge: 75,
        description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        stock: 64,
        inStock: true,
    },
    {
        name: 'mahogany special edition',
        pledge: 200,
        description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        stock: 0,
        inStock: false,
    }
]

const funding = {
    funding: 89914,
    backers: 5007,
    daysLeft: 56,
    neededFunds: 100000,
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const renderFunding = () => {
    const fundingElem = document.getElementById('total-raised')
    const backerElem = document.getElementById('backers')
    const daysElem = document.getElementById('days')
    const status = document.getElementById('status')

    fundingElem.innerHTML = `$${numberWithCommas(funding.funding)}`;
    backerElem.innerHTML = `${numberWithCommas(funding.backers)}`
    daysElem.innerHTML = `${numberWithCommas(funding.daysLeft)}`
    status.style.width = `${(funding.funding / funding.neededFunds) * 100}%`
}

const renderButton = (stock) => {
    if (stock > 0) {
        return (
            `<button class="btn btn--green">Select Reward</button>`
        )
    }
    return (
        `<button class="btn btn--out">Out of Stock</button>`
    )
    
}

const renderProducts = () => {
    const productElem = document.getElementById('products')

    productElem.innerHTML = products.map(product => {
        return (
            `<section class="card">
            <h2>${product.name}</h2>

            <p class="pledge-amt">$${product.pledge} or more</p>

            <p>${product.description}</p>

            <p>
                <span class="stock-remaining" id="bamboo-remaining">${product.stock}</span> left
            </p>

            ${renderButton(product.stock)}
            
            </section>`
        )


    }).join("")
}

const burger = document.getElementById('burger')
const menu = document.querySelector('.menu')
const mask = document.querySelector('.mask')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('change')
    menu.classList.toggle('active')
    mask.classList.toggle('active')
})

renderFunding()
renderProducts()
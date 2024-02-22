let shop = document.getElementById('shop')
// let itemData = [
//     {
//         _id: "gbh_1",
//         img: "./images/126822504_Stylish blue plaid shirt for men -7.jpg" class= "card-img-top",
//         name: "Stylish blue plaid shirt for men",
//         price: 12,
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//     },
//     {
//         _id: "gbh_2",
//         img: "./images/graphic-shirt-trendy-design-mockup.jpg",
//         name: "Graphic shirt trendy design",
//         price: 14,
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//     },
//     {
//         _id: "gbh_3",
//         img: "./images/portrait-female-legs-jeans.jpg",
//         name: "Portrait female legs jeans",
//         price: 3,
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//     },
//     {
//         _id: "gbh_4",
//         img: "./images/portrait-sexy-handsome-young-man-posing-studio-with-modern-curly-hairstyle.jpg",
//         name: "Morder styles shirt",
//         price: 4,
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//     },
// ]
let ItemAddInShop = () => {
    return (
        shop.innerHTML = `
    <div class="col-sm-12 col-md-6 col-lg-3 my-2">
            <div class="card" style="width: 18rem;">
                <img src="./images/126822504_Stylish blue plaid shirt for men -7.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="item_name">
                        <h5 class="card-title">Stylish blue plaid shirt for men</h5>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's
                        content.</p>
                    <div class="price_quantity d-flex align-items-center justify-content-between">
                        <h2>$ 3</h2>
                        <div class="inc_dec d-flex flex-row gap-2 fs-4 border">
                            <i class="bi bi-dash text-danger"></i>
                            <div class="qty">0</div>
                            <i class="bi bi-plus text-success"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
}

ItemAddInShop()
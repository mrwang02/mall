import { post, get } from "../index"


let data = {
    current: 1,
    size: 100
}

const allBrand = () => {
    return post('pms-brand/page', data)
}

const allProduct = () => {
    return post('pms-product/page', data)
}

export {
    allBrand,
    allProduct
}
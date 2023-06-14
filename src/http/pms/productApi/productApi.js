import { post, get } from "../index"

const BASE_URL = 'pms-product/'

const add = (data) => {
    return post(BASE_URL + 'add', data)
}


const edit = (data) => {
    return post(BASE_URL + 'edit', data)
}

const one = (params) => {
    return get(BASE_URL + 'one/' + params.id)
}

const page = (data) => {
    return post(BASE_URL + 'page', data)
}

const del = (params) => {
    return get(BASE_URL + 'del/' + params.id)
}

const allCategory = () => {
    const page = {
        current: 1,
        size: 1000
    }
    return post('pms-product-category/page',page)
}

const getProductsByCategoryId = (params) => {
    return get(BASE_URL + 'getProductsByCategoryId/' + params.categoryId)
}

export {
    edit,
    add,
    one,
    page,
    del,
    allCategory,
    getProductsByCategoryId
}
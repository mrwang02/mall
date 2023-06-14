<template>
    <div>
        <div class="text">
            <span>品牌</span>
        </div>
        <div class="div">
            <div class="brandDiv">
                <template v-for="brand in brandArr">
                    <ShopBrand :brand="brand"></ShopBrand>
                </template>
            </div>
        </div>
        <div class="text">
                <span>商品</span>
            </div>
        <div class="div">
            
            <div class="productDiv">
                <template v-for="pro in productArr">
                    <FirstProdcut :product="pro"></FirstProdcut>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import { allBrand, allProduct } from "@/http/pms/homeApi/homeApi"
import ShopBrand from "../../components/shopBrand.vue"
import FirstProdcut from "@/components/firstProduct.vue"
export default {
    mounted() {
        this.getBrand();
        this.getProduct();
    },
    data() {
        return {
            productArr: [],
            brandArr: []
        };
    },
    created() {
    },
    computed: {},
    methods: {
        getBrand() {
            allBrand().then(resp => {
                this.brandArr = resp.data.page.records;
            });
        },
        getProduct() {
            allProduct().then(resp => {
                this.productArr = resp.data.page.records;
            });
        }
    },
    components: { ShopBrand, FirstProdcut }
}
</script>
<style lang="scss" scoped>
.productDiv {
    margin-left: 30px;
    width: 1500px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-row-gap: 30px;
}

.brandDiv {
    margin-left: 30px;
    width: 1500px;
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 30px;
}

.text {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
}

.div {
    display: flex;
    justify-content: center;
}
</style>

<template>
    <div class="big">
        <div class="up">
            <div>
                <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" mode="horizontal" :router="true">
                    <el-menu-item index="/home/brand">
                        <el-icon><Sunrise /></el-icon>
                        品牌管理</el-menu-item>
                    <el-menu-item index="/home/product">
                        <el-icon><ChromeFilled /></el-icon>
                        商品管理</el-menu-item>
                    <el-menu-item index="/home/productAttribute">
                        <el-icon><Present /></el-icon>
                        商品属性管理</el-menu-item>
                    <el-menu-item index="/home/productAttributeCategory">
                        <el-icon><LocationInformation /></el-icon>
                        商品属性类别管理</el-menu-item>
                    <el-menu-item index="/home/productCategory">
                        <el-icon><Setting /></el-icon>
                        商品类别管理</el-menu-item>

                </el-menu>
            </div>
        </div>

        <div class="down">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: '/home/brand'
        }
    },
    methods: {
    },
}
</script>
<style  scoped>
.el-menu{
    display: flex;
    justify-content: space-around;
    background-color: rgba(0,191,255, 0.2);
}
.up {
    width: 100%;
    height: 18%;
    /* display: flex; */
    /* direction: rtl; */
}

.down {
    width: 100%;
    height: 80%;
    margin-top: 1%;
    overflow-y: auto;

}

.big {
    width: 100%;
    height: 100%;
    padding: 0px;
}
</style>

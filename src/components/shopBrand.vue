<template>
    <div class="big">
        <img class="img" :src="brand.logo"/>
        <div class="item name">
            <span>{{ brand.name }}</span>
        </div>

        <div class="item store">
            <span>{{ brand.brandStory }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: { brand: {} },
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
.store{
    font-size: 15px;
    color: gray;
}

.name{
    font-weight: bold;
    font-size: 20px;
}
.item{
    display: flex;
    padding: 8px 15px;
}

.img{
    width: 700px;
    height: 300px;
    border-radius: 10px;
}
.big{
    width: 700px;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
}
</style>

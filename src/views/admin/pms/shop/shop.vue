<template>
    <div>
        <div class="up">
            <!-- <el-button type="success" @click="doAdd()">新建</el-button> -->
        </div>

        <div class="down">
            <div class="ls">
                <ListView :data="data" :column="column" title="商品列表">
                    <slot>
                        <el-table-column label="图片" width="180">
                            <template #default="scope">
                                <img :src="scope.row.pic" style="width: 150px;height: 150px;" />
                            </template>
                        </el-table-column>

                        <el-table-column label="数量" width="200">
                            <template #default="scope" class="num">
                                <span class="ha" @click="doDel(scope.row)">-</span>
                                <span>{{ scope.row.num }}</span>
                                <span class="ha" @click="doAdd(scope.row)">+</span>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <div style="display: flex;justify-content: center;">
            <div class="money">
                <span>总计：</span>
                <span>￥{{ money }}</span>
            </div>
        </div>

    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del } from "@/http/pms/productApi/productApi";
import Msg from "@/utils/msg/msg"
export default {
    mounted() {
        this.column = this.buildColumn()
        this.all()
    },
    data() {
        return {
            data: [],
            column: [],
            visible: false,
            choiceId: 0,
            money: 0
        };
    },
    methods: {
        doAdd(row) {
            console.log('')
            this.money += row.price
            row.num += 1
        },
        doDel(row) {
            if (row.num > 0) {
                this.money -= row.price
                row.num -= 1
            }
        },
        //查询所有
        all() {
            let pageDto = {
                current: 1,
                size: 100
            }
            page(pageDto).then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.page.records
                this.data.forEach(item => {
                    item.num = 0
                });
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                // { prop: "pic", label: "图片", width: 100 },
                { prop: "name", label: "名称", width: 400 },
                { prop: "price", label: "价格", width: 100 },
            ];
        }
    },
    components: { ListView }
}
</script>
<style  scoped>
.ls {
    height: 700px;
    overflow-y: auto;
}

.num span {
    width: 30px;
    text-align: center;
    padding: 10px 10px;
}

.ha {
    background-color: yellow;
    padding: 10px 15px;
    margin: 0px 10px;
    border-radius: 30px;
}

.money {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 400px;
}

.money span {
    font-weight: bold;
    font-size: 20px;
}

.up {
    display: flex;
    justify-content: center;
}

.down {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100;
}
</style>

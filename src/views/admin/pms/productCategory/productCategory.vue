<template>
    <div>
        <div class="up">
            <el-button type="success" @click="doAdd()">新建</el-button>

            <el-button type="success" @click="last()">
                <el-icon>
                    <Back />
                </el-icon>
            </el-button>

            <el-button type="success" @click="next()">
                <el-icon>
                    <Right />
                </el-icon>
            </el-button>
        </div>

        <div class="down">
            <div>
                <ListView :data="data" :column="column" title="商品属性列表">
                    <slot>
                        <el-table-column label="分类级别" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.level == 0 ? '1级' : '2级' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="是否显示在导航栏" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.navStatus == 0 ? '不显示' : '显示' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="显示状态" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.showStatus == 0 ? '不显示' : '显示' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="图标" width="180">
                            <template #default="scope">
                                <img :src="scope.row.icon" style="width: 150px;height: 150px;"/>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" width="200">
                            <template #default="scope">
                                <el-button type="primary" @click="doEdit(scope.row.id)">编辑</el-button>
                                <el-button type="danger" @click="doDelete(scope.row.id)">删除</el-button>
                            </template>
                        </el-table-column>
                    </slot>
                </ListView>
            </div>
        </div>

        <el-dialog v-model="visible" v-if="visible" width="30%" title="商品属性信息">
            <ProductCategoryEdit :id="choiceId" @doCancel="doCancel"></ProductCategoryEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del } from "@/http/pms/productCategoryApi/productCategoryApi";
import Msg from "@/utils/msg/msg"
import ProductCategoryEdit from '../../../../components/pms/productCategoryEdit.vue';
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
            current: 1,
        };
    },
    methods: {
        //上一页
        last() {
            if (this.current > 1) {
                this.current -= 1
                this.all()
            }
        },
        //下一页
        next() {
            if (this.data.length > 0) {
                this.current += 1
                this.all()
            }
        },
        //编辑
        doEdit(id) {
            this.choiceId = id
            this.visible = true
            console.log('编辑的id:' + this.choiceId + '  visible:' + this.visible)
        },
        //新建
        doAdd() {
            console.log('触发了添加方法')
            this.choiceId = 0
            this.visible = true
        },
        //关闭弹窗
        doCancel() {
            this.visible = false
            this.all()
        },
        //删除
        doDelete(id) {
            console.log('删除的id:' + id)
            del({ id: id }).then(resp => {
                Msg.success('删除成功')
                this.all()
            })
        },
        //查询所有
        all() {
            let pageDto = {
                current: this.current,
                size: 5
            }
            page(pageDto).then(resp => {
                console.log('收到回复：' + JSON.stringify(resp.data))
                this.data = resp.data.page.records
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                { prop: "description", label: "描述", width: 100 },
                // { prop: "icon", label: "图标", width: 300 },
                { prop: "keywords", label: "关键字", width: 100 },
                { prop: "name", label: "名称", width: 100 },
                { prop: "parentId", label: "上级分类编号", width: 100 },
                { prop: "productCount", label: "产品数量", width: 100 },
                { prop: "productUnit", label: "产品单位", width: 100 },
                { prop: "sort", label: "排序", width: 100 },
            ];
        }
    },
    components: { ListView, ProductCategoryEdit }
}
</script>
<style  scoped>
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

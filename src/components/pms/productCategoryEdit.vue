<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="描述">
                <el-input v-model="entity.description" type="textarea" :rows="3"/>
            </el-form-item>
            <el-form-item label="图标">
                <el-input v-model="entity.icon" />
            </el-form-item>

            <el-form-item label="关键字">
                <el-input v-model="entity.keywords" />
            </el-form-item>

            <el-form-item label="名称">
                <el-input v-model="entity.level" />
            </el-form-item>

            <el-form-item label="产品数量">
                <el-input v-model="entity.productCount" />
            </el-form-item>

            <el-form-item label="产品单位">
                <el-input v-model="entity.productUnit" />
            </el-form-item>

            <el-form-item label="上级编号">
                <el-input v-model="entity.parentId" />
            </el-form-item>

            <el-form-item label="排序">
                <el-input v-model="entity.sort" />
            </el-form-item>

            <el-form-item label="分类级别">
                <el-select v-model="entity.level" placeholder="请选择">
                    <el-option v-for="item in levelArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="是否显示在导航栏">
                <el-select v-model="entity.navStatus" placeholder="请选择">
                    <el-option v-for="item in navStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="显示状态">
                <el-select v-model="entity.showStatus" placeholder="请选择">
                    <el-option v-for="item in showStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit } from "@/http/pms/productCategoryApi/productCategoryApi"
import Msg from "@/utils/msg/msg"
export default {
    props: { id: Number },
    mounted() {
        console.log('onMounted' + this.id)
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                description: '',
                icon: '',
                keywords: '',
                level: '',

                name: '',
                navStatus: '',
                parentId: 0,
                productCount: '',

                productUnit: '',
                showStatus: '',
                sort: 0,
            },
            enableArr: [
                { value: 0, label: '不是' },
                { value: 1, label: '是' }
            ],
            levelArr: [
                { value: 0, label: '1级' },
                { value: 1, label: '2级' }
            ],
            navStatusArr: [
                { value: 0, label: '不显示' },
                { value: 1, label: '显示' }
            ],
            showStatusArr: [
                { value: 0, label: '不显示' },
                { value: 1, label: '显示' }
            ],
        }
    },
    methods: {
        sure() {
            this.id == 0 ? this.add() : this.edit()
        },
        add() {
            add(this.entity).then(resp => {
                Msg.success('新建成功')
                this.doCancel()
            })
        },
        edit() {
            edit(this.entity).then(resp => {
                Msg.success('已保存')
                this.doCancel()
            })
        },
        doCancel() {
            this.$emit('doCancel')
        },
        get() {
            console.log('触发了get方法')
            if (this.id != 0) {
                one({ id: this.id }).then(resp => {
                    console.log('编辑收到的:' + JSON.stringify(resp))
                    this.entity = resp.data.help
                })
            }
        },
    },
}
</script>
<style  scoped>
.btnDiv {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>

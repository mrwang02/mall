<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="可选值列表">
                <el-input v-model="entity.inputList" />
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="entity.name" />
            </el-form-item>

            <el-form-item label="商品属性分类id">
                <el-input v-model="entity.productAttributeCategoryId" />
            </el-form-item>

            <el-form-item label="产品评论数量">
                <el-input v-model="entity.productCommentCount" />
            </el-form-item>

            <el-form-item label="产品数量">
                <el-input v-model="entity.productCount" />
            </el-form-item>


            <el-form-item label="展示情况">
                <el-input v-model="entity.showStatus" />
            </el-form-item>

            <el-form-item label="排序">
                <el-input v-model="entity.sort" />
            </el-form-item>

            <el-form-item label="分类筛选样式">
                <el-select v-model="entity.filterType" placeholder="请选择">
                    <el-option v-for="item in filterTypeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="是否支持手动新增">
                <el-select v-model="entity.handAddStatus" placeholder="请选择">
                    <el-option v-for="item in handAddStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="属性录入方式">
                <el-select v-model="entity.inputType" placeholder="请选择">
                    <el-option v-for="item in inputTypeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="相同属性是否相关联">
                <el-select v-model="entity.relatedStatus" placeholder="请选择">
                    <el-option v-for="item in relatedStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="检索类型">
                <el-select v-model="entity.searchType" placeholder="请选择">
                    <el-option v-for="item in searchTypeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="属性选择类型">
                <el-select v-model="entity.selectType" placeholder="请选择">
                    <el-option v-for="item in selectTypeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="属性类型">
                <el-select v-model="entity.type" placeholder="请选择">
                    <el-option v-for="item in typeArr" :key="item.value" :label="item.label" :value="item.value" />
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
import { one, add, edit } from "@/http/pms/productAttributeApi/productAttributeApi"
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
                inputList: '',
                name: '',
                productAttributeCategoryId: 0,
                sort: '',

                filterType: '',
                handAddStatus: '',
                inputType: 0,
                relatedStatus: '',

                searchType: '',
                selectType: '',
                type: 0,
            },
            enableArr: [
                { value: 0, label: '不是' },
                { value: 1, label: '是' }
            ],
            filterTypeArr: [
                { value: 0, label: '普通' },
                { value: 1, label: '颜色' }
            ],
            handAddStatusArr: [
                { value: 0, label: '不支持' },
                { value: 1, label: '支持' }
            ],
            inputTypeArr: [
                { value: 0, label: '手工录入' },
                { value: 1, label: '从列表中选取' }
            ],
            relatedStatusArr: [
                { value: 0, label: '不关联' },
                { value: 1, label: '关联' }
            ],
            searchTypeArr: [
                { value: 0, label: '不需要进行检索' },
                { value: 1, label: '关键字检索' },
                { value: 2, label: '范围检索' }
            ],
            selectTypeArr: [
                { value: 0, label: '唯一' },
                { value: 1, label: '单选' },
                { value: 2, label: '多选' }
            ],
            typeArr: [
                { value: 0, label: '规格' },
                { value: 1, label: '参数' }
            ]
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

<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="专区大图">
                <el-input v-model="entity.bigPic" />
            </el-form-item>
            <el-form-item label="品牌故事">
                <el-input v-model="entity.brandStory" />
            </el-form-item>

            <el-form-item label="是否为品牌制造商">
                <el-select v-model="entity.factoryStatus" placeholder="请选择">
                    <el-option v-for="item in enableArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="首字母">
                <el-input v-model="entity.firstLetter" />
            </el-form-item>

            <el-form-item label="LOGO">
                <el-input v-model="entity.logo" />
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

            <el-form-item label="名称">
                <el-input v-model="entity.name" />
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit } from "@/http/pms/brandApi/brandApi"
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
                bigPic: '',
                brandStory: '',
                factoryStatus: 0,
                firstLetter: '',
                logo: '',
                name: '',
                productCommentCount: 0,
                productCount: 0,
                showStatus: '',
                sort: '',
            },
            enableArr: [
                { value: 0, label: '不是' },
                { value: 1, label: '是' }
            ]
        }
    },
    methods: {
        sure() {
            this.id == 0 ? this.add() : this.edit()
        },
        add() {
            console.log('添加的:' + JSON.stringify(this.entity))
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

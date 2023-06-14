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
                <ListView :data="data" :column="column" title="品牌列表">
                    <slot>
                        <el-table-column label="是否为品牌制造商" width="120">
                            <template #default="scope">
                                <span>{{ scope.row.factoryStatus == 0 ? '不是' : '是' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="专区大图" width="180">
                            <template #default="scope">
                                <img :src="scope.row.bigPic" style="width: 150px;height: 150px;" />
                            </template>
                        </el-table-column>

                        <el-table-column label="品牌logo" width="180">
                            <template #default="scope">
                                <img :src="scope.row.logo" style="width: 150px;height: 150px;" />
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

        <el-dialog v-model="visible" v-if="visible" width="30%" title="品牌信息">
            <BrandEdit :id="choiceId" @doCancel="doCancel"></BrandEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del } from "@/http/pms/brandApi/brandApi";
import Msg from "@/utils/msg/msg"
import BrandEdit from '../../../../components/pms/brandEdit.vue';
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
                // { prop: "bigPic", label: "专区大图", width: 300 },
                { prop: "brandStory", label: "品牌故事", width: 500 },
                { prop: "firstLetter", label: "首字母", width: 100 },
                // { prop: "logo", label: "品牌logo", width: 200 },
                { prop: "name", label: "名称", width: 70 },
                { prop: "productCommentCount", label: "产品评论数量", width: 80 },
                { prop: "productCount", label: "产品数量", width: 80 },
            ];
        }
    },
    components: { ListView, BrandEdit }
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
}</style>

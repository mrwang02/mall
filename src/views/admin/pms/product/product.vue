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

            <span>分类</span>
            <el-select v-model="queryEntity.categoryId" placeholder="请选择">
                <el-option v-for="item in categoryArr" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
            <el-button type="success" @click="query()">查询</el-button>
        </div>

        <div class="down">
            <div>
                <ListView :data="data" :column="column" title="商品列表">
                    <slot>
                        <el-table-column label="删除状态" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.deleteStatus == 0 ? '未删除' : '已删除' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="新品状态" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.newStatus == 0 ? '不是新品' : '是新品' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="是否为预告商品" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.previewStatus == 0 ? '不是' : '是' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="促销类型" width="80">
                            <template #default="scope">
                                <span v-if="scope.row.promotionType == 0">没有促销使用原价</span>
                                <span v-else-if="scope.row.promotionType == 1">使用促销价</span>
                                <span v-else-if="scope.row.promotionType == 2">使用会员价</span>
                                <span v-else-if="scope.row.promotionType == 3">使用阶梯价格</span>
                                <span v-else-if="scope.row.promotionType == 4">使用满减价格</span>
                                <span v-else>限时购</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="上架状态" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.publishStatus == 0 ? '下架' : '上架' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="推荐状态" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.recommandStatus == 0 ? '不推荐' : '推荐' }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="图片" width="180">
                            <template #default="scope">
                                <img :src="scope.row.pic" style="width: 150px;height: 150px;" />
                            </template>
                        </el-table-column>
                        <el-table-column label="画册图片" width="180">
                            <template #default="scope">
                                <img :src="scope.row.albumPics" style="width: 150px;height: 150px;" />
                            </template>
                        </el-table-column>
                        <el-table-column label="产品服务" width="80">
                            <template #default="scope">
                                <span v-if="scope.row.serviceIds == 0">无忧退货</span>
                                <span v-else-if="scope.row.serviceIds == 1">快速退款</span>
                                <span v-else>免费包邮</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="审核状态" width="80">
                            <template #default="scope">
                                <span>{{ scope.row.verifyStatus == 0 ? '未审核' : '审核通过' }}</span>
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

        <el-dialog v-model="visible" v-if="visible" width="30%" title="商品信息">
            <ProductEdit :id="choiceId" @doCancel="doCancel"></ProductEdit>
        </el-dialog>
    </div>
</template>
<script>
import ListView from '@/components/list-view/list-view.vue';
import { page, del, allCategory,getProductsByCategoryId } from "@/http/pms/productApi/productApi";
import Msg from "@/utils/msg/msg"
import ProductEdit from '../../../../components/pms/productEdit.vue';
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
            categoryArr: [],
            queryEntity: {
                categoryId:0
            }
        };
    },
    methods: {
        query() {
            console.log('分类id:' + this.queryEntity.categoryId)
            getProductsByCategoryId(this.queryEntity).then(resp=>{
                console.log('按照分类查询:' + JSON.stringify(resp))
                this.data = resp.msg == '没有数据' ? [] : resp.data.page.records 
            })
        },
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

            allCategory().then(resp => {
                console.log('allCategory收到回复：' + JSON.stringify(resp.data))
                this.categoryArr = resp.data.page.records
            })
        },
        //规定列表每列名称和显示的属性
        buildColumn() {
            return [
                { prop: "id", label: "编号", width: 100 },
                // { prop: "albumPics", label: "相册图片", width: 100 },
                { prop: "brandId", label: "品牌id", width: 100 },
                { prop: "brandName", label: "品牌名称", width: 100 },
                { prop: "description", label: "商品描述", width: 100 },
                { prop: "detailDesc", label: "详情描述", width: 100 },
                // { prop: "detailHtml", label: "产品详情网页内容", width: 400 },
                // { prop: "detailMobileHtml", label: "移动端网页详情", width: 400 },

                { prop: "detailTitle", label: "详情标题", width: 100 },
                { prop: "feightTemplateId", label: "运费模板id", width: 100 },
                { prop: "giftGrowth", label: "赠送的成长值", width: 100 },
                { prop: "giftPoint", label: "赠送的积分", width: 100 },
                { prop: "keywords", label: "关键字", width: 100 },
                { prop: "lowStock", label: "库存预警值", width: 100 },
                { prop: "name", label: "名称", width: 200 },
                { prop: "note", label: "笔记", width: 100 },

                { prop: "originalPrice", label: "市场价", width: 100 },
                // { prop: "pic", label: "图片", width: 100 },
                { prop: "price", label: "价格", width: 100 },
                { prop: "productAttributeCategoryId", label: "产品属性分类id", width: 100 },
                // { prop: "productCategoryId", label: "产品分类id", width: 100 },
                { prop: "productCategoryName", label: "产品分类名称", width: 100 },
                { prop: "productSn", label: "货号", width: 100 },
                { prop: "promotionEndTime", label: "促销结束时间", width: 100 },

                { prop: "promotionPerLimit", label: "活动限购数量", width: 100 },
                { prop: "promotionPrice", label: "促销价格", width: 100 },
                { prop: "promotionStartTime", label: "促销开始时间", width: 100 },
                { prop: "sale", label: "销量", width: 100 },
                { prop: "sort", label: "排序", width: 100 },
                { prop: "stock", label: "库存", width: 100 },
                { prop: "subTitle", label: "副标题", width: 220 },
                { prop: "unit", label: "单位", width: 100 },
                { prop: "usePointLimit", label: "限制使用的积分数", width: 100 },
                { prop: "weight", label: "重量（g）", width: 100 },
            ];
        }
    },
    components: { ListView, ProductEdit }
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
    overflow-x: auto;
}
</style>

<template>
    <div>
        <el-form :model="entity" label-width="120px">
            <el-form-item label="画册图片">
                <el-input v-model="entity.albumPics" />
            </el-form-item>
            <el-form-item label="品牌id">
                <el-input v-model="entity.brandId" />
            </el-form-item>
            <el-form-item label="品牌名称">
                <el-input v-model="entity.brandName" />
            </el-form-item>
            <el-form-item label="删除状态">
                <el-select v-model="entity.deleteStatus" placeholder="请选择">
                    <el-option v-for="item in deleteStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="entity.description" type="textarea" :rows="3"/>
            </el-form-item>
            <el-form-item label="详情描述">
                <el-input v-model="entity.detailDesc" />
            </el-form-item>

            <el-form-item label="产品详情网页内容">
                <el-input v-model="entity.detailHtml" />
            </el-form-item>
            <el-form-item label="移动端网页详情">
                <el-input v-model="entity.detailMobileHtml" />
            </el-form-item>
            <el-form-item label="详情标题">
                <el-input v-model="entity.detailTitle" />
            </el-form-item>
            <el-form-item label="运费模板id">
                <el-input v-model="entity.feightTemplateId" />
            </el-form-item>
            <el-form-item label="赠送的成长值">
                <el-input v-model="entity.giftGrowth" />
            </el-form-item>
            <el-form-item label="赠送的积分">
                <el-input v-model="entity.giftPoint" />
            </el-form-item>


            <el-form-item label="关键字">
                <el-input v-model="entity.keywords" />
            </el-form-item>
            <el-form-item label="库存预警值">
                <el-input v-model="entity.lowStock" />
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="entity.name" />
            </el-form-item>
            <el-form-item label="新品状态">
                <el-select v-model="entity.newStatus" placeholder="请选择">
                    <el-option v-for="item in newStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="笔记">
                <el-input v-model="entity.note" />
            </el-form-item>
            <el-form-item label="市场价">
                <el-input v-model="entity.originalPrice" />
            </el-form-item>
            <el-form-item label="图片">
                <el-input v-model="entity.pic" />
            </el-form-item>

            <el-form-item label="是否为预告商品">
                <el-select v-model="entity.previewStatus" placeholder="请选择">
                    <el-option v-for="item in previewStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="entity.price" />
            </el-form-item>
            <el-form-item label="产品属性分类id">
                <el-input v-model="entity.productAttributeCategoryId" />
            </el-form-item>
            <el-form-item label="产品分类id">
                <el-input v-model="entity.productCategoryId" />
            </el-form-item>
            <el-form-item label="产品分类名称">
                <el-input v-model="entity.productCategoryName" />
            </el-form-item>
            <el-form-item label="货号">
                <el-input v-model="entity.productSn" />
            </el-form-item>
            <el-form-item label="促销结束时间">
                <el-input v-model="entity.promotionEndTime" />
            </el-form-item>

            <el-form-item label="活动限购数量">
                <el-input v-model="entity.promotionPerLimit" />
            </el-form-item>
            <el-form-item label="促销价格">
                <el-input v-model="entity.promotionPrice" />
            </el-form-item>
            <el-form-item label="促销开始时间">
                <el-input v-model="entity.promotionStartTime" />
            </el-form-item>
            <el-form-item label="促销类型">
                <el-select v-model="entity.promotionType" placeholder="请选择">
                    <el-option v-for="item in promotionTypeArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="上架状态">
                <el-select v-model="entity.publishStatus" placeholder="请选择">
                    <el-option v-for="item in publishStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="推荐状态">
                <el-select v-model="entity.recommandStatus" placeholder="请选择">
                    <el-option v-for="item in recommandStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item label="销量">
                <el-input v-model="entity.sale" />
            </el-form-item>
            <el-form-item label="产品服务">
                <el-select v-model="entity.serviceIds" placeholder="请选择">
                    <el-option v-for="item in serviceIdsArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="展示情况">
                <el-input v-model="entity.showStatus" />
            </el-form-item>
            <el-form-item label="排序">
                <el-input v-model="entity.sort" />
            </el-form-item>
            
            <el-form-item label="库存">
                <el-input v-model="entity.stock" />
            </el-form-item>
            <el-form-item label="副标题">
                <el-input v-model="entity.subTitle" />
            </el-form-item>
            
            <el-form-item label="单位">
                <el-input v-model="entity.unit" />
            </el-form-item>
            <el-form-item label="限制使用的积分数">
                <el-input v-model="entity.usePointLimit" />
            </el-form-item>

            <el-form-item label="审核状态">
                <el-select v-model="entity.verifyStatus" placeholder="请选择">
                    <el-option v-for="item in verifyStatusArr" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>

            <el-form-item label="重量">
                <el-input v-model="entity.weight" />
            </el-form-item>
        </el-form>

        <div class="btnDiv">
            <el-button type="primary" @click="sure">确定</el-button>
            <el-button @click="doCancel">取消</el-button>
        </div>
    </div>
</template>
<script>
import { one, add, edit } from "@/http/pms/productApi/productApi"
import Msg from "@/utils/msg/msg"
export default {
    props: { id: Number },
    mounted() {
        console.log('mounted' + this.id)
        this.get()
    },
    data() {
        return {
            entity: {
                id: 0,
                albumPics: '',
                brandId: '',
                brandName: '',
                deleteStatus: '',
                description: '',
                detailDesc: '',
                detailHtml: '',

                detailMobileHtml: '',
                detailMobileHtml: '',
                feightTemplateId: '',
                giftGrowth: '',
                giftPoint: '',
                keywords: '',
                lowStock: '',

                name: '',
                newStatus: '',
                note: '',
                originalPrice: '',
                pic: '',
                previewStatus: '',
                price: '',

                productAttributeCategoryId: '',
                productCategoryId: '',
                productCategoryName: '',
                productSn: '',
                promotionEndTime: '',
                promotionPerLimit: '',
                promotionPrice: '',

                promotionStartTime: '',
                promotionType: '',
                publishStatus: '',
                recommandStatus: '',
                sale: '',
                serviceIds: '',
                sort: '',

                stock: '',
                subTitle: '',
                unit: '',
                usePointLimit: '',
                verifyStatus: '',
                weight: '',
            },
            enableArr: [
                { value: 0, label: '按重量' },
                { value: 1, label: '按件数' }
            ],
            deleteStatusArr: [
                { value: 0, label: '未删除' },
                { value: 1, label: '已删除' }
            ],
            newStatusArr: [
                { value: 0, label: '不是新品' },
                { value: 1, label: '新品' }
            ],
            previewStatusArr: [
                { value: 0, label: '不是' },
                { value: 1, label: '是' }
            ],
            promotionTypeArr: [
                { value: 0, label: '没有促销使用原价' },
                { value: 1, label: '使用促销价' },
                { value: 2, label: '使用会员价' },
                { value: 3, label: '使用阶梯价格' },
                { value: 4, label: '使用满减价格' },
                { value: 5, label: '限时购' },
            ],
            publishStatusArr: [
                { value: 0, label: '下架' },
                { value: 1, label: '商家' }
            ],
            recommandStatusArr: [
                { value: 0, label: '不推荐' },
                { value: 1, label: '推荐' }
            ],
            serviceIdsArr: [
                { value: 1, label: '无忧退货' },
                { value: 2, label: '快速退款' },
                { value: 3, label: '免费包邮' },
            ],
            verifyStatusArr: [
                { value: 0, label: '未审核' },
                { value: 1, label: '审核通过' }
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

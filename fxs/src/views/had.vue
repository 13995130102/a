<template>
    <div>
        <div class="header">
            <van-nav-bar title>
                <template #left>
                    <img style="height:36px;" src="/image/logo.png" alt />
                </template>
                <template #right style>
                    <p class="left" style="height:46px;width24px; display:flex; ">
                        <van-icon name="friends-o" size="20" />
                        <span>我的</span>
                    </p>
                    <p class="right" style="height:46px;">
                        <van-icon name="wap-nav" size="20" />
                        <span>导航 </span>
                        
                    </p>
                </template>
            </van-nav-bar>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
.header {
        width: 100%;
        position: relative;
        .left {
            width: 46px;
             position: relative;
            display: flex;
            align-items: center;
            text-align: center;
            position: absolute;
            left: 0px;
            position: relative;
            .van-icon {
                position: absolute;
                top: 6px;
                left: 8px;
                color: #999999;
            }
            span {
                width: 36px;
                position: absolute;
                bottom: 0px;
                font-size: 13px;
                color: #999999;
            }
        }
        .right {
            width: 46px;
            position: absolute;
            left: 0px;
            position: relative;
            display: flex;
            align-items: center;
            text-align: center;
            .van-icon {
                position: absolute;
                top: 6px;
                left: 8px;
                color: #999999;
            }
            span {
                width: 36px;
                position: absolute;
                bottom: 0px;
                left: 0px;
                font-size: 13px;
                color: #999999;
            }
        }
}

</style >

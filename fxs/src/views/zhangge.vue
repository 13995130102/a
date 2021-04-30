<template>
    <div class="wrapper">
        <had />
        <div class="box">
            <div class="banner">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img :src="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="GongGe">
                <van-grid :gutter="10">
                    <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
                </van-grid>
            </div>
            <div class="ZuangXiu" style="margin-top:10px;">
                <span>全屋装修</span>
                <ul>
                    <li>包设计、</li>
                    <li>包主材、</li>
                    <li>包水电、</li>
                    <li>包施工、</li>
                </ul>
            </div>
            <div class="banner2">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in imag" :key="index">
                        <img :src="image" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="navbar">
                <ul
                    style="display:flex;justify-content: space-around;align-items:center;height:60px;"
                >
                    <li style="font-size:14px; display:flex;align-items:center;">
                        <img style="width:26px;height:26px;border-radius: 50%;" src="/image/1.png" />增项,标准施工
                    </li>
                    <li style="font-size:14px;display:flex;align-items:center;">
                        <img style="width:26px;height:26px;border-radius: 50%;" src="/image/1.png" />杜绝项目外包
                    </li>
                    <li style="font-size:14px;display:flex;align-items:center;">
                        <img style="width:26px;height:26px;border-radius: 50%;" src="/image/1.png" />装修贷款
                    </li>
                </ul>
            </div>
            <div class="ZuangXiu" style="margin-top:10px;">
                <span>装修预约</span>
                <ul>
                    <li>免费上门量房,</li>
                    <li>设计方案</li>
                </ul>
            </div>
            <van-form style="text-align: center;">
                <!-- 通过 pattern 进行正则校验 -->
                <van-field style="width:80%;" v-model="value1" placeholder="小区名" />
                <!-- 通过 validator 进行函数校验 -->
                <van-field style="width:80%;" v-model="value2" placeholder="手机号" />
                <!-- 通过 validator 进行异步函数校验 -->
                <van-field style="width:80%;" v-model="value3" placeholder="建筑面积" />
                <div style="margin: 16px;">
                    <van-button block color="#eed215" native-type="submit">提交</van-button>
                </div>
            </van-form>
            <p style></p>
            <div class="ZuangXiu" style="margin-top:10px;">
                <p>设计师</p>
            </div>
            <div class="box1">
                <div class="conert">
                    <img src="/image/1.png" alt />
                    <p>吴飞柯</p>
                    <p>
                        <van-button type="primary" size="mini">优秀</van-button>
                    </p>
                </div>
                <div class="conert">
                    <img src="/image/1.png" alt />
                    <p>吴飞柯</p>
                    <p>
                        <van-button type="primary" size="mini">优秀</van-button>
                    </p>
                </div>
                <div class="conert">
                    <img src="/image/1.png" alt />
                    <p>吴飞柯</p>
                    <p>
                        <van-button type="primary" size="mini">优秀</van-button>
                    </p>
                </div>
                <div class="conert">
                    <img src="/image/1.png" alt />
                    <p>吴飞柯</p>
                    <p>
                        <van-button type="primary" size="mini">优秀</van-button>
                    </p>
                </div>
            </div>
            <div class="btn" style="width:100%;text-align: center; ">
                <van-button style="width:50%;">
                    换一换
                    <van-icon name="replay" color="#2bb281" size="16" />
                </van-button>
                <van-button style="width:50%;color: #2bb281;">
                    更多设计师
                    <van-icon name="arrow" size="16" color="#2bb281" />
                </van-button>
            </div>
            <div class="ZuangXiu">
                <p>效果图</p>
            </div>
            <div class="tu">
                <img style="width:100%;" src="/banner/banner.jpg" alt />
                <div class="tue">
                    <img src="/banner/banner2.jpg" alt />
                    <img src="/banner/banner3.jpg" alt />
                    <img src="/banner/banner3.jpg" alt />
                    <img src="/banner/banner3.jpg" alt />
                </div>
            </div>
            <div class="btn" style="width:100%;text-align: center;color: #2bb281;">
                <van-button style="width:50%; color: #2bb281;">
                    换一换
                    <van-icon name="replay" size="16" color="#2bb281" />
                </van-button>
                <van-button style="width:50%; color: #2bb281;">
                    更多效果图
                    <van-icon name="arrow" size="16" color="#2bb281" />
                </van-button>
            </div>
            <div class="ZuangXiu">
                <p>工地直播</p>
            </div>
            <div class="mytu">
                <img src="/banner/banner1.jpg" alt />
                <p>
                    <span>重汽嘉泽苑7栋</span>
                    <van-button type="primary" size="mini">泥木工程</van-button>
                </p>
            </div>
            <div class="ZuangXiu" style="margin-top:10px;color: #2bb281;">
                <p style="padding-top:10px;">装修攻略</p>
            </div>
            <van-card>
                <template #thumb>
                    <img style="width:80px;height:60px;" src="/banner/banner.jpg" alt />
                </template>
                <template #desc>
                    <p
                        style="width:80%;margin-top:25px;display: flex;align-items: center; color:#ccc; justify-content: space-around;"
                    >
                        <span>
                            <van-icon name="clock-o" />2016-07-07
                        </span>
                        <span>
                            <van-icon name="eye-o" />115
                        </span>
                    </p>
                </template>
                <template #title>
                    <strong>房子交付要验房，验房师是做什么的？</strong>
                </template>
            </van-card>
            <van-card>
                <template #thumb>
                    <img style="width:80px;height:60px;" src="/banner/banner.jpg" alt />
                </template>
                <template #desc>
                    <p
                        style="width:80%;margin-top:25px;display: flex;align-items: center; color:#ccc; justify-content: space-around;"
                    >
                        <span>
                            <van-icon name="clock-o" />2016-07-07
                        </span>
                        <span>
                            <van-icon name="eye-o" />115
                        </span>
                    </p>
                </template>
                <template #title>
                    <strong>能让您涨工资的家居风水！</strong>
                </template>
            </van-card>
            <van-card>
                <template #thumb>
                    <img style="width:80px;height:60px;" src="/banner/banner.jpg" alt />
                </template>
                <template #desc>
                    <p
                        style="width:80%;margin-top:25px;display: flex;align-items: center; color:#ccc; justify-content: space-around;"
                    >
                        <span>
                            <van-icon name="clock-o" />2016-07-07
                        </span>
                        <span>
                            <van-icon name="eye-o" />115
                        </span>
                    </p>
                </template>
                <template #title>
                    <strong>遇到有这样的房子的男人就嫁了吧</strong>
                </template>
            </van-card>
            <div class="btn" style="width:100%;text-align: center;color: #2bb281;">
                <van-button style="width:50%; color:#2bb281;">
                    换一换
                    <van-icon name="replay" size="16" color="#2bb281" />
                </van-button>
                <van-button style="width:50%; color:#2bb281;">
                    更多效装修攻略
                    <van-icon name="arrow" size="16" color="#2bb281" />
                </van-button>
            </div>
            <div class="strle">
                <p>
                    kjghvhfhjcfgdhfjhfgdhnggbdhtnfbshnsgdga
                    fjyhgbdgfsghdgfsxhcgbsrgfjhdgbsnhdgfabsndszdbfsdxzdbdngbfshds
                    asdfghjdsfgrhukkjjjjjjjjjjjjjjjjjjjjjjjjjjjjhhhfth
                    fjyhgbdgfsghdg fsxhcgbsrgfjhdgbsnhdgfabsndszdbfsdxzdbdngbfshdsgh
                    1221fh1233gfh工业化怒家门口，gfhgffgh啥地方规划啥地方规划大V
                    23456789098765435678
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import had from "./had"
export default {
    components:{
        had,
    },
    data() {
        return {
            images: [
                '/banner/banner.jpg',
                '/banner/banner1.jpg',
                '/banner/banner2.jpg',
                '/banner/banner3.jpg',
            ],
            imag: [
                '/banner/img1.jpg',
                '/banner/house_info.jpg'
            ],
            value1: '',
            value2: '',
            value3: '',

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
.strle {
    width: 100%;
    height: 200px;

    p {
        margin-top: 10px;
        width: 100%;
        overflow: hidden;
        text-indent: 50px;
    }
}

* {
    margin: 0;
    padding: 0;
}
.wrapper {
    width: 100%;
    height: 100%;
    
    .box {
        width: 100%;
        height: 100%;
        .banner {
            width: 100%;
            height: 156px;
            img {
                width: 100%;
                height: 156px;
            }
        }
        .banner2 {
            width: 100%;
            height: 200px;
            position: relative;
            img {
                width: 100%;
                height: 200px;
            }
        }
        .ZuangXiu {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            padding-left: 10px;
            box-sizing: border-box;
            clear: both;

            p {
                font-size: 20px;
                width: 100%;
                display: flex;
                align-items: center;
            }
            span {
                font-weight: bold;
                font-size: 16px;
                line-height: 40px;
                // border-left: 5px solid #444444;
            }
            ul {
                // width: 190px;
                padding-left: 10px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                li {
                    font-size: 10px;
                    color: #999999;
                }
            }
        }
    }
    .box1 {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .conert {
            text-align: center;
            margin-top: 40px;
            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            .van-button {
                width: 100%;
            }
        }
    }
    .tu {
        width: 100%;
        height: 300px;
        margin-top: 15px;
        .tue {
            width: 100%;
            height: 200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            img {
                margin-top: 5px;
                width: 48%;
            }
        }
    }
    .mytu {
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 200px;
        img {
            width: 100%;
            height: 180px;
        }
        p {
            width: 50%;
            display: flex;

            justify-content: space-around;

            span {
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
    /deep/.van-card {
        width: 100%;
        height: 72px;
        padding-bottom: 5px;
        clear: both;
        border-bottom: 1px solid #ccc;
    }
}
</style >

<template>
    <div>
    <dv-scroll-ranking-board :config="cfg" :style="styleObj" />
    </div>
</template>
<script>
    export default {
        name: "widgetRankingBoard",
        components: {},
        props: {
            value: Object,
            ispreview: Boolean
        },
        data() {
            return {
                optionsStyle: {}, // 样式
                optionsData: {}, // 数据
                optionsSetup: {}, // 属性
                data: []
            };
        },
        computed: {
            styleObj() {
                return {
                    position: this.ispreview ? "absolute" : "static",
                    width: this.optionsStyle.width + "px",
                    height: this.optionsStyle.height + "px",
                    left: this.optionsStyle.left + "px",
                    top: this.optionsStyle.top + "px"
                };
            },
            cfg() {
                return {
                    rowNum: this.optionsSetup.rowNum,
                    waitTime: this.optionsSetup.waitTime,
                    data: this.data
                }
            }
        },
        mounted() {
            this.optionsStyle = this.value.position;
            this.optionsData = this.value.data;
            this.optionsSetup = this.value.setup;
            this.editorOptions();
        },
        watch: {
            value: {
                handler(val) {
                    this.optionsStyle = val.position;
                    this.optionsData = val.data;
                    this.optionsSetup = val.setup;
                    this.editorOptions();
                },
                deep: true
            }
        },
        methods: {
            // 修改图标options属性
            editorOptions() {
                this.setOptionsData();
            },
            setOptionsData() {
                const optionsData = this.optionsData; // 数据类型 静态 or 动态
                optionsData.dataType == "staticData"
                    ? this.staticDataFn(optionsData.staticData)
                    : this.dynamicDataFn(optionsData.dynamicData, optionsData.refreshTime);
            },
            staticDataFn(val) {
                const staticData = typeof val == "string" ? JSON.parse(val) : val;
                this.data = staticData;
            },
            dynamicDataFn(val, refreshTime) {
                if (!val) return;
                if (this.ispreview) {
                    this.getEchartData(val);
                    this.flagInter = setInterval(() => {
                        this.getEchartData(val);
                    }, refreshTime);
                } else {
                    this.getEchartData(val);
                }
            },
            getEchartData(val) {
                const data = this.queryEchartsData(val);
                data.then(res => {
                    this.renderingFn(res);
                });
            },
            renderingFn(val) {
                this.data = val;
            }
        }
    }
</script>


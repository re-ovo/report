<template>
    <dv-active-ring-chart :config="test" :style="styleObj" />
</template>

<script>
    export default {
        name: 'widgetRingChart',
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
                data: [],
                test: {
                    data: [
                        {
                            name: 'Google', value: 95.8
                        },
                        {
                            name: 'Baidu', value: 94.3
                        },
                        {
                            name: 'SoSo', value: 90.3
                        },
                        {
                            name: '360', value: 80.3
                        },
                        {
                            name: 'Other', value: 70.3
                        }
                    ]
                }
            }
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
                    data: this.data,
                    showOriginValue: this.optionsSetup.showOriginValue,
                    radius: this.optionsSetup.radius,
                    activeRadius: this.optionsSetup.activeRadius,
                    lineWidth: 20,
                    activeTimeGap: 2000,
                    color: ["#FFB800", "#FF4D4F", "#1890FF", "#13C2C2", "#2FC25B", "#FACC14", "#8543E0", "#F04864"],
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
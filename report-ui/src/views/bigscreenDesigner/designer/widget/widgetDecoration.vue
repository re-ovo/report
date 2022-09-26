<template>
    <component :is="options.setup.decorationType" :style="styleColor">

    </component>
</template>

<script>
export default {
    name: "WidgetDecoration",
    components: {},
    props: {
        value: Object,
        ispreview: Boolean
    },
    data() {
        return {
            options: {
                setup: {
                  decorationType: 'dv-decoration-1'
                }
            }
        };
    },
    computed: {
        transStyle() {
            return this.objToOne(this.options);
        },
        styleColor() {
            return {
                position: this.ispreview ? "absolute" : "static",
                width: this.transStyle.width + "px",
                height: this.transStyle.height + "px",
                left: this.transStyle.left + "px",
                top: this.transStyle.top + "px",
                right: this.transStyle.right + "px"
            };
        }
    },
    watch: {
        value: {
            handler(val) {
                this.options = val;
            },
            deep: true
        }
    },
    mounted() {
        this.options = this.value;
    }
}
</script>

<style scoped>

</style>
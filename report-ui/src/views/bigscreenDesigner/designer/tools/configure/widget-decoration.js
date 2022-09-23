export const widgetDecoration = {
    code: 'widget-decoration',
    type: 'html',
    label: '装饰',
    icon: 'icongexingzhuangban',
    options: {
        setup: [
            {
                type: 'el-select',
                label: '装饰类型',
                name: 'decorationType',
                required: false,
                value: 'dv-decoration-1',
                selectOptions: [
                    { code: 'dv-decoration-1', label: '装饰1' },
                    { code: 'dv-decoration-2', label: '装饰2' },
                    { code: 'dv-decoration-3', label: '装饰3' },
                    { code: 'dv-decoration-4', label: '装饰4' },
                    { code: 'dv-decoration-5', label: '装饰5' },
                    { code: 'dv-decoration-6', label: '装饰6' },
                    { code: 'dv-decoration-7', label: '装饰7' },
                    { code: 'dv-decoration-8', label: '装饰8' },
                    { code: 'dv-decoration-9', label: '装饰9' },
                    { code: 'dv-decoration-10', label: '装饰10' },
                    { code: 'dv-decoration-11', label: '装饰11' },
                    { code: 'dv-decoration-12', label: '装饰12' },
                ],
            }
        ],
        data: [],
        // 坐标
        position: [
            {
                type: 'el-input-number',
                label: '左边距',
                name: 'left',
                required: false,
                placeholder: '',
                value: 0,
            },
            {
                type: 'el-input-number',
                label: '上边距',
                name: 'top',
                required: false,
                placeholder: '',
                value: 0,
            },
            {
                type: 'el-input-number',
                label: '宽度',
                name: 'width',
                required: false,
                placeholder: '该容器在1920px大屏中的宽度',
                value: 300,
            },
            {
                type: 'el-input-number',
                label: '高度',
                name: 'height',
                required: false,
                placeholder: '该容器在1080px大屏中的高度',
                value: 200,
            },
        ]
    }
}
export const widgetBorder = {
    code: 'widget-border',
    type: 'html',
    label: '边框',
    icon: 'iconrizhi',
    options: {
        setup: [
            {
                type: 'el-select',
                label: '边框类型',
                name: 'borderType',
                required: false,
                value: 'dv-border-box-1',
                selectOptions: [
                    { code: 'dv-border-box-1', label: '边框1' },
                    { code: 'dv-border-box-2', label: '边框2' },
                    { code: 'dv-border-box-3', label: '边框3' },
                    { code: 'dv-border-box-4', label: '边框4' },
                    { code: 'dv-border-box-5', label: '边框5' },
                    { code: 'dv-border-box-6', label: '边框6' },
                    { code: 'dv-border-box-7', label: '边框7' },
                    { code: 'dv-border-box-8', label: '边框8' },
                    { code: 'dv-border-box-9', label: '边框9' },
                    { code: 'dv-border-box-10', label: '边框10' },
                    { code: 'dv-border-box-11', label: '边框11' },
                    { code: 'dv-border-box-12', label: '边框12' },
                    { code: 'dv-border-box-13', label: '边框13' }
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
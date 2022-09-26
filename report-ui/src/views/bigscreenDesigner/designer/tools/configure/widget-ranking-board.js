export const widgetRankingBoard = {
    code: 'widgetRankingBoard',
    type: 'html',
    label: '排名轮播表',
    icon: 'iconbiaoge',
    options: {
        setup: [
            {
                type: 'el-input-text',
                label: '图层名称',
                name: 'layerName',
                required: false,
                placeholder: '',
                value: '排名轮播表',
            },
            {
                type: 'el-input-text',
                label: '行数',
                name: 'rowNum',
                required: false,
                placeholder: '',
                value: '5',
            },
            {
                type: 'el-input-text',
                label: '轮播间隔',
                name: 'waitTime',
                required: false,
                placeholder: '',
                value: '2000'
            }
        ],
        // 数据
        data: [
            {
                type: 'el-radio-group',
                label: '数据类型',
                name: 'dataType',
                require: false,
                placeholder: '',
                selectValue: true,
                selectOptions: [
                    {
                        code: 'staticData',
                        name: '静态数据',
                    },
                    {
                        code: 'dynamicData',
                        name: '动态数据',
                    },
                ],
                value: 'staticData',
            },
            {
                type: 'el-input-number',
                label: '刷新时间(毫秒)',
                name: 'refreshTime',
                relactiveDom: 'dataType',
                relactiveDomValue: 'dynamicData',
                value: 5000
            },
            {
                type: 'el-button',
                label: '静态数据',
                name: 'staticData',
                required: false,
                placeholder: '',
                relactiveDom: 'dataType',
                relactiveDomValue: 'staticData',
                value: [{ "value": 1048, "name": "搜索引擎" }, { "value": 735, "name": "直接访问" }, { "value": 580, "name": "邮件营销" }, { "value": 484, "name": "联盟广告" }, { "value": 300, "name": "视频广告" }]
            },
            {
                type: 'dycustComponents',
                label: '',
                name: 'dynamicData',
                required: false,
                placeholder: '',
                relactiveDom: 'dataType',
                chartType: 'widget-piechart',
                relactiveDomValue: 'dynamicData',
                dictKey: 'PIE_PROPERTIES',
                value: '',
            },
        ],
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
                value: 600,
            },
            {
                type: 'el-input-number',
                label: '高度',
                name: 'height',
                required: false,
                placeholder: '该容器在1080px大屏中的高度',
                value: 300,
            },
        ]
    }
}
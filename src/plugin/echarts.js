// 按需导入
// 导入echarts的核心模块
import * as echarts from 'echarts/core'

// 引入各种类型的图标
import {
    BarChart,
    PieChart,
    LineChart
} from 'echarts/charts'

// 引入提示框、标题、直角坐标系
import {
    // 标题
    TitleComponent,
    // 提示框
    TooltipComponent,
    // 坐标系
    GridComponent,
    // 图例
    LegendComponent
} from 'echarts/components'

// 渲染器 Canvas Svg
// echarts实现按需导入时不提供任何的渲染器
// 数据量不大（<1k）都可以使用
// 数据量较大（>1k），存在较多交互，建议使用Canvas
// 低端设备以及特殊图标可以使用Svg
import { CanvasRenderer } from 'echarts/renderers'
import Title from 'antd/lib/skeleton/Title'

echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    PieChart,
    LineChart,
    CanvasRenderer
])

export default echarts
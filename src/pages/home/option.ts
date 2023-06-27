import dayjs from 'dayjs';
import * as echarts from 'echarts';

/* 仪表图 */
export const pieOption = () => {
  const colors = [
    [0.025, '#1271FF'],
    [0.05, '#1271FF'],
    [0.075, '#1476F9'],
    [0.1, '#1476F9'],
    [0.15, '#177CF3'],
    [0.2, '#1981ED'],
    [0.25, '#1C87E8'],
    [0.3, '#1E8CE2'],
    [0.35, '#2397D6'],
    [0.4, '#259CD0'],
    [0.45, '#27A2CA'],
    [0.5, '#2AA7C4'],
    [0.55, '#2CADBF'],
    [0.6, '#2FB2B9'],
    [0.65, '#31B8B3'],
    [0.7, '#31B8B3'],
    [0.75, '#36C2A7'],
    [0.8, '#3ACD9B'],
    [0.85, '#3ACD9B'],
    [0.9, '#42DE8A'],
    [0.95, '#44E384'],
    [1, '#ffffff44'],
  ];
  const colorFormatOnChart = (rate: any) => {
    /* rate小于0的情况 */
    if (rate <= 0) {
      return [colors[21]];
    }
    /* rate大于0的情况 */
    if (rate >= 1) {
      return [...colors.slice(0, -1), [1, '#44E384']];
    }
    let cIndex = 0;
    for (let i = 0; i < colors.length; i++) {
      let index = 0;
      if (colors[i][0] < rate) {
        index = i;
      }
      if (index !== 0) {
        cIndex = index;
      }
    }
    console.log(cIndex, [...colors.slice(0, cIndex + 1), colors[21]], 'cIndex');
    return [...colors.slice(0, cIndex + 1), colors[21]];
  };
  return {
    title: {
      text: '总工期进度',
      x: '47%',
      y: '56%',
      itemGap: 15,
      textStyle: {
        color: '#ffffff50',
        fontSize: 20,
        fontWeight: 'bold',
      },
      textAlign: 'center',
    },
    series: [
      {
        type: 'pie',
        name: '外圆环',
        radius: ['95%', '92%'],
        clockwise: false,
        itemStyle: {
          color: '#99999977',
        },
        label: {
          show: false,
        },
        data: [100],
      },
      {
        name: '总工期进度',
        type: 'gauge',
        splitNumber: 9,
        min: 0,
        max: 100,
        startAngle: 90,
        endAngle: -269.99999999,
        clockwise: false,
        radius: '97%',
        center: ['50%', '50%'],
        pointer: {
          show: false,
        },
        anchor: {
          show: false,
        },
        detail: {
          show: true,
          offsetCenter: [0, '-3%'],
          color: '#fff',
          fontSize: 18,
          fontWeight: 700,
          textShadowColor: '#65f1f6',
          textShadowBlur: 2,
          textShadowOffsetX: 0,
          textShadowOffsetY: 0,
          valueAnimation: true,
          formatter: '{value}%',
        },
        axisLine: {
          show: false,
          lineStyle: {
            width: 10,
            shadowBlur: 0,
            color: colorFormatOnChart(0.8) /* 展示颜色的比例 */,
            opacity: 0,
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            width: 7,
            color: 'auto',
          },
          distance: 10,
          length: 10,
          splitNumber: 5,
        },
        axisLabel: {
          show: false,
        },
        markPoint: {
          animation: true,
          animationEasingUpdate: 'cubicInOut',
        },
        markLine: {
          emphasis: {
            disabled: false,
          },
        },
        /* 长线刻度 */
        splitLine: {
          show: false,
        },
        data: [
          {
            name: '',
            value: 80,
          },
        ],
      },
      {
        type: 'gauge',
        radius: '85%',
        splitNumber: 50,
        min: 0,
        max: 100,
        startAngle: 90,
        endAngle: -269.999999,
        center: ['50%', '50%'],
        pointer: {
          show: false,
        },
        anchor: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#999999',
            width: 10,
          },
        },

        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          length: 7,
          lineStyle: {
            width: 5,
            color: '#ffffff44',
          },
        },

        axisLabel: {
          show: false,
        },
      },
    ],
  };
};

/* 甘特图 */
function cacMinMaxDate(dates: any) {
  // 获取最大和最小日期
  const maxDate = Math.max(...dates);
  const minDate = Math.min(...dates);
  return { maxDate: maxDate, minDate: minDate - 3600 * 24 };
}
export const gattOption = (
  taskList = [
    {
      taskName: '苹果',
      estimatedStartTime: '2023-01-12',
      estimatedEndTime: '2023-03-18',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '香蕉',
      estimatedStartTime: '2023-01-22',
      estimatedEndTime: '2023-03-16',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-27',
    },
    {
      taskName: '草莓',
      estimatedStartTime: '2023-01-12',
      estimatedEndTime: '2023-03-12',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-28',
    },
    {
      taskName: '榴莲',
      estimatedStartTime: '2023-01-13',
      estimatedEndTime: '2023-03-24',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '黄桃',
      estimatedStartTime: '2023-01-14',
      estimatedEndTime: '2023-03-25',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-04-02',
    },
    {
      taskName: '商品1',
      estimatedStartTime: '2023-01-15',
      estimatedEndTime: '2023-03-26',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品2',
      estimatedStartTime: '2023-01-16',
      estimatedEndTime: '2023-03-27',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品3',
      estimatedStartTime: '2023-01-17',
      estimatedEndTime: '2023-03-28',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品4',
      estimatedStartTime: '2023-01-18',
      estimatedEndTime: '2023-03-29',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品5',
      estimatedStartTime: '2023-01-19',
      estimatedEndTime: '2023-03-30',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品6',
      estimatedStartTime: '2023-01-21',
      estimatedEndTime: '2023-03-31',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-04-25',
    },
    {
      taskName: '商品7',
      estimatedStartTime: '2023-01-21',
      estimatedEndTime: '2023-03-31',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品8',
      estimatedStartTime: '2023-01-21',
      estimatedEndTime: '2023-03-31',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品9',
      estimatedStartTime: '2023-01-21',
      estimatedEndTime: '2023-03-31',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品10',
      estimatedStartTime: '2023-01-21',
      estimatedEndTime: '2023-03-31',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
    {
      taskName: '商品11',
      estimatedStartTime: '2023-01-21',
      estimatedEndTime: '2023-03-31',
      actualStartTime: '2023-02-12',
      actualEndTime: '2023-03-26',
    },
  ],
) => {
  let dates: any = [];
  let tasks: any = [];
  let planStart: any = [];
  let planEnd: any = [];
  let actualStart: any = [];
  let actualEnd: any = [];
  taskList.forEach((task) => {
    const { taskName, estimatedStartTime, estimatedEndTime, actualStartTime, actualEndTime } = task;
    dates.push(dayjs(estimatedStartTime).unix());
    dates.push(dayjs(estimatedEndTime).unix());
    dates.push(dayjs(actualStartTime).unix());
    dates.push(dayjs(actualEndTime).unix());
    tasks.push(taskName);
    planStart.push(dayjs(estimatedStartTime).unix());
    planEnd.push(dayjs(estimatedEndTime).unix() - dayjs(estimatedStartTime).unix());
    actualStart.push(dayjs(actualStartTime).unix());
    actualEnd.push(dayjs(actualEndTime).unix() - dayjs(actualStartTime).unix());
  });

  const { maxDate, minDate } = cacMinMaxDate(dates);
  const minTime = minDate;
  const planDataStart = planStart.map((item: number, index: number) => {
    return item - minTime;
  });
  const actualDataStart = actualStart.map((item: number, index: number) => {
    return item - minTime;
  });
  function formatUnix(time: any, format = 'YYYY.MM.DD') {
    return dayjs.unix(time).format(format);
  }
  const barGap = '120%';
  const barWidth = 7;
  return {
    grid: {
      right: 40,
      left: 10,
      bottom: 10,
      top: 10,
      containLabel: true,
    },
    legend: {
      show: false,
    },
    tooltip: {
      trigger: 'axis',
      extraCssText: 'backdrop-filter: blur(7.5px);border-radius: 2px',
      confine: true,
      appendToBody: true,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderWidth: 0,
      position: 'top',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(101, 241, 246, 0.1)',
          width: 'auto',
        },
      },
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
      formatter: function (ToolFormatterParam: any) {
        const startTime = minTime + ToolFormatterParam[0].value;
        const endTime = startTime + ToolFormatterParam[1].value;
        /* 未延期的提示 */
        let labels = `<div>
            <b>${ToolFormatterParam[0].name}</b>
            ${dayjs(formatUnix(endTime)).diff(formatUnix(startTime), 'days') + 1}天
        </div>`;
        const maker =
          '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#1271FF;"></span>';
        let label_item = `<div> ${maker} 计划工期  ${formatUnix(startTime)} - ${formatUnix(endTime)} </div>`;
        labels += label_item;

        const startTime1 = minTime + ToolFormatterParam[2].value;
        const endTime1 = startTime + ToolFormatterParam[3].value;
        const maker1 =
          '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#44E384;"></span>';

        let label_item1 = `<div> ${maker1} 实际工期  ${formatUnix(startTime1)} - ${formatUnix(endTime1)}</div>`;
        labels += label_item1;

        return labels;
      },
    },
    xAxis: {
      type: 'value',
      splitNumber: 3,
      axisLabel: {
        showMinLabel: true, // 显示最小刻度标签
        showMaxLabel: true, // 显示最大刻度标签
        fontSize: 12,
        color: '#fff',
        formatter: function (val: any) {
          console.log();
          let label_ = dayjs.unix(val + minTime).format('YYYY-MM-DD');
          return label_;
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#E0E6F1',
          opacity: 0.1,
        },
      },
      axisLine: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: tasks,
      axisLabel: {
        fontSize: 12,
        width: 80,
        color: '#fff',
        overflow: 'truncate',
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
    },
    dataZoom: [
      {
        type: 'slider',
        width: 30,
        orient: 'vertical',
        borderColor: '#ffffff00',
        fillerColor: '#ffffff00',
        handleSize: '0%',
        yAxisIndex: [0],
        // maxValueSpan:11,
        minValueSpan: 11,
        showDataShadow: false,
        showDetail: false,
        startValue: 0,
        endValue: 10, // 显示的条形图数量
        zoomOnMouseWheel: true,
        moveHandleStyle: {
          opacity: 0.3,
          borderCap: 'round',
        },
        // moveHandleSize: 1,
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        zoomOnMouseWheel: false, //滚轮是否触发缩放
        moveOnMouseMove: true, //鼠标滚轮触发滚动
        moveOnMouseWheel: true,
      },
    ],
    series: [
      {
        //开始空白（隐藏部分需要在后面加0）tooltip formatter内有判断需要修改注意
        name: '计划开始时间',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
        },
        itemStyle: {
          opacity: 0,
        },
        emphasis: {
          focus: 'series',
        },
        barWidth,
        barGap,
        data: planDataStart,
      },
      {
        name: '计划结束时间',
        type: 'bar',
        stack: 'total',
        itemStyle: {
          // 渐变填充
          color: '#1890FF',
        },
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        barWidth,
        barGap,
        data: planEnd,
      },

      {
        name: '实际开始时间',
        type: 'bar',
        stack: 'total2',
        label: {
          show: false,
        },
        itemStyle: {
          opacity: 0,
        },
        barWidth,
        emphasis: {
          focus: 'series',
        },
        barGap,
        data: actualDataStart,
      },
      {
        name: '实际结束时间',
        type: 'bar',
        stack: 'total2',
        label: {
          show: false,
        },
        itemStyle: {
          // 渐变填充
          color: '#35F3FF',
        },
        emphasis: {
          focus: 'series',
        },
        barWidth,
        barGap,
        data: actualEnd,
      },
    ],
  };
};

/* 柱状图 */
export const barOption = (
  data: any = [
    { month: '12-13', value: 2 },
    { month: '12-14', value: 20 },
    { month: '12-15', value: 60 },
    { month: '12-16', value: 80 },
    { month: '12-17', value: 80 },
    { month: '12-18', value: 95 },
  ],
) => {
  const colors = ['#6791FF', '#FF77B3', '#FF994E', '#FBAD15', '#2C63FC', '#43E29D', '#2DD1FF', '#D558FF'];
  const xData: any = [],
    yData: any = [];

  const min = 50;

  data.map(function (item: any) {
    xData.push(item.month);
    if (item.value === 0) {
      yData.push(item.value + min);
    } else {
      yData.push(item.value);
    }
  });
  return {
    grid: {
      left: '2%',
      top: '7%',
      right: '5%',
      bottom: '14%',
    },
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#0c3b71',
          },
        },
        axisLabel: {
          show: true,
          color: '#fff',
          fontSize: 14,
          interval: 0,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        // name:"单位:户",
        nameTextStyle: {
          color: 'rgb(170,170,170)',
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#266399', //网格线的颜色
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
    ],
    series: [
      {
        // 值
        name: '采集覆盖率情况',
        type: 'bar',
        barWidth: 0,
        data: yData,
        z: 3,
        zlevel: 2,
        itemStyle: {
          color: (params: any) => colors[params.dataIndex % colors.length],
        },
        label: {
          show: true,
          position: [14, -15],
          color: 'inherit',
          fontSize: 12,
          formatter: (params: any) => {
            return `${params.data}%`;
          },
        },
      },
      {
        // 值分隔
        type: 'pictorialBar',
        itemStyle: {
          color: (params: any) => colors[params.dataIndex % colors.length],
        },
        symbolRepeat: 'fixed',
        symbolMargin: 3,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [14, 6],
        symbolPosition: 'start',
        symbolOffset: [0, -1],
        data: yData,
        width: 18,
        z: 0,
        zlevel: 3,
      },
      {
        itemStyle: {
          show: false,
          color: 'transparent',
        },
        showBackground: true,
        data: [1, 1, 1, 1, 1, 1], //这个数据无所谓，反正不显示，只要data的长度和另外两个一样长就行了
        barWidth: '50',
        backgroundStyle: {
          color: '#fff',
          opacity: 0.1, //透明度
        },
        z: 0,
        zlevel: 4,
        tooltip: {
          show: false,
        },
        type: 'bar',
      },
    ],
  };
};

/* 横向柱形图 */
export function createLinearGradient(color: string) {
  return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
    { offset: 0, color: `${color}00` },
    { offset: 1, color },
  ]);
}
export const hengOption = (
  category: any = [
    { name: '商品一', value: 200 },
    { name: '商品二', value: 150 },
    { name: '商品三', value: 256 },
    { name: '商品四', value: 138 },
    { name: '商品五', value: 168 },
    { name: '商品六', value: 185 },
    { name: '商品七', value: 175 },
    { name: '商品八', value: 68 },
    { name: '商品九', value: 120 },
    { name: '商品十', value: 140 },
    { name: '商品十一', value: 150 },
    { name: '商品十二', value: 170 },
    { name: '商品十三', value: 190 },
    { name: '商品十四', value: 210 },
    { name: '商品十五', value: 178 },
    { name: '商品十六', value: 198 },
    { name: '商品十七', value: 244 },
  ],
) => {
  const colors = ['#1890FF', '#FBAD15', '#FF994E', '#FF77B3', '#6791FF'];
  let maxValue = Math.max(...category.map((item: any) => item.value)); //最大值
  let yName: any = [];
  category.forEach((element: any) => {
    yName.push(element.name);
  });
  return {
    xAxis: {
      max: maxValue,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    grid: {
      left: 16,
      top: 20,
      right: 80,
      bottom: 0,
    },
    yAxis: [
      {
        // 每条图形上面的文字
        inverse: false,
        data: yName,
        axisLabel: {
          padding: [0, 0, 45, 0],
          inside: true,
          textStyle: {
            fontSize: 14,
            fontWeight: 400,
            color: '#fff',
            align: 'left',
          },
          formatter: '{value}',
          rich: {
            a: {
              color: 'transparent',
              lineHeight: 20,
              fontSize: 14,
              shadowColor: 'rgba(0, 0, 0, 1)',
              shadowBlur: 10,
            },
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      {
        // y轴最右侧的文字
        axisTick: 'none',
        axisLine: 'none',
        type: 'category',
        axisLabel: {
          margin: 10,
          textStyle: {
            color: '#fff',
            fontSize: '14',
          },
          formatter: (val: any) => val + '吨',
        },
        data: category,
      },
    ],
    dataZoom: [
        {
          type: 'slider',
          width: 30,
          orient: 'vertical',
          borderColor: '#ffffff00',
          fillerColor: '#ffffff00',
          handleSize: '0%',
          yAxisIndex: [0],
          // maxValueSpan:11,
          minValueSpan: 11,
          showDataShadow: false,
          showDetail: false,
          startValue: 0,
          endValue: 10, // 显示的条形图数量
          zoomOnMouseWheel: true,
          moveHandleStyle: {
            opacity: 0.3,
            borderCap: 'round',
          },
          // moveHandleSize: 1,
        },
        {
          type: 'inside',
          yAxisIndex: 0,
          zoomOnMouseWheel: false, //滚轮是否触发缩放
          moveOnMouseMove: true, //鼠标滚轮触发滚动
          moveOnMouseWheel: true,
        },
      ],
    series: [
      {
        name: 'info',
        // 内（显示的内容）
        type: 'bar',
        barGap: '-100%',
        barWidth: 8,
        legendHoverLink: false,
        silent: true,
        itemStyle: {
          color: (params: any) => createLinearGradient(colors[params.dataIndex % colors.length]),
        },
        markPoint: {
          symbol: 'rect',
          symbolSize: 20,
        },
        data: category,
        z: 1,
        animationEasing: 'elasticOut',
      },
      {
        data: category.map((item: any) => item.value),
        type: 'pictorialBar', // 顶部
        symbol: 'rect',
        barMaxWidth: '50',
        symbolPosition: 'end',
        symbolOffset: ['60%', '0'],
        symbolSize: [5, 14],
        z: 2,
        itemStyle: {
          color: (params: any) => colors[params.dataIndex % colors.length],
        },
      },
    ],
  };
};

import echarts from 'echarts';

export default {
  mounted() {
    this.drawLine6();
  },
  methods: {
    drawLine6() {
      let item1 = {
        color: '#F54F4A'
      };
      let item2 = {
        color: '#FF8C75'
      };
      let item3 = {
        color: '#FFB499'
      };

      let data = [
        {
          children: [
            {
              value: 5,
              children: [
                {
                  value: 1,
                  itemStyle: item1
                },
                {
                  value: 2,
                  children: [
                    {
                      value: 1,
                      itemStyle: item2
                    }
                  ]
                },
                {
                  children: [
                    {
                      value: 1
                    }
                  ]
                }
              ],
              itemStyle: item1
            },
            {
              value: 10,
              children: [
                {
                  value: 6,
                  children: [
                    {
                      value: 1,
                      itemStyle: item1
                    },
                    {
                      value: 1
                    },
                    {
                      value: 1,
                      itemStyle: item2
                    },
                    {
                      value: 1
                    }
                  ],
                  itemStyle: item3
                },
                {
                  value: 2,
                  children: [
                    {
                      value: 1
                    }
                  ],
                  itemStyle: item3
                },
                {
                  children: [
                    {
                      value: 1,
                      itemStyle: item2
                    }
                  ]
                }
              ],
              itemStyle: item1
            }
          ],
          itemStyle: item1
        },
        {
          value: 9,
          children: [
            {
              value: 4,
              children: [
                {
                  value: 2,
                  itemStyle: item2
                },
                {
                  children: [
                    {
                      value: 1,
                      itemStyle: item1
                    }
                  ]
                }
              ],
              itemStyle: item1
            },
            {
              children: [
                {
                  value: 3,
                  children: [
                    {
                      value: 1
                    },
                    {
                      value: 1,
                      itemStyle: item2
                    }
                  ]
                }
              ],
              itemStyle: item3
            }
          ],
          itemStyle: item2
        },
        {
          value: 7,
          children: [
            {
              children: [
                {
                  value: 1,
                  itemStyle: item3
                },
                {
                  value: 3,
                  children: [
                    {
                      value: 1,
                      itemStyle: item2
                    },
                    {
                      value: 1
                    }
                  ],
                  itemStyle: item2
                },
                {
                  value: 2,
                  children: [
                    {
                      value: 1
                    },
                    {
                      value: 1,
                      itemStyle: item1
                    }
                  ],
                  itemStyle: item1
                }
              ],
              itemStyle: item3
            }
          ],
          itemStyle: item1
        },
        {
          children: [
            {
              value: 6,
              children: [
                {
                  value: 1,
                  itemStyle: item2
                },
                {
                  value: 2,
                  children: [
                    {
                      value: 2,
                      itemStyle: item2
                    }
                  ],
                  itemStyle: item1
                },
                {
                  value: 1,
                  itemStyle: item3
                }
              ],
              itemStyle: item3
            },
            {
              value: 3,
              children: [
                {
                  value: 1
                },
                {
                  children: [
                    {
                      value: 1,
                      itemStyle: item2
                    }
                  ]
                },
                {
                  value: 1
                }
              ],
              itemStyle: item3
            }
          ],
          itemStyle: item1
        }
      ];

      const option = {
        title: { text: 'vue中引入ECharts6', x: 'center', y: 'bottom' },
        series: {
          radius: ['15%', '80%'],
          type: 'sunburst',
          sort: null,
          highlightPolicy: 'ancestor',
          data: data,
          label: {
            rotate: 'radial'
          },
          levels: [],
          itemStyle: {
            color: '#ddd',
            borderWidth: 2
          }
        }
      };

      let myChart = echarts.init(document.getElementById('myChart6'));
      myChart.setOption(option);
    }
  }
};

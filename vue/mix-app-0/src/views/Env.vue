<template>
  <div class="env">
    <el-row :gutter="4">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>系统环境变量</span>
          </div>
          <el-table stripe :data="tableData1" style="width: 100%">
            <el-table-column prop="no" label="编号" width="80"></el-table-column>
            <el-table-column prop="key" label="变量" width="200"></el-table-column>
            <el-table-column prop="value" label="变量值"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>彩色表格</span>
          </div>
          <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header">
            <span>花式表格</span>
          </div>
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="120">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="姓名2" width="120">
              <template slot-scope="scope">
                <el-tag type="warning" size="small">{{ scope.row.name }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-divider></el-divider>

    <el-row :gutter="4">
      <el-col :span="8">
        <el-card shadow="hover">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <el-table :data="tableDataX" border show-summary style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
            <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
            <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <el-table
            :data="tableDataX"
            border
            height="328"
            :summary-method="getSummaries"
            show-summary
            style="width: 100%; margin-top: 20px"
          >
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
            <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
            <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-divider></el-divider>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      tableData1: this.getTableData1(),

      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      tableDataX: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },

  methods: {
    getTableData1() {
      let tableData = [];
      let num = 1;

      console.log("hahaha");
      for (let k in process.env) {
        let item = {};
        item["no"] = num;
        item["key"] = k;
        item["value"] = process.env[k];
        num = num + 1;
        console.log(item);
        tableData.push(item);
      }
      return tableData;
    },

    tableRowClassName({ row, rowIndex }) {
      console.log(rowIndex);
      console.log(row);
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    formatter(row, column) {
      console.log(column);
      return row.address;
    },

    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    }
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

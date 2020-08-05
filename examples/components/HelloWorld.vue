<template>
   <div>
     <el-row style='text-align:right;padding:20px'>
        <Flset :dHead="tabeHead"  @getHead="getHead" ></Flset>
     </el-row>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
      <template>
        <el-table-column
          type="index"
          label="序号"
          align="center"
          width="80"
          key=""
          fixed
        >
          <template slot-scope="scope">
            <span>{{ (page - 1) * rows + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
      </template>

    <template v-for="(item,i) in comTabeHead" >
    <el-table-column
      v-show="item.select"
      :key="i"
      :prop="item.prop"
      :label="item.label+'--'+item.select"
      :fixed='item.isFixed'
      align='left'
      :width="comTabeHead.length>3?item.width:''">
    </el-table-column>
    </template> 
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   </div>
</template>

<script>
export default {
   data(){
     return {
      //  page
        page:1,
        // rows
        rows:5,
      // table表头
        tabeHead: [
         { prop: "date", label: "时间", width: "160",disabled:false,select:true, isFixed: true },
         { prop: "name", label: "姓名", width: "190",sabled:false,select:true, isFixed: false},
         { prop: "address", label: "地址", width: "250",disabled:false,select:true, isFixed: false},
         { prop: "type", label: "类型", width: "210",disabled:false,select:true, isFixed: false},
         { prop: "type1", label: "类型1", width: "210",disabled:false,select:true, isFixed: false},
         { prop: "type2", label: "类型2", width: "210",disabled:false,select:true, isFixed: false},
         { prop: "type3", label: "类型3", width: "210",disabled:false,select:true, isFixed: false}
         ],
      // table数据
       tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          type: 1
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          type: 2
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          type: 3
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          type: 4
        },
      ]
     }
   },
   computed:{
        comTabeHead(){
            console.log("this.tabeHead.filter((item)=>item.select)")
            console.log(this.tabeHead.filter((item)=>item.select))
            return this.tabeHead.filter((item)=>item.select)
        }
   },
   methods:{
     getHead(arr){
       console.log(arr)
       this.tabeHead = arr;
     }
   }
}
</script>

<style>

</style>
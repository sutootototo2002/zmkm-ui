<template>
  <el-popover placement="left" width="100" trigger="click" v-model="visible">
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      checked
      @change="handleCheckAllChange"
      >全选(拖动可排序)</el-checkbox
    >
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <draggable v-model="getdHead" @end="ended">
        <el-row
          style="margin-top:10px;border:1px solid #409EFF;padding:5px"
          v-for="(item, i) in dHead"
          :key="i"
        >
          <el-checkbox :label="item.label" :disabled="item.disabled">
            {{ item.label }}
          </el-checkbox>
          <el-switch
            class="elSwitch"
            v-model="item.isFixed"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-row>
      </draggable>
    </el-checkbox-group>
    <el-row class="btns">
      <el-button
        class="btnsA"
        v-show="getdHead.length"
        type="primary"
        size="mini"
        @click="getHead"
        >确定</el-button
      >
      <el-popover
        v-show="!getdHead.length"
        placement="top"
        width="160"
        v-model="visible1"
      >
        <p>至少选一项</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible1 = false"
            >取消</el-button
          >
          <el-button type="primary" size="mini" @click="visible1 = false"
            >确定</el-button
          >
        </div>
        <el-button type="primary" size="mini" slot="reference">确定</el-button>
      </el-popover>
      <el-button size="mini" class="btnsB" @click="reset">取消</el-button>
    </el-row>

    <el-button circle slot="reference"
      ><i class="icon-RectangleCopy16 fontSize"></i
    ></el-button>
  </el-popover>
</template>

<script>
// const cityOptions = ['上海', '北京', '广州', '深圳'];
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  name: "Flset",
  props: {
    isSet: {
      type: Boolean,
      default: true
    },
    dHead: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // compDataHead() {
    //   return this.dHead.filter((item) => item.select);
    // },
  },
  data() {
    return {
      visible1: false,
      visible: false,
      checkAll: true,
      dataHead: this.dHead,
      getdHead: this.dHead,
      checkedCities: this.dHead.map(item => {
        return item.label;
      }),
      isIndeterminate: true
    };
  },
  created() {
    this.checkedCities = this.dataHead.map(item => {
      if (item.select) {
        return item.label;
      }
    });

    console.log("checkssss");
    console.log(this.checkAll);
    console.log("isIndeterminate");
    console.log((this.isIndeterminate = false));
  },
  methods: {
    // 添加方法

    getHead() {
      this.dHead = this.getdHead;
      this.$emit("getHead", this.getdHead);
      this.visible = false;
    },
    reset() {
      //取消
      console.log("取消");
      this.visible = false;
    },
    //全选
    ended(e) {
      var that = this;
      this.$message({
        message: "重新排序后，冻结列将失效，请重新设置！",
        type: "warning"
      });
      console.log(e);
      console.log(this.getdHead);
      this.getdHead.map((item, i) => {
        that.$set(that.getdHead[i], "isFixed", false);
      });
      console.log(JSON.stringify(this.getdHead));

      this.$emit("getHead", this.getdHead);
      // this.visible = false;
    },
    handleCheckAllChange(val) {
      console.log(val);
      var that = this;
      this.checkedCities = val
        ? this.dHead.map(item => {
            return item.label;
          })
        : [];
      if (!val) {
        this.getdHead.map((item, i) => {
          that.$set(that.getdHead[i], "select", false);
        });
      } else {
        this.getdHead.map((item, i) => {
          that.$set(that.getdHead[i], "select", true);
        });
      }

      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log("value");
      console.log(value);

      let checkedCount = value.length;
      this.checkAll = checkedCount == this.dHead.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.dHead.length;
      var that = this;

      //遍历数据传值
      this.getdHead.forEach((item, i) => {
        that.$set(that.getdHead[i], "select", false);
        value.forEach(items => {
          if (items == item.label) {
            console.log(items + "---" + item.label + "---" + i);
            that.$set(that.getdHead[i], "select", true);
          }
        });
      });
    }
  }
};
</script>

<style>
.isNon {
  display: none;
}
.el-checkbox {
  display: inline-block;
}
.btns {
  text-align: left;
  margin-top: 10px;
}
.btnsA {
  float: left;
  width: 45%;
}
.btnsB {
  float: right;
  width: 45%;
}
[class*="icon"].fontSize {
  font-size: 20px;
}
.elSwitch {
  float: right;
}
</style>

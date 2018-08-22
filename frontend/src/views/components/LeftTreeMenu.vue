<template>
  <div class="ef-bg-white ef-border-r ef-border-t ef-border-grey-light ef-rounded">
    <el-tree class="ef-rounded" :data="menuTreeData" :props="menuTreeProps" :default-expand-all="true" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  name: "ef-left-tree-menu",
  data() {
    return {
      menuTreeProps: {
        children: "children",
        label: "label"
      },

    };
  },
  methods: {
    handleNodeClick(nodeData, node, nodeComponent) {

    },


  },
    computed:{
        menuTreeData(){

          return this.$store.state.leftMenuData;
      }

    },

};
</script>

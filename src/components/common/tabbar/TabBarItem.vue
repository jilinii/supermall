<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" class="tab-bar-item-text"><slot name="item-text"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'black'
      }
    },
    data() {
      return {
        // isActive: false,
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },

      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // if (this.$route.path == this.path) return
        this.$router.replace(this.path)
      }
    }
  }

</script>

<style>

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }

  .tab-bar-item img {
    width: 21px;
    height: 21px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .tab-bar-item-text {
    margin-top: 3.5px;
  }

</style>

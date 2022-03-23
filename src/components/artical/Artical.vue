<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="cover.images[0]" alt="" class="thumb">
          <img :src="cover.images[1]" alt="" class="thumb">
          <img :src="cover.images[2]" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者  {{ aut_name }} &nbsp;&nbsp;{{ comm_count }} 评论&nbsp;&nbsp;发布日期&nbsp;{{ pubdate }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  name: 'ArticalInfo',
  props: {
    art_id: {
      default: '',
      type: String
    },
    title: {
      default: '',
      type: String
    },
    aut_id: {
      default: '',
      type: String
    },
    comm_count: {
      default: '0',
      // 数组形式定义多个可能出现的数据类型
      type: [String, Number]
    },
    pubdate: {
      default: '',
      type: [String, Number]
    },
    aut_name: {
      default: '',
      type: String
    },
    cover: {
      type: Object,
      default: function () {
        return { cover: 0 }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>

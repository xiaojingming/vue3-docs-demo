<template>
  <div class="device">
    <div class="device-option">
      <div class="device-option-head">
        <span>已添加的设备</span>
        <span>在线设备：{{ num }}</span>
      </div>
      <div class="device-option-content">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
          >
            <img
              src=""
            >
            <p>{{ item.name }}</p>
            <span :class="{ online: item.status }">{{ item.status ? '在线' : '离线' }}</span>
          </li>
        </ul>
        <div class="btn-add">
          添加子设备
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { computed, reactive } from 'vue';

export default ({
  setup() {
    const list = reactive([
      {
        name: '六位场景开关',
        status: 0,
      },
      {
        name: '七位场景开关',
        status: 0,
      },
      {
        name: '八位场景开关',
        status: 1,
      },
      {
        name: '九位场景开关',
        status: 0,
      },
    ]);
    const num = computed(() => list.filter((item) => item.status).length);
    return {
      num,
      list,
    };
  },
});
</script>
<style lang='scss' scoped>
.device {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #000;
  .device-option {
    background-color: #fff;
    margin-top: auto;
    height: 50%;
    padding: 20px 15px;
    border-radius: 20px 20px 0 0;
    .device-option-head {
      display: flex;
      justify-content: space-between;
      span {
        font-weight: bold;
        font-size: 14px;
      }
      margin-bottom: 20px;
    }
    .device-option-content {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;
        li {
          width: calc(50% - 10px);
          display: flex;
          flex-direction: column;
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          img {
            width: 20px;
            height: 20px;
          }
          p {
            font-weight: bold;
            font-size: 16px;
            line-height: 40px;
          }
          span {
            display: flex;
            align-items: center;
          }
          .online::before {
            content: '';
            display: block;
            width: 6px;
            height: 6px;
            background-color: green;
            border-radius: 100%;
            margin-right: 5px;;
          }
        }
      }
      .btn-add {
        width: 100%;
        height: 50px;
        background-color: rgb(203, 102, 30);
        border-radius: 10px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>

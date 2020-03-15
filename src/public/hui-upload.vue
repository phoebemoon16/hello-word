<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    @mouseenter.native="handleShowMask(true)" 
    @mouseleave.native="handleShowMask(false)"
    >
    <div class="images">
      <img 
        v-if="imageUrl" 
        :src="imageUrl" 
        class="avatar" 
      >
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
    <div class="mask" v-show="mask && !readonly">
      <div class="edit-box">
        <i  class="el-icon-edit"></i>
        <i  class="el-icon-share" @click.stop="handlePreview"></i>
        <i  class="el-icon-delete" @click.stop="handleRemove" ></i>
      </div>
    </div>
  </el-upload>
</template>
<script>
// import viewer from 'v-viewer';
// import 'viewerjs/dist/viewer.css';
export default {
    props:{
      value:String,
      url:String,
      readonly:Boolean,
    },
    data() {
      return {
        imageUrl: '',
        showDel: false,
        mask: false,
        // readonly:false
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl, '======')
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
       // 是否顯示遮罩層
      handleShowMask(type) {
        // 有圖片有readonly才顯示mask
        if ( this.imageUrl) {
          this.mask = type
        }
      },
      showDelFun(){
        this.showDel = true
      },
      disDelFun(){
        this.showDel = false
      },
      handleRemove(){
        this.imageUrl = ''
        this.$emit('update:url', this.imageUrl)
        this.mask = false
      },
      handlePreview(){
        console.log('log--==')
        // const viewer = this.$el.querySelector('.images').$viewer
        // viewer.show()
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    width: 178px;
    height: 178px;
    /* overflow: hidden; */
  }
  .avatar-uploader .el-upload:hover {
    /* border-color: #409EFF; */
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    position: absolute;
    width: 178px;
    height: 178px;
    display: block;
  }
  .avatar:hover {
    border: 1px dashed #d9d9d9;
    border-color: pink;
  }
  .avatar-uploader .mask{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: rgb(7, 14,25,0.52);
  }
  .edit-box {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
  }
  .edit-box  i{
    color: #FFF;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>

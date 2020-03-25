<template>
  <div class="edit">
    <el-row :gutter="4">
      <el-col :span="2">
        <p class="p1">文字p1</p>
      </el-col>
      <el-col :span="2">
        <p class="p2">文字p2</p>
      </el-col>
      <el-col :span="2">
        <p class="p3">文字p3</p>
      </el-col>
      <el-col :span="2">
        <p class="p4">文字p4</p>
      </el-col>
      <el-col :span="2">
        <p class="p5">文字p5</p>
      </el-col>
      <el-col :span="2">
        <p class="p6">文字p6</p>
      </el-col>
      <el-col :span="2">
        <p class="p7">文字p7</p>
      </el-col>
      <el-col :span="2">
        <p class="p8">文字p8</p>
      </el-col>
      <el-col :span="2">
        <span style="color:#1199ff">
          <p>文字span</p>
        </span>
      </el-col>
      <el-col :span="2">
        <p style="color:#82e">文字p</p>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>

    <el-row :gutter="4">
      <el-col :span="2">
        <p id="p9">文字#p9</p>
      </el-col>
      <el-col :span="2">
        <p class="p10">文字p10.class</p>
      </el-col>
      <el-col :span="2">
        <p class="p10">文字p10.class</p>
      </el-col>
      <el-col :span="2">
        <p class="p10">文字p10.class</p>
      </el-col>

      <el-col :span="2">
        <div style="background-color:#ccc;">
          <p>文字div.class</p>
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <h1>Hello World!</h1>
          <h2>Smaller heading!</h2>
          <p>This is a paragraph.</p>
        </div>
      </el-col>

      <el-col :span="4">
        <div>
          <h2>Will apply to:</h2>
          <a title="w3cschool" href="http://w3cschool.cn">w3cschool</a>
          <h2>Will not apply to:</h2>
          <p title="greeting">Hi!</p>
          <a class="w3cschool" href="http://w3cschool.cn">w3cschool</a>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4">
      <el-col :span="3">
        <h3 style="color:red;text-align:left;font-size:18pt;background-color:#ccc;">文字h3</h3>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <div style="margin:5px solid yellow; margin-top: 5px; border:5px solid black; padding:5px solid red;">
            <p style="background-color:#ccc;">文字box: [margin, border, padding, content]</p>
          </div>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <div style="margin:5px solid yellow; margin-top: 5px; border:5px solid black; padding:5px solid red;">
            <p style="background-color:#ccc;opacity:0.5;filter:Alpha(opacity=50);">box盒子模型: [margin, border, padding, content]</p>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div style="margin:5px solid yellow; margin-top: 5px; border:5px solid black; padding:5px solid red;">
          <p style="outline:#00FF00 solid thick;">outline属性</p>
        </div>
      </el-col>

      <el-col :span="10">
        <div id="main">
          <div style="background-color:coral;" id="myRedDIV"></div>
          <div style="background-color:lightblue;" id="myBlueDIV"></div>
          <div style="background-color:lightgreen;" id="myGreenDIV"></div>
          <div style="background-color:pink;" id="myPinkDIV"></div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4">
      <el-col :span="4" :offset="4">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4"></el-input>
      </el-col>
    </el-row>

    <el-row :gutter="4">
      <el-col :span="4" :offset="4">
        <el-input placeholder="请输入密码" v-model="input" show-password width="300px"></el-input>
      </el-col>
      <el-col :span="4" :offset="4">
        <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="30" show-word-limit></el-input>
      </el-col>
      <el-col :span="4">
        <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
      </el-col>
    </el-row>
  </div>
</template>


<script scoped>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',

      text: '',
      textarea: ''
    }
  }
}
</script>

<style>
p {
  text-align: left;
}
.p1 {
  color: red;
}
.p2 {
  color: rgb(133, 45, 200);
}
.p3 {
  color: rgb(60%, 33%, 55%);
}
.p4 {
  color: #55bbaa;
}
.p5 {
  color: #1bc;
}
.p6 {
  color: #11bbcc;
}
.p7 {
  color: #c1c;
}
.p8 {
  color: #cc11cc;
}
#p9 {
  color: #f81;
}
p.p10 {
  color: #3b9;
}

.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 32px;
}

#main {
  width: 180px;
  height: 60px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  display: flex;
}

#main div {
  width: 40px;
  height: 40px;
}

/* Safari 6.1+ */
div#myRedDIV {
  -webkit-order: 2;
}
div#myBlueDIV {
  -webkit-order: 4;
}
div#myGreenDIV {
  -webkit-order: 3;
}
div#myPinkDIV {
  -webkit-order: 1;
}

/* Standard syntax */
div#myRedDIV {
  order: 2;
}
div#myBlueDIV {
  order: 4;
}
div#myGreenDIV {
  order: 3;
}
div#myPinkDIV {
  order: 1;
}

h1,
h2,
p {
  color: green;
}

[title='w3cschool'] {
  border: 5px solid green;
}
</style>

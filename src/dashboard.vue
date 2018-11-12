<template>
  <div id="dashboard">
  <div class="container">
    <header>
      <h1>Dashboard</h1>
    </header>
    <div class="content">
  <el-row :gutter="10">
  <el-col :span="6"
  v-bind:class="{'is-collapsed' : collapsed }"
  v-for="(c,index) in info"
  v-show="visible"
  >
  <div 
 
  class="grid-content">
  
  <el-card class="box-card">
  <div   class="el-card__header clearfix cardHeader" v-bind:id="c.type.replace(/\s+/g, '')" >
    <span>{{c.name}}</span>
     <span>{{c.type}}</span>
  </div>
  <div style="width:100%; height:1px; clear:both;"></div>
  <div  class="text item">
  <span class="category">APPROVED POSTS</span>
     <span class="number">{{c.approved_posts}}</span>
  </div>
  <div  class="text item">
  <span class="category">INFLUENCERS</span>
    <span class="number"> {{c.num_of_artists}}</span>
  </div>
  <div style="width:100%; height:1px; clear:both;"></div>
  <div  class="text item">
  <span class="category">LIKES</span>
     <span class="number">{{c.approved_likes}}</span>
  </div>
  <div  class="text item">
  <span class="category"> COMMENTS</span>
   <span class="number"> {{c.approved_comments}}</span>
  </div>
  <div  class="text item last">{{c.days_passed/c.days_total*100}}%({{c.days_passed}}/{{c.days_total}}days)</div>
  <div style="width:100%; height:1px; clear:both;"></div>
  <div class="bottom clearfix">
   <el-button style="float: left; padding: 3px 0" type="text"
   @click="hideButton(index)"
   >HIDE</el-button>
  <router-link :to="{ name: 'campaign', params: { id: c.id }}"><el-button style="float: right; padding: 3px 0" type="text">SHOW DETAILS</el-button></router-link>
  </div>
</el-card>
  
  </div></el-col>
  <el-col :span="6"  class="grid-content" id="buttonToShow"
  
  >
  <span class="before"></span>
  <span
   v-bind:class="{'is-collapsed' : collapsed }"
  v-on:click="collapsed = !collapsed"
  v-show="collapsed"
  >+{{info.length-7}}<br><p>MORE TO SHOW</p></span>
  </el-col>
</el-row>
</div>
  </div>
 
  </div>
</template>

<script>
 import axios from 'axios'
 
export default {
  name:'dashboard',
  data () {
    return {
      info: [],
      props: ['id'],
      endpoint: 'http://localhost:3000/campaigns',
      collapsed:true,
      visible:true,
    }
  },

  created() {
    this.getAllPosts();
  
  },
    
  methods: {
    getAllPosts() {
      axios.get(this.endpoint)
        .then(response => {
          this.info = response.data;
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        })
    },
  

     hideButton(index){
       let card = document.getElementsByClassName('el-col')
       
       return card[index].style.display = "none";

     }
  }
}

</script>

<style>
@import url("//unpkg.com/element-ui@2.4.9/lib/theme-chalk/index.css");
*{
  margin:0;
  padding:0;
}
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:0;
  box-sizing:border-box;

}
html{
  background-color:#EFEFEF;
}
.container{
  max-width:1100px;
  margin:0 auto;
  min-height:10px;
}
header{
  background:white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.13);
  padding-bottom:10px;
  height:50px;
  margin-bottom:10px;
  
}
header h1{
  font-size:18px;
  text-align:left;
  margin-left:3%;
  color:black;
  margin-block-start: 0;
    margin-block-end: 0;
    line-height:70px;
 
}
.cardHeader span{
  display:block;
  text-align:left;
}
.cardHeader span:nth-child(2){
  color:grey;
  font-size:14px;
  
}
.el-card__header{
  padding-bottom:10px;
}
.
h1, h2 {
  font-weight: normal;
}
.boxStyle1{
  box-shadow: inset 0 3px 0  #CE9ED6;
}
.boxStyle2{
  box-shadow: inset 0 3px 0  green;
}
.boxStyle3{
  box-shadow: inset 0 3px 0  blue;
}
.box-card .Challenge{
  box-shadow: inset 0 3px 0  #CE9ED6;
}
#Challenge{
      
  box-shadow: inset 0 3px 0  #CE9ED6;
}
#Influencercampaign{
      
  box-shadow: inset 0 3px 0  #80B9DB;

}
#Giveaway{
      
  box-shadow: inset 0 3px 0  #A6AEDB;

}
.is-collapsed:nth-child(n+8){
  display:none;
}
.el-card {
  border:none;
  margin-bottom:20px;
}
.el-card .text {
  display:inline-block;
  margin-bottom:10px;
  float:left;
  text-align:left;
  margin-left:10%;
  width:100px;
  margin-top:10px;
  
}
.el-card  .last {
 font-size:8px;
 margin-left:2%;
 color:grey;
 
  
}
.el-card .text  span{
  display:block;
  
  
}
.bottom{
  padding-top:15px;
  min-height:30px;
  box-shadow: inset 0 3px 0  #81DFD3;
  line-height:19px;
}
.bottom button:first-child{
  color:black;
  margin-left:10%;
  font-size:12px;
  
}
.bottom button:nth-child(2){
  
  margin-right:5%;
  font-size:12px;
  font-weight:bold;
  
}
.el-card__body{
  padding:0px;
  min-height:100px;
  
  
}
.el-card .text  .category{
  color:grey;
  font-size:8px;

}
.el-card .text  .number{
  color:black;
  font-size:20px;
  font-weight:bold;
}

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#buttonToShow{
  height:223px;
  vertical-align:middle; 
  display:table-cell; 
}
#buttonToShow div{
  margin:0 auto;
}
.before {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
#buttonToShow span{
  color:#B5B5B5;
  font-size:30px;
  font-weight:bold;
  display: inline-block;

  cursor:pointer;
  
}
#buttonToShow p{
  font-size:20px;
  margin:0;
}
</style>

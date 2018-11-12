<template>
  <div id="campaigns">
  <div class="container">
    <header>
      <h1>Dashboard  </h1>
    </header>
    
           
         
    <div class="content">
    <el-button-group>
  <el-button @click="Instagram" type="primary">INSTAGRAM</el-button>
     <el-button @click="Facebook" type="primary">FACEBOOK</el-button>
     <el-button @click="Youtube" type="primary">YOUTUBE</el-button>
      <el-button @click="Twitter"type="primary">TWITTER</el-button>
</el-button-group>

  
<el-button-group>
  <el-button @click="Pending" type="primary">Pending</el-button>
     <el-button @click="Approved" type="primary">Approved</el-button>
     <el-button @click="Rejected" type="primary">Rejected</el-button>
      
</el-button-group>
    <el-row :gutter="10">
  <el-col 
   :class="media[number].social_network"
  :span="6"
 
  v-for="(i,index) in media"
  >
  
  <div 
 
  class="grid-content">
  
  <el-card>
  <div   class="el-card__header clearfix cardHeader">
    <span>{{media[number].author_username}}</span>
     <span>{{media[number].social_network}}</span>
     
  </div>
  <div style="width:100%; height:1px; clear:both;"></div>
  <img :src=media[number].pic>
  <div  class="text item">
   
  <span class="category">LIKES</span>
     <span class="number">{{media[number].likes_number}}</span>
  </div>
  <div  class="text item">
  <span class="category">COMMENTS</span>
    <span class="number">{{media[number].comments_number}}</span>
  </div>
    
  <div  class="text item last"></div>
  <div style="width:100%; height:1px; clear:both;"></div>
  <div class="bottom clearfix">
   <el-button style="float: left; padding: 3px 0" type="text" class="Reject"
   @click="Reject(index)"
   >Reject</el-button>
  <el-button
  @click="Approve(index)"
   class="Approve"style="float: right; padding: 3px 0" type="text">Approve</el-button>
  </div>
  
</el-card>
  
  </div></el-col>
  </el-row>
  </div>
  </div>
  </div>
</template>

<script>
 
 import axios from 'axios'
 
export default {
  name:'campaigns',
  data () {
    return {
      media: [],
      endpoint: 'http://localhost:4000/media',
      collapsed:true,
      visible:true,
      number:this.$route.params.id,
      activeName: 0
    }
  },

  created() {
    this.getAllPosts();
   
  },
    
  methods: {
    getAllPosts() {
      axios.get(this.endpoint)
        .then(response => {
          this.media = response.data;
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        })
    },
   
    Instagram(){
        
        let card = $('.el-col');
        let cardd = $('.Instagram');
        console.log(cardd);
        console.log(card.length);
        for(var i=0;i<card.length;i++){
            console.log(card[i])
            $(card[i]).hide();
            $(cardd[i]).show()   
        }  
    },
     Youtube(){
        
     let card = $('.el-col');
        let cardd = $('.Youtube');
        console.log(cardd);
        console.log(card.length);
        for(var i=0;i<card.length;i++){
            console.log(card[i])
            $(card[i]).hide();
            $(cardd[i]).show()
        }

    },
    Facebook(){
        
        let card = $('.el-col');
        let cardd = $('.Facebook');
        for(var i=0;i<card.length;i++){
        $(card[i]).hide();
        $(cardd[i]).show()
        }

    },
     Twitter(){
        
        let card = $('.el-col');
        let cardd = $('.Twitter');
        for(var i=0;i<card.length;i++){
        $(card[i]).hide();
        $(cardd[i]).show();
        }

    },
        Reject(index){
        let card = document.getElementsByClassName('el-col')
      
        $(card[index]).removeClass('Approved').removeClass('Pending').addClass('Rejected')
        return card[index].style.display = "none";
     

    },
    Approve(index){
        let card = document.getElementsByClassName('el-col');
        let approve = document.getElementsByClassName('Approve')
        $(card[index]).removeClass('Rejected').removeClass('Pending')
         $(card[index]).addClass('Approved')
        card[index].style.display = "none";
        
     

    },
    Rejected(){
        let card = $('.el-col');
        let cardd = $('.Rejected');
        let rejec = $('.Reject')
        let approve = $('.Approve')
        for(var i=0;i<card.length;i++){
        card = $('.el-col');
            cardd = $('.Rejected');
        $(card[i]).hide();
        for(var j=0;j<cardd.length;j++)
        $(cardd[j]).show();
        $(rejec[i]).hide()
        $(approve[i]).show()
        
        
    }
    },
    Pending(){
        let card = $('.el-col');
        let cardd = $('.Pending');
        
        for(var i=0;i<card.length;i++){
           
            cardd = $('.Pending');
        $(card[i]).hide();

        for(var j=0;j<cardd.length;j++)
        $(cardd).show();
                
    }},
     Approved(){
        let card = $('.el-col');
        let cardd = $('.Approved');
        let approve = $('.Approve')
        let rejec = $('.Reject')
        for(var i=0;i<card.length;i++){
            card = $('.el-col');
            cardd = $('.Approved');
        $(card[i]).hide();

        for(var j=0;j<cardd.length;j++)
        $(cardd[j]).show();
                $(approve[i]).hide()
                $(rejec[i]).show()
    }
    },
     
 
  
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
.el-tabs{
   background:white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.13);
  padding-bottom:10px;
    padding-left:30px;
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
.el-card img{
  width:100%;
}
.buttonGroup{
    background-color:white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.13);
    min-height:70px;
    vertical-align:middle;
}
.el-button-group {
    display:block !important;
    background-color:white;
    vertical-align:middle;
    margin:0 auto;
    height:50px;
    margin-bottom:10px;
    padding:1%;
}
.el-button{
    
}
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

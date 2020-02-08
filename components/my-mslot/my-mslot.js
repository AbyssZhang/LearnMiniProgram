// components/my-mslot/my-mslot.js
Component({
  
  // 定义组件的配置选项
  // multipleSlots：定义多插槽时设置为true
  // styleIsolation:设置样式的隔离方式
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */


  // --------让使用者给组件传入数据-----------
  properties: {
    title:{
      type:String,
      value:''
    }
  },

  /**
   * 定义组件内部的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 定义组件内部的方法列表
   */
  methods: {

  },

  // 外界给组件传入额外的样式
  externalClasses:[],

  // 监听properties/data的改变
  observers:{
    counter:function(newVal){

    }
  },

  // 组件监听生命周期函数
  // 1.监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所载页面显示出来时')
    },
    hide(){
      console.log('监听组件所载页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸的改变')
    }
  },
  // 2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建出来时')
    },
    attached() {
      console.log('组件被添加到页面')
    },
    ready() {
      console.log('组件被渲染出来')
    },
    moved() {
      console.log('组件被移动到另外一个节点时')
    },
    detached() {
      console.log('组件被移除掉')
    },

  }


})

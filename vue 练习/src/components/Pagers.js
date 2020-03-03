const template = `
<div class="pager" v-if="total>0">
<a @click.prevent="handleAClick(1)" href="" class="pager-item" :class="current===1?'disabled':''">首页</a> 
<a @click.prevent="handleAClick(current-1)" class="pager-item" :class="current===1?'disabled':''">上一页</a> 
<span class="pager-text">
  <i>{{current}}</i> 
  / 
  <i>{{pageNumber}}</i>
</span> 
<a @click.prevent="handleAClick(current+1)" class="pager-item" :class="current===pageNumber?'disabled':''">下一页</a> 
<a @click.prevent="handleAClick(pageNumber)" class="pager-item" :class="current===pageNumber?'disabled':''">尾页</a>
</div> 
`
export default {
    props:{
        current:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default:100,
        },
        limit:{
            type:Number,
            default:10,
        }
    },
    computed:{
        pageNumber(){
            return Math.ceil(this.total / this.limit);
        },
    },
    methods:{
        handleAClick(target){
            if(target < 1 || target > this.pageNumber || target === this.current){
                return;
            }
            this.$emit("getCurrent",target)
        }
    },
    template,
}
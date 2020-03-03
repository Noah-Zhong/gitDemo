const template = `
<div class="modal" style="position: fixed;
width:100%；
height:100%;
top: 0;
left:0;
bottom: 0;
right: 0;
background-color:rgba(0,0,0,.5)
">
<div class="center" style="position: absolute;left: 50%;top: 50%;transform:translate(-50%,-50%)">
  <slot>默认的显示</slot>
</div>
</div>
`
export default {
    template
}
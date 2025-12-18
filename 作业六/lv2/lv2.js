const textarea = document.querySelector('.textarea')
const button = document.querySelector('.button')
const total = document.querySelector('.total')
const bottomBox = document.querySelector('.bottomBox')
const displayBox = document.querySelector('.displayBox')
const deleteBox = document.querySelector('.deleteBox')
//控制0/200的显示
textarea.addEventListener('focus',function()
{
    total.style.opacity=1;
})
textarea.addEventListener('blur',function()
{
    total.style.opacity=0;
})
//计算字数
textarea.addEventListener('input',function()
{
    // console.log(textarea.value.length)
    total.innerHTML=`${textarea.value.length}/200`
})



//button发布评论
button.addEventListener('click',function()
{
    if(textarea.value.trim())
    {
        displayBox.innerHTML=textarea.value.trim()
        bottomBox.style.opacity=1;
        textarea.value=''
        total.innerHTML='0/200'
    }
    else
    {
        textarea.value=''
        total.innerHTML='0/200'
    }
})

//Enter发布评论
textarea.addEventListener('keyup',function(e)
{
    if(e.key ==='Enter')
    {

        if(textarea.value.trim())
    {
        displayBox.innerHTML=textarea.value.trim()
        bottomBox.style.opacity=1;
        textarea.value=''
        total.innerHTML='0/200'
    }
    else
    {
        textarea.value=''
        total.innerHTML='0/200'
    }
    }
})

//删除
bottomBox.addEventListener('contextmenu',function(e)
{
    console.log(e.offsetX)
    deleteBox.style.left=`${e.offsetX}px`
    deleteBox.style.top=`${e.offsetY}px`
    deleteBox.style.opacity=1;
    e.preventDefault();
    

    deleteBox.addEventListener('click',function()
    {
        deleteBox.style.opacity=0;
        bottomBox.style.opacity=0
        
    })
})

document.addEventListener('click',function()
{
    deleteBox.style.opacity=0;
})
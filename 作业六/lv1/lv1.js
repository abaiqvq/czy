const checkbox = document.querySelectorAll('[type="checkbox"]')
const allCheck = document.querySelector('.allCheck')
const allNotCheck = document.querySelector('.allNotCheck')
const insteadCheck = document.querySelector('.insteadCheck')
//全选
allCheck.addEventListener('click',function()
{
    for(i=0;i<checkbox.length;i++)
    {
        
        checkbox[i].checked=true;
    }
})
//全不选
allNotCheck.addEventListener('click',function()
{
    for(i=0;i<checkbox.length;i++)
    {
        checkbox[i].checked=false;
    }
})
//反选
insteadCheck.addEventListener('click',function()
{
    for(i=0;i<checkbox.length;i++)
    {
        if(checkbox[i].checked)
        {
            checkbox[i].checked=false;
        }
        else
        {
            checkbox[i].checked=true;
        }
    }
})
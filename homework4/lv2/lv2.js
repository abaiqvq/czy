let arr = [[1,[2,3],4],[5,[6,7],8,9]];
function fn(array)
{
    let a = array.reduce((newArr,present) =>
    {
        console.log(newArr);
        return newArr.concat(present)
    },[])
    
    let b = a.reduce((newArr,present) =>
    {
        console.log(newArr);
        return newArr.concat(present)
    },[])
    return b;
}
console.log(fn(arr));
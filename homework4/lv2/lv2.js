let arr = [[1,[2,3],4],[5,[6,[7,11],10],8,9]];

function fn(array)
{
    let a = array.reduce((newArr,present) =>
    {
        if(Array.isArray(present))
        {
            return newArr.concat(fn(present));
        }
        else
        {
            return newArr.concat(present);
        }
    },[])
    return a;
}



console.log(fn(arr));
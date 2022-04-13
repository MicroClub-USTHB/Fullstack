//Fonction to remove an element
function removeElement(arr, e)
{
    for(var i=0; i<arr.length && arr[i] != e; i++)
    {}

    for(let j=i; j<arr.length-1; j++)
    {
        arr[j] = arr[j+1];
    }

    arr.length = arr.length -1;
}

//Fonction to remove the duplicated elements from a sorted array
function removeDuplicate(arr)
{
    for(let i=0; i<arr.length-1; i++)
    {
        var stop=false;
        for(let j=i+1; j<arr.length && !stop; j++)
        {
            while(arr[i] == arr[j]) 
                removeElement(arr, arr[j]); 
            stop = true;
        }
    }
}

arr = [1,1,2,2,2,3,3,4,5];
console.log(arr);
removeElement(arr, 5);
console.log(arr);
removeDuplicate(arr);
console.log(arr);

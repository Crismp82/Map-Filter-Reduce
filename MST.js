function mst(arr){
    return arr.map( function(item){
        return item * 2;
    });
}

const nums = [ 3,5,7,8,4 ];


console.log(mst(nums));
console.log(nums);


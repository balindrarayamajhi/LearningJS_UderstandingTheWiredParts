var arr=[
    1,
    true,
    {
        name:'Balindra',
        address: '1000N 4th st'
    },
    function(name){
        var greetings='Hello';
        console.log(greetings +' '+name+' !');
    },
    'This is a string as an element of the array'
];

console.log(arr);

arr[3](arr[2].name);
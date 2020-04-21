const numOffices = require('../src/numOffices');

test ("Should return 1 office", () => {

    let grid = [];
    grid.push("1111111".split("").map( item => parseInt(item) ) ); 
    grid.push("1111111".split("").map( item => parseInt(item) ) ); 
    grid.push("1111111".split("").map( item => parseInt(item) ) ); 
    grid.push("1111111".split("").map( item => parseInt(item) ) ); 

    expect(numOffices(grid)).toEqual(1);

});

test ("Should return 0 offices", () => {

    let grid = [];
    grid.push("00000".split("").map( item => parseInt(item) ) ); 
    grid.push("00000".split("").map( item => parseInt(item) ) ); 
    grid.push("00000".split("").map( item => parseInt(item) ) ); 
    
    expect(numOffices(grid)).toEqual(0);

});

test ("Should return 9 offices", () => {
    let grid = [];
    grid.push("110110010101".split("").map( item => parseInt(item) ) ); 
    grid.push("010110110100".split("").map( item => parseInt(item) ) ); 
    grid.push("101111011111".split("").map( item => parseInt(item) ) ); 
    grid.push("100100001011".split("").map( item => parseInt(item) ) ); 
    grid.push("111100101011".split("").map( item => parseInt(item) ) ); 
    grid.push("110011100111".split("").map( item => parseInt(item) ) ); 
    grid.push("010101011110".split("").map( item => parseInt(item) ) ); 
    grid.push("001011100101".split("").map( item => parseInt(item) ) ); 
    grid.push("100110001111".split("").map( item => parseInt(item) ) ); 
    grid.push("010110110111".split("").map( item => parseInt(item) ) ); 
    grid.push("111111100110".split("").map( item => parseInt(item) ) ); 
    grid.push("100110110110".split("").map( item => parseInt(item) ) ); 
    grid.push("000111101011".split("").map( item => parseInt(item) ) ); 
    expect(numOffices(grid)).toEqual(9);
});

test ("Should return 7 offices", () => {
    let grid = [];
    grid.push("111111101101".split("").map( item => parseInt(item) ) ); 
    grid.push("111111000011".split("").map( item => parseInt(item) ) ); 
    grid.push("101100111111".split("").map( item => parseInt(item) ) ); 
    grid.push("110101111010".split("").map( item => parseInt(item) ) ); 
    grid.push("110101111100".split("").map( item => parseInt(item) ) ); 
    grid.push("100001111001".split("").map( item => parseInt(item) ) ); 
    grid.push("000011010110".split("").map( item => parseInt(item) ) ); 
    grid.push("010100100101".split("").map( item => parseInt(item) ) ); 
    grid.push("111101101111".split("").map( item => parseInt(item) ) ); 
    grid.push("101101011110".split("").map( item => parseInt(item) ) ); 
    grid.push("111011001110".split("").map( item => parseInt(item) ) ); 
    grid.push("011110010111".split("").map( item => parseInt(item) ) ); 
    grid.push("011111101111".split("").map( item => parseInt(item) ) ); 
    expect(numOffices(grid)).toEqual(7);
});

test ("Should return 16 offices", () => {
    let grid = [];
    grid.push("100100100100".split("").map( item => parseInt(item) ) ); 
    grid.push("011011011011".split("").map( item => parseInt(item) ) ); 
    grid.push("100100100100".split("").map( item => parseInt(item) ) ); 
    grid.push("100100100100".split("").map( item => parseInt(item) ) ); 
    grid.push("011011011011".split("").map( item => parseInt(item) ) ); 
    expect(numOffices(grid)).toEqual(16);
});

test ("Should return 12 offices", () => {
    let grid = [];
    grid.push("101010101111".split("").map( item => parseInt(item) ) );
    grid.push("001000111110".split("").map( item => parseInt(item) ) );
    grid.push("100000111001".split("").map( item => parseInt(item) ) );
    grid.push("000101110101".split("").map( item => parseInt(item) ) );
    grid.push("010010001100".split("").map( item => parseInt(item) ) );
    grid.push("111111100011".split("").map( item => parseInt(item) ) );
    grid.push("100101011001".split("").map( item => parseInt(item) ) );
    grid.push("011100111010".split("").map( item => parseInt(item) ) );
    grid.push("101011010011".split("").map( item => parseInt(item) ) );
    grid.push("110111011111".split("").map( item => parseInt(item) ) );
    grid.push("011100110110".split("").map( item => parseInt(item) ) );
    grid.push("101111101011".split("").map( item => parseInt(item) ) );
    grid.push("111111011011".split("").map( item => parseInt(item) ) ); 
    expect(numOffices(grid)).toEqual(12);
});


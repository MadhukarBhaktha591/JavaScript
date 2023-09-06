/* 
3 ways (that we know about ) to make a string
1. 'single quote string'
2. "double quote string"
3. `backtick string` <----- template string
*/

const someTemplateString = `this is a ${ 3 * 4 } template string ${ 2 + 2 + 1} = ?`;
console.log(someTemplateString);

/*
`this is a template string ${ 2 + 2 } = 4`;
`this is a template string 4 = 4`;
*/
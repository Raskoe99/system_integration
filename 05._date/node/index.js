const date = new Date();
console.log(date);

console.log(Date());

// as unix timestamp
console.log(date.getTime());
console.log(new Date().getTime());


// region specific
console.log('============ Region specific ============')
console.log(new Intl.DateTimeFormat('en-US').format(date));
console.log(new Intl.DateTimeFormat('da-DK').format(date));
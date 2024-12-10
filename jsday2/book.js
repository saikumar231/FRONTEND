let book={
    title:"Java",
    author:"Oracle"
};

function property(obj,key){
    return key in obj;
}

console.log(property(book,"Java"));
console.log(property(book,"year"));
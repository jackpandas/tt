test("Check to see if hello world is contained in body of page", function(){

var hello = window.find('hello world'); 

var bool= false;

if (hello){
    bool=true;
}
equal(hello, true, 'The world has been greeted'); ; 

})
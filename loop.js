// loop.js

/* to be used like jquery to get any element and loop over it
  USAGE OPTIONS:

  loop('#id1')
  loop($('#id2'))
  loop(document.getElementByID('id3'))
  loop(document.getElementsByClassName('class1'))
  loop(document.querySelectorAll('#id4, .class2, input')

*/

//----------------------- START loop.js code ---------------------//

// accepts jQuery object, node list, string selector, then called a setup for each element
var loop = function(selector){
  // if a string is passed in as an element
  if(typeof selector === 'string' || selector instanceof String){
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      example.call(elements[i]);
    }
  // if a single element object is passed in
  } else if(isElement(selector)){
    example.call(selector);
  // if a node list is passed in ex. jQuery $() object
  } else {
    for (var i = 0; i < selector.length; i++) {
      example.call(selector[i]);
    }
  }
}

//Returns true if it is a DOM element
var isElement = function(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

//----------------------- END loop.js code ---------------------//



//------ This is the Example of what will be called ------//
// 'this' in this function will be an indvidual DOM element
var example = function(){
  console.log(this);
}

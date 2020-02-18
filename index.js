var midChild = document.getElementById("items-list").children[2];

var midChildPrevSibling = midChild.previousElementSibling;
var midChildNextSibling = midChild.nextElementSibling;
var midChildPrevSiblingText = midChild.previousSibling;
var midChildNextSiblingText = midChild.nextSibling;
/*console.log(midChild);
console.log(midChildPrevSibling);
console.log(midChildNextSibling);
console.log(midChildPrevSiblingText);
console.log(midChildNextSiblingText);*/

/* var midChildSib = Array.prototype.filter.call(midChild.parentNode.children,function(child){
	return child!=midChild
}); */
var midChildSib = [];

//console.log(midChild.parentNode.children);

midChild.parentNode.querySelectorAll('li').forEach(function(ele){
	if(ele!=midChild){
		midChildSib.push(ele);
	}
});
console.log(midChildSib);
midChildSib.forEach(function(ele){
	ele.style.color="red";
});
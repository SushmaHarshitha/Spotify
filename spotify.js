let list1=document.getElementById("list1")
console.log(list1);
list1.onclick=function(){
    let list11=document.getElementById("list11")
    console.log(list11);
    let res=list11.classList.toggle("true")
    if(res){
        list11.style.display="none"
    }else{
        list11.style.display="block"
    }
}

let list2=document.getElementById("list2")
console.log(list2);
list2.onclick=function(){
    let list22=document.getElementById("list22")
    console.log(list22);
    let res=list22.classList.toggle("true")
    if(res){
        list22.style.display="none"
    }else{
        list22.style.display="block"
        // list2.#i1.style.transition="90"
    }
}

let list3=document.getElementById("list3")
console.log(list3);
list3.onclick=function(){
    let list33=document.getElementById("list33")
    console.log(list33);
    let res=list33.classList.toggle("true")
    if(res){
        list33.style.display="none"
    }else{
        list33.style.display="block"
    }
}

let list4=document.getElementById("list4")
console.log(list4);
list4.onclick=function(){
    let list44=document.getElementById("list44")
    console.log(list44);
    let res=list44.classList.toggle("true")
    if(res){
        list44.style.display="none"
    }else{
        list44.style.display="block"
    }
}
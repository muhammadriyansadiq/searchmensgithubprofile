let userlist = document.querySelector(".user-list")
 let user = document.querySelector("#user")
 let array = [];
 const  getUserdata = async()=>{
try{
const res = await fetch("https://api.github.com/users")
const data = await res.json();
if(data){
    userlist.innerHTML = ""
}
// console.log(data);
data.forEach(element => {
    let ii = ` <li class ="hide"><img class="img" src=${element.avatar_url} alt="">
    <div class="linkandpara">
    <p>${element.login}</p>
    <a class = "linking" href = "${element.html_url}" target = "_blank">${element.html_url}</a></div></li>`
    userlist.insertAdjacentHTML('beforeend', ii);
    array.push(ii)
    // console.log(array);
});
}
catch(error){
    console.log(error);
}
}
// ================search================
let a = document.querySelector("button")
a.addEventListener(("click"),function(){
    let searchTerm = document.querySelector("#user").value // jo input mai value likhi hai wo get karnai k liye
 let filterarray = array.filter((item)=>{ // array wo hai jo har aik api ka data list form mai array mai add hai
let temelemnet = document.createElement('div');
temelemnet.innerHTML = item; // div k ander wo data add kardiya jo array k ander tha list ko div k ander daldya
let value = temelemnet.querySelector('.linkandpara p').textContent;// div ko select mara jo create kiya hai
let connect = temelemnet.querySelector('.linkandpara a').textContent;
return value.toLowerCase().includes(searchTerm) || connect.toLowerCase().includes(searchTerm); // api mai name aur link ki value agar match kartai hai input value sai tu filter ho kar bas wahi data ayee jo match kiya hai
 })
 console.log(filterarray);
 userlist.innerHTML = "";// yeh khali karwaoonga aur filtered kiya hoa data dikhaonga
 filterarray.forEach((filteredItem) => {
    userlist.insertAdjacentHTML('beforeend', filteredItem);
});// filter hoa wa data dikha dya 
})
getUserdata();  





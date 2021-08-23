'use strict';
let addBtn= document.getElementById('addBtn');
let deleteBtn= document.getElementById('deleteBtn');
let showBtn=document.getElementById('showBtn');

let customerName=document.getElementById('name');
let customerAge=document.getElementById('age');
let yesOrNo=document.getElementById('yesOrNo');

let table=document.getElementById('table');
let answer='';
let array=['name','age','live in jordan'];

function Customer(name,age, check)
{
  this.name=name;
  this.age=age;
  this.check=check;
  Customer.objArr.push(this);
}
Customer.objArr=[];
console.log(Customer.objArr);


addBtn.addEventListener('click',addHandler);
function addHandler (e){
  e.preventDefault();
  if(yesOrNo.checked=== true){
    answer='yes';

  }else
  {
    answer='no';
  }
  pushObj();

  localStorage.setItem('customers', JSON.stringify(Customer.objArr)) ;

}

function pushObj(){
  new Customer(customerName.value,customerAge.value,answer);
  console.log(Customer.objArr);
  customerName.value='';
  customerAge.value='';
  yesOrNo.checked=false; 
}
showBtn.addEventListener('click', showHandler);
function showHandler(e){
  getData();
  e.preventDefault();
  makeTable();
}
let tr= document.createElement('tr');
table.appendChild(tr);

for(let i=0; i<array.length ; i++)
{
  let th=document.createElement('th');
  th.textContent=array[i];
  tr.appendChild(th);

}
function makeTable(){

  for(let i=0; i<Customer.objArr.length ; i++)
  {let tr1= document.createElement('tr');
    table.appendChild(tr1);
    let td1=document.createElement('th');
    td1.textContent=Customer.objArr[i].name;
    tr1.appendChild(td1);

    let td2=document.createElement('th');
    td2.textContent=Customer.objArr[i].age;
    tr1.appendChild(td2);

    let td3=document.createElement('th');
    td3.textContent=Customer.objArr[i].check;
    tr1.appendChild(td3);

  }

}


deleteBtn.addEventListener('click',deleteHandler);
function deleteHandler(e){
  e.preventDefault();
  let deleteData= customerName.value;
  let x = document.getElementsByTagName('tr');

  for(let i=0; i<x.length;i++){
    console.log(x[i].rowIndex) ;
  }
  for(let i=0; i<Customer.objArr.length;i++){
    if(Customer.objArr[i].name===deleteData)
    {
      Customer.objArr.splice(i,1);
    }
  }


}
getData();
function getData()
{
  if(localStorage.getItem('customers')){
    let returnedData=JSON.parse(localStorage.getItem('customers'));
    console.log(returnedData);
    for (let i = 0; i < returnedData.length; i++)// cause the returned data is an literal obj holds data
    {
      new Customer(returnedData[i].name,returnedData[i].age, returnedData[i].check);

    }
  }else{
    pushObj();
  }

  new Customer(customerName.value,customerAge.value,yesOrNo.checked);
  localStorage.obj=JSON.stringify(Customer.objArr);
}

 //task1
 let num=parseInt(prompt("Ededi daxil edin"))
 for(let i=0; i<11;i++){
console.log(num*i)
 }
 //task2
 let num2=parseInt(prompt("Ededi daxil edin"))
 let fact = 1;
 for (i = 1; i <= num2; i++) {
     fact *= i;
 }
     console.log(fact)
//task3
 let num3=parseInt(prompt("Ededi daxil edin"))
 let sade=true;
for(let i=2;i<=Math.trunc(num3/2);i++){
if(num3%i==0){
sade=false;
break;
}
}
if(sade){
    console.log("Bu sade ededdir")
}
else{
    console.log("Bu sade eded deyil")

}
//task4
let yas=parseInt(prompt("Yasinizi daxil edin"))
if(yas>=18){
    console.log("Siz qanuni yasdasiniz")
}
else{
    console.log("Siz qanuni yasda deyilsiniz")

}
//task5
let temp=parseInt(prompt("Temperaturu daxil edin"))
if(temp>=30){
    console.log("İsti havada çölə çıx");
}
else{
    console.log("Çıxanda diqqətli olun");
}
task6
let number=parseInt(prompt("Ededi daxil edin"))
if(number>0){
    console.log('Eded musbettir');
}
else if(number<0){
    console.log('Eded menfidir');
}
else{
    console.log("Eded sifirdir")
}
// ve ya
console.log(Math.sign(number))
//task7
let a=parseInt(prompt("Eded daxil edin"))
let b=parseInt(prompt("Eded daxil edin"))
function Toplama(num1,num2){
    let result=num1+num2;
    return result;
}
console.log(Toplama(a,b))
// // task8
let text=prompt("Soz daxil edin")
let letter=prompt("Hansi herfin sayini yoxlamaq isetyirsiniz")
let count=0;
    console.log(text.includes(letter))
task9
let date = new Date();
console.log(date)
//task10
let vaxt=parseInt(prompt("Saniyeni daxil edin"))
let vaxtSalise=vaxt*1000;
setTimeout(() => {
 alert("Vaxt doldu!")
  },vaxtSalise);
  //task11

//task12
let eded1=parseInt(prompt("Eded daxil edin"));
let eded2=parseInt(prompt("Eded daxil edin"));
let eded3=parseInt(prompt("Eded daxil edin"));
function Average(a,b,c){
    let result=(a+b+c)/3;
    return result;
}
console.log(Average(eded1,eded2,eded3))
// //task13
let number1=parseInt(prompt("Eded daxil edin"));
let number2=parseInt(prompt("Eded daxil edin"));
let number3=parseInt(prompt("Eded daxil edin"));
let number4=parseInt(prompt("Eded daxil edin"));
let number5=parseInt(prompt("Eded daxil edin"));
let array=[];
array.push(number1)
array.push(number2)
array.push(number3)
array.push(number4)
array.push(number5)
console.log(Math.max(...array))
console.log(Math.min(...array))
//task14
let x=parseInt(prompt("Eded daxil edin"));
let y=parseInt(prompt("Eded daxil edin"));
let z=parseInt(prompt("Eded daxil edin"));
let arrayQarisiq=[];
arrayQarisiq.push(x)
arrayQarisiq.push(y)
arrayQarisiq.push(z)
let arrayCut=[];
let arrayTek=[];
for(let i=0;i<arrayQarisiq.length;i++){
    if(arrayQarisiq[i]%2==0){
        arrayCut.push(arrayQarisiq[i])
    }
    else{
        arrayTek.push(arrayQarisiq[i])
    }
}
console.log(arrayTek);
console.log(arrayCut);
//task15
let kitabKataloqu=[
    {
       ' basliq':"The Little Prince",
' muellif':'Antoine de Saint-Exupéry',
'tarix': 1943
    },
]
let elaveOlunanBasliq=prompt("Basliq elave edin");
let elaveOlunanMuellif=prompt("Muellifi elave edin");
let elaveOlunanTarix=prompt("Tarix elave edin");
let elaveObj={
    'basliq':elaveOlunanBasliq,
   ' muellif':elaveOlunanMuellif,
    'tarix':elaveOlunanTarix
}

kitabKataloqu.push(elaveObj)
kitabKataloqu.map((kitab)=>console.log(kitab));
//16
let person= {
}
let yas1=parseInt(prompt("yasi daxil edin"));
if(yas>=18){
    person.yas=yas1
    let ad=prompt("Adi daxil edin")
    person.ad=ad
    let soyad=prompt("Soyadi daxil edin")
    person.soyad=soyad
    let seher=prompt("Seheri daxil edin")
    person.seher=seher
}
else{
    alert('Yasiniz catmadigi ucun siyahiya ealve oluna bilmedinz')
}
console.log(person)
//17
let setir1=parseInt(prompt("Birinci ededi daxil edin"))
let setir2=parseInt(prompt("Ikinci ededi daxil edin"))
let Setir1=[]
let Setir2= []
Setir1.push(setir1)
Setir2.push(setir2)
let Setir3=[...Setir1,...Setir2]
console.log(Setir3)
//18
let name1=prompt("Birinci obyektin adini daxil edin")
let lastName1=prompt("Birinci obyektin soyadini daxil edin")
let name2=prompt("Ikinci obyektin adini daxil edin")
let lastName2=prompt("Ikinci obyektin soyadini daxil edin")
let obj1={
    'name':name1,
    'lastName':lastName1
}
let obj2={
    'nameObj2':name2,
   ' lastNameObj':lastName2
}
let {name,lastName}=obj1
let {name2Obj,LastnameObj2}=obj2
let obj3={...obj1,
    ...obj2}
console.log(obj3)



















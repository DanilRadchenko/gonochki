// let a,b,sum
// alert('sredaref ')
// a=+prompt('vvedyte shyslo1=')
// b=+prompt('vvedyte shyslo2=')
// sum=(a+b)/2
// console.log('sredaref=',sum)
// alert('sredaref='+sum)


// let a,b,plosh
// alert('ptaymoug')
// a=+prompt('vvedyte shyslo1=')
// b=+prompt('vvedyte shyslo2=')
// if (b=a) b=+prompt('ne vvodyte odinak hysla=')
// plosh=a*b
// console.log('plosh ptyamoug=',plosh)
// alert('plosh ptyamoug='+plosh)



// let value = true;
// alert(typeof + value);

// value=String(value);
// alert(typeof + value)

// let str="123"
// alert(typeof + str);

//  let num=Number(str) 
 

// alert (Boolean ("Hello"));
// alert (Boolean(""));


// let a=document.querySelector('h1')
// a.style.color='green'
// a.style.fontSize='15px'

// function changecolor(){
//     a.style.color='red'
// }
// function changefontSize(){
//     a.style.fontSize='40px'
// }

// DOPI

// let diam ,p=3.14,dl //zadan diametr naiti dlinu okrugnosti
// alert('go shytat')
// diam=+prompt('vvedyte diametr')
// dl=p*diam
// console.log('shytaem dlinu')
// console.log('dlina=',dl)
// alert('shytaem dlinu')
// alert('dlina='+dl)
 

// let a,v,plosha
// a=+prompt('vvedyte dlynu rebra')
// v=a*a*a
// plosha=6*(a*a)
// console.log('shytaem obiom i ploshu')
// console.log('obiom=',v,'plosha=',plosha)
// alert('shytaem obiom i ploshu')
// alert('obiom='+v+'      plosha='+plosha)


// let a,b,c,v,s
// a=+prompt('vvedyte dlinu rebra 1')
// b=+prompt('vvedyte dlinu rebra 2')
// c=+prompt('vvedyte dlinu rebra 3')
// v=a*b*c
// s=2*(a*b+b*c+a*c)
// console.log('shytaem obiom i ploshu')
// console.log('obiom=',v,'plosha=',s)
// alert('shytaem obiom i ploshu')
// alert('obiom='+v+'      plosha='+s)

// let dlina,s,r,p=3.14
// r=+prompt('vvedyte  radius')
// s=p*(r*r)
// dlina=2*p*r
// console.log('shytaem dlinu i ploshu')
// console.log('dlina=',dlina,'   plosha=',s)
// alert('shytaem dlinu i ploshu')
// alert('dlina='+dlina+'       plosha='+s)

// let a,b,sum
// alert('sredaref ')
// a=+prompt('vvedyte shyslo1=')
// b=+prompt('vvedyte shyslo2=')
// sum=(a+b)/2
// console.log('sredaref=',sum)
// alert('sredaref='+sum)


// let a,b,plus,minus,mnog,del
// a=+prompt('vvedyte shyslo    ne vvodyte 0')
// b=+prompt('vvedyte shyslo2    ne vvodyte 0')
// plus=Math.abs(a)+Math.abs(b)
// minus=Math.abs(a)-Math.abs(b)
// mnog=Math.abs(a)*Math.abs(b)
// del=Math.abs(a)/Math.abs(b)
// console.log('shytaem dlinu i ploshu')
// console.log('sum=',plus,'   raznitha=',minus,'mnogenie=',mnog,'delenie=',del)
// alert('shytaem ')
// alert('sum='+plus)
// alert('raznitha='+minus)
// alert('mnogenie='+mnog)
// alert('delenie='+del)











































// let a,b,rez
// a=+prompt('vvedyte hyslo')
// console.log('a=',a)

// function protivopol(){
//     rez=-a
//     console.log('-a=',rez)
//     let b=document.querySelector('.main').innerHTML=`<h3> -a= ${rez} <h3>`
    
// }
// function quadrat(){
//     rez=Math.pow(a,2)
//     b=a**2
//     console.log('a^2',rez)
//     console.log(`${a}^2`,rez)
//     let d=document.querySelector('.main').innerHTML=`<h3>  a^2=${rez}`

// }
// function okruglenye(){
//     rez=Math.round(a)
//     console.log('okruglenye',rez)
//     let f=document.querySelector('.main').innerHTML=`<h3> okrug=${rez}`
// }
// function posledzif(){
//     rez=a%10
//     console.log('posled chyslo =',rez)
//     let r=document.querySelector('.main').innerHTML=`<h3> последняя цифра=${rez}`
// }


// let age
// a=+prompt('vvedyte vozratst')
// if (a<14 || a>=90)  {
//     alert('vash vozrast ne podhodyt')
// }else{
//     alert('smotryte')
// }





// let odin,dva
// odin=+prompt('vvedyte chyslo')
// dva=+prompt('vvedyte chyslo2')
// let mal=(odin+dva<4)?alert('malo'):alert('mnogo')



// let a,b
// a=+prompt('vvedyte chyslo')
// b=+prompt('vvedyte chyslo2')
// if (a<b) {
//     alert(b+'    '+a)
// }
// else {
//     alert(a+'    '+b)
// }


// let x 
// x=+prompt('vvedyte chyslo')
// if (x<=0) {
//     alert(-x)
// }
// if (0<x && x<2) {
//     alert(x*x)
// }
// if (x>=2) {
//     alert(4)
// }




// let a,b,c 
// a=+prompt('vvedyte chyslo')
// b=+prompt('vvedyte chyslo')
// c=+prompt('vvedyte chyslo')
// if (a<b && a<c && c<b ) {
//         alert(b+'  '+c+'  '+a)
// }
// if (a<b && a<c && b<c ) {
//     alert(c+'  '+b+'  '+a)
// }
// if (a>b && a<c && c<b ) {
//     alert(c+'  '+a+'  '+b)
// }
// if (a>b && a>c && c<b ) {
//     alert(a+'  '+b+'  '+c)
// }
// if (a<b && a>c && b>c ) {
// alert(b+'  '+a+'  '+c)
// }
// if (a>b && a>c && c>b ) {
// alert(a+'  '+c+'  '+b)
// }


(function(elid, width, height, speed, strength){
     canvas = document.querySelector(elid),
            ctx = canvas.getContext("2d"),
            pos = 0, blocks = [];
    canvas.width = width; canvas.height = height;
    ctx.fillStyle = "black";
    let game = setInterval(function(){
        if( Math.random() < strength) blocks.push([Math.random()*(width-10),-10]);
        ctx.clearRect(0,0,width,height);
        ctx.fillRect(pos,height-50,10,40);
        for(let i = 0; i < blocks.length; i++){
            ctx.fillRect(blocks[i][0],blocks[i][1],10,10);
            if( blocks[i][1] > height - 60 && blocks[i][1] < height - 10 && Math.abs( pos - blocks[i][0]) < 10 ){
                clearInterval(game);
                alert("Game over. You have " + Math.floor(1000 * strength) + " points.");
            }
            if( blocks[i][1] > height - 5 ){
                blocks.splice( i, 1);
                i--;
            } else {
                blocks[i][1] += 5;
            }
        }
        strength += 0.001;
    },speed);
    document.addEventListener('mousemove', function (e) {
         pos = (e.pageX > 0) ? ((e.pageX < width) ? e.pageX : width-10) : 0;
    }, false);
})("#canvas",400,300,33,0.05);
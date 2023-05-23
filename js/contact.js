//console.log("Hello saya Student");
// alert("Good morning today");
//document.write("batch 47");

//VAR
//LET
//CONST

//VAR : bisa dideklarasikan ulang dan bisa diubah value atau datanya
// var nama ="fahmi";
// var nama ="fajar";
// console.log(nama);

//LET : tidak bisa di deklarasikan ulang tetapi value datanya bisa kita rubah
// let pemerintah="golkar";
//     pemerintah="pdi";
//     console.log(pemerintah);

//CONST : tidak bisa di deklarasikan ulang dan tidak bisa diubah value/datanya
// const laptop="Asus";
// console.log(laptop);

//data type
// let nama="fahmi burhan";//string
// let umur = 21;//number
// let isMaried= false;//boolean

//Nama saya fahmi umur saya 21 tahun
// console.log(`Nama saya ${nama} umur saya ${umur} tahun`);
// console.log("Nama saya",nama,"umur saya",umur,"tahun");

//Operator (tambah,kurang,kali,bagi)
// let x =10;
// let y =20;

// let result=x - y;
// console.log(result);

//condition
//  let buah="jeruk";
 
//  if(buah == "jeruk"){
//     console.log("saya suka makan jeruk");
//  }else if(buah == "mangga"){
//     console.log("saya  suka makan mangga");
//  }else if(buah == "kelengkeng"){
//     console.log("saya suka makan kelengkeng");
//  }else{
//     console.log("saya tidak suka makan buah")
//  }
 
//function
// function hello(){
//     let x = 5;
//     let y =10;
    
//     let result= x + y;
//     console.log(result);
// }

// hello();

// function hello2(x,y){
//     console.log(x);
//     console.log(y);

//     let result=x + y;
//     console.log(result);
// }

// hello2(5,5);

//camel case
// function namaSaya(name){
//     console.log(name);
// }
// namaSaya("Fahmi Burhan")

function submitData(){
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-number").value;
    let subject =document.getElementById("input-subject").value;
    let massage =document.getElementById("input-massage").value;

    if(name == ""){
        return alert("Nama harus diisi!");
    }else if(email == ""){
        return alert("Email harus diisi!");
    }else if(phone == ""){
        return alert("Nomor phone harus diisi!");
    }else if(subject == ""){
        return alert("Subjek harus diisi!");
    }else if(massage == ""){
        return alert("Massage harus diisi!");
    }
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(massage);


    let emailReceiver ="fahmiburhan56@gmail.com";

    let a =document.createElement('a');
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, nama saya ${name}, ${massage}.Silahkan kontak saya di nomor ${phone}.`;
    a.click();

    
    let emailer={
        name,
        email,
        phone,
        subject,
        massage,

    };

    console.log(emailer);
}
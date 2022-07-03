var heartL = document.getElementsByClassName("ico")
for (let i=0; i< heartL.length;i++){
heartL[i].onclick = function() {myFunction()};
function myFunction() {
    source = heartL[i].getAttribute("src");
    if (source == "./data/ico/empty-heart-ico.jpeg"){
  heartL[i].setAttribute("src","./data/ico/heart-ico-red.jpeg")
    }else if ( source == "./data/ico/heart-ico-red.jpeg"){
        heartL[i].setAttribute("src","./data/ico/empty-heart-ico.jpeg")
    }
}
}

var totP = document.getElementById("TP")
var valtotP = parseInt(totP.innerHTML)
valtotP=0
// console.log(valtotP)

var plus1 = document.getElementsByClassName("add")
var qte1 = document.getElementsByClassName("qte")
var puttc1 = document.getElementsByClassName("PUTTC")

for (let i = 0; i < plus1.length; i++) {
    console.log (puttc1[i].innerText)
    let val = parseInt(puttc1[i].innerText)
    plus1[i].onclick = function () {adding()}
    function adding() {
        console.log (puttc1[i].innerHTML)
    let val = parseInt(puttc1[i].innerHTML)
        let t=parseInt(qte1[i].innerHTML)
        t += 1
        qte1[i].Value = t
        qte1[i].innerHTML = qte1[i].Value
        valtotP+= val
        console.log(valtotP)
        console.log(val)
        console.log(valtotP.value)
        totP.innerHTML = valtotP

    }
}

var moins1 = document.getElementsByClassName("rem")
var qte1 = document.getElementsByClassName("qte")
for (let i = 0; i < plus1.length; i++) {

    console.log (puttc1[i].innerText)
    let val = parseInt(puttc1[i].innerText)

    // console.log(qte1[i].Value)
    moins1[i].onclick = function () {minus1()}
    function minus1() {
        let t=parseInt(qte1[i].innerHTML)
        t -= 1
        if (t<0){
            t=0
            return
        }
        qte1[i].Value = t
        qte1[i].innerHTML = qte1[i].Value

        valtotP-= val
        console.log(valtotP)
        console.log(val)
        console.log(valtotP.value)
        totP.innerHTML = valtotP
    }
}



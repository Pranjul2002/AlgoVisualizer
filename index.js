let colId=["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10","item11","item12","item13","item14","item15","item16","item17","item18","item19","item20","item21","item22"];
let heightArray=[];


for(let i=0;i<22;i++){
    heightArray[i]=Math.floor((Math.random()*600)+10);
    console.log(colId[i]);
    let col=document.getElementById(colId[i]);
    col.style.backgroundColor="#50c878";
    col.style.height=heightArray[i]+"px";
}

console.log(heightArray);

async function bubbleSort(){
    for(let i=0;i<heightArray.length;i++){
        for(let j=0;j<(heightArray.length-i-1);j++){

            await sleep(100);
            if(heightArray[j]>heightArray[j+1]){
                swapHeight(heightArray,j);
                swapColoumnHeight(heightArray,j);
            }
        }
    }
    console.log(heightArray);
}

function swapHeight(heightArray,j){
    let temp=heightArray[j];
    heightArray[j]=heightArray[j+1];
    heightArray[j+1]=temp;
}

function swapColoumnHeight(heightArray,j){
    let a=colId[j];
    let b=colId[j+1];

    let e1=document.getElementById(a);
    let e2=document.getElementById(b);

    let h1=e1.clientHeight;
    let h2=e2.clientHeight;

    e1.style.height=h2+"px";
    e2.style.height=h1+"px";
}

function sleep(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}
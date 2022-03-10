const date=document.querySelector("#date");

function getDate() {
    const year=String(new Date().getFullYear());
    const month=String(new Date().getMonth());
    const day=new String(new Date().getDate());
    date.innerText=`${year}/${month}/${day}`;
}

getDate();
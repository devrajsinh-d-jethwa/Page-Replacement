document.getElementById("submit").addEventListener("click",()=>{
    const algorithm = document.getElementById("algo").value;

    if(!algorithm)
    {
        alert("Plese Enter the values first!");
        return;
    }
    if(localStorage.getItem("algorithm") !== null)
        localStorage.removeItem("algorithm");
    localStorage.setItem("algorithm",algorithm);

    window.location.href = "/page-replacement-display";
});

document.getElementById("algo").addEventListener("focus",(e)=>{
    e.target.value = null;
})
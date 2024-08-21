document.addEventListener("DOMContentLoaded",()=>{

    const algorithm = localStorage.getItem("algorithm");
    localStorage.removeItem("algorithm");
    document.title = `${algorithm} Page Replacement Algorithm`;
    document.getElementById("head").innerText = `${algorithm} Page Replacement Algorithm`;
    document.title = `${algorithm} Page Replacement Algorithm`;

    //Process String 
    const process = [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1];

    //Number of Frames
    const frames = 3;

    const container = document.getElementById("container");
    const header = document.getElementById("header");


    const div = document.createElement("div");
    div.textContent = "Page Reference String : ";

    const div1 = document.createElement("div");
    div1.textContent = data();

    const div2 = document.createElement("div");
    div2.textContent = `Number of Frames : ${frames}`;

    header.appendChild(div);
    header.appendChild(div1);
    header.appendChild(div2);

    function data()
    {
        let str = "";
        process.forEach((value,index)=>{
            str += value;
            if(index != process.length - 1)
                str+= ", ";
        })
        return str;
    }
    function makeStructure()
    {
        const section = document.createElement("section");
        for(let i=0;i<=frames+1;i++)
        {
            const div = document.createElement("div");
            let text = "";
            if(i == 0)
            {
                text = "Page Request";
                //div.style.height = "60px"
            }
            else if(i > frames)
            {
                text = "Page Fault(F)"
                //div.style.height = "60px";
            }
            else
            {
                text = `Frame ${i}`;
                //div.style.height = "40px";
            }
            div.textContent = text;
            section.appendChild(div);    
        }
        container.appendChild(section);
    }
    makeStructure();

    const frameArray = [];
    for(let i=0;i<frames;i++)
    {
        frameArray.push(-1);
    }
    let counter = 0;
    function processNext(index) 
    {
        if (index >= process.length)
        {
            // All processes are done, return
            return;
        }
    
        // Display the current process on UI
        let n = 0;
        let faultValue = "";
        let exist = false;
        let colorValue = "";
        const section = document.createElement("section");
        for (let j = 0; j <= frames + 1; j++) 
        {
            let text = "";
            const div = document.createElement("div");
            if (j === 0) 
            {
                text = process[index];
                div.style.height = "43px";
                div.style.width = "35px";
                div.textContent = text;
            } 
            else if (j > frames)
            {
                text = faultValue;
                div.style.height = "43px";
                div.style.width = "35px";
                div.textContent = text;
            } 
            else
            {
                if(algorithm === "FIFO")
                {
                    if (n === 0) 
                    {
                        for (let k = 0; k < frameArray.length; k++) 
                        {
                            if (frameArray[k] === process[index]) 
                            {
                                exist = true;
                                break;
                            }
                        }
                        if (!exist) 
                        {
                            alert(`Process : ${process[index]} not exist!`);
                            let value = counter % frames;
                            colorValue = value;
                            alert(`Replaced with : ${process[value]}`);
                            frameArray[value] = process[index];
                            counter++;
                            faultValue = "F";
                        }
                        else
                            alert(`Process : ${process[index]} exist`);
                        n++;
                    }
                }
                else
                {
                    if(n === 0)
                    {
                        for (let k = 0; k < frameArray.length; k++) 
                        {
                            if (frameArray[k] === process[index]) 
                            {
                                exist = true;
                                break;
                            }
                        }
                        if(!exist)
                        {
                            alert(`Process : ${process[index]} not exist!`);
                            const tempArray = [...frameArray];
                            if(algorithm === "Optimal")
                            {
                                for(let w=index;w<process.length;w++)
                                {
                                    if(tempArray.length > 1)
                                    {
                                        let index = tempArray.indexOf(process[w]);
                                        if(index != -1)
                                            tempArray.splice(index,1);
                                    }
                                    else
                                        break;
                                }
                            }
                            else
                            {
                                for(let w=index;w>=0;w--)
                                {
                                    if(tempArray.length > 1)
                                    {
                                        let index = tempArray.indexOf(process[w]);
                                        if(index != -1)
                                            tempArray.splice(index,1);
                                    }
                                    else
                                        break;
                                }
                            }
                            if(tempArray.length === 1)
                            {
                                let index1 = frameArray.indexOf(tempArray[0]);
                                if(index1 !== -1)
                                {
                                    colorValue = index1;
                                    alert(`Replaced with : ${process[index1]}`);
                                    frameArray[index1] = process[index];
                                }
                            }
                            else
                            {
                                let value = counter % frames;
                                colorValue = value;
                                alert(`Replaced with : ${process[value]}`);
                                frameArray[value] = process[index];
                            }
                            counter++;
                            faultValue = "F";
                        }
                        else
                            alert(`Process : ${process[index]} exist`);
                        n++;
                    }
                }
                if(frameArray[j-1] === -1)
                    text = "";
                else
                {
                    text = frameArray[j - 1];
                    if(j - 1 === colorValue)
                    {
                        div.style.backgroundColor = "purple";
                        div.style.fontWeight = "550";
                    }
                }
                div.style.height = "24px";
                div.style.width = "35px";
                div.textContent = text;
            }
            section.appendChild(div);
        }
        container.appendChild(section);
    
        setTimeout(() => {
            if(index+1 < process.length)
            {
                alert(`Process : ${process[index+1]} comes`);
            }
            else
            {
                const container1 = document.getElementById("container1");
                const div = document.createElement("div");
                div.textContent = `Total Number of Page Faults : ${counter}`;
                container1.appendChild(div);
            }
            processNext(index + 1);
        }, 500); 
    }
    setTimeout(()=>{
        alert(`Process : ${process[0]} comes`);
        processNext(0);
    },3000);
});
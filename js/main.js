const date = new Date();

const yrear = document.getElementById("year");

yrear.innerHTML = date.getFullYear();


// برمجة شات البوت

// هذا الكود وظيفته يظهر لنا الدردشة بمجرد الضغط على دردش معنا

let coll = document.getElementsByClassName("collapsible");

for(let i = 0; i < coll.length; i++)
{
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let content = this.nextElementSibling;

        if(content.style.maxHeight)
        {
            content.style.maxHeight = null;
        }
        else
        {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


function getTime()
{
    let today = new Date();

    hours     = today.getHours();
    minutes   = today.getMinutes();

    if(hours < 10)
    {
        hours = "0" + hours;
    }

    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage()
{
    let Message = "مرحبا أنا مساعدك الأفتراضي إذا بغيت أي مساعدة كلمني و راح أحاول أساعدك باللي أقدر عليه, تحياتي و تقديري";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + Message + '</span></p>';


    let time = getTime();

    $("#chat_timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(true);
}


firstBotMessage();


function getHardResponse(userText)
{
    let botResponse = getBotResponse(userText);
    let botHtml     = '<p class="botText"><span>' + botResponse + '</span></p>';

    $("#chatbox").append(botHtml);

    document.getElementById("chat_bar_bottom").scrollIntoView(true);
}


function getResponse()
{
    let userText = $("#textInput").val();

    if(userText == "")
    {
        userText = '<i style="color: #fff;" class="fa fa-fw far fa-heart"></i>';
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);

    document.getElementById("chat_bar_bottom").scrollIntoView(true);

    setTimeout(() =>{
        getHardResponse(userText);
    }, 1000);
}


function btnSendText(sampleText)
{
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);

    document.getElementById("chat_bar_bottom").scrollIntoView(true);
}

function sendBtn()
{
    getResponse();
}

function heartBtn()
{
   let userHtml = '<i style="color: #fff;" class="fa fa-fw far fa-heart"></i>';
    getResponse(userHtml);
}


$("#textInput").keypress(function(e){

    if(e.which == 13)
    {
        getResponse();
    }
});

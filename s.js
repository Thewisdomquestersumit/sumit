!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="parent">
        <button id="bt1">Button1</button>
        <button id="bt1">Button2</button>
        <p id="para1">Para1</button>
        <p id="para2">Para2</button>
    </div>
    <script>
        document.getElementById("parent").addEventListener("click",function(event){
            if (event.target.tagnName==="BUTTON"){
                alert(event.target.innerHTML+ "was clciked");
            }
            if (event.target.tagnName==="p"){
                event.target.style.color="blue";
            }
        });
    </script>
</body>
</html>
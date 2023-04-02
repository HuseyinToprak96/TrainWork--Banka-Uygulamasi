
function getLanguage(){
    var l=languageId
    return l
}

function appendObjects(top,...objects){
objects.forEach((obj)=>{
    top.appendChild(obj)
})
return top
}
function createObject(tag,className,id,innerText){
var newTag=document.createElement(tag)
if(className!="")
newTag.className=className
if(id!="")
newTag.id=id
if(innerText!="")
newTag.innerText=innerText
return newTag
}

function createInput(type,className,id,placeHolder){
var input=document.createElement("input")
input.type=type
if(className!="")
input.className=className
if(id!="")
input.id=id
if(placeHolder!="")
input.placeholder=placeHolder
return input
}


const navProperties=[
{
    name:"link1Content",
    link:"https://www.kuveytturk.com.tr"
},
{
    name:"link2Content",
    link:"https://www.kuveytturk.com.tr/hakkimizda"
},
{
    name:"link3Content",
    link:"https://www.kuveytturk.com.tr/hakkimizda/musteri-memnuniyeti/iletisim"
}
]

const leftMenuLink=[
    {
        name:"link1",
        function:1,
        isAdmin:false
    },
    {
        name:"link2",
        function:2,
        isAdmin:false
    },
    {
        name:"link3",
        function:3,
        isAdmin:false
    },
    {
        name:"link4",
        function:4,
        isAdmin:false
    },
    {
        name:"link5",
        function:5,
        isAdmin:true
    },
    {
        name:"link6",
        function:6,
        isAdmin:true
    },
    {
        name:"link7",
        function:7,
        isAdmin:false
    }
]
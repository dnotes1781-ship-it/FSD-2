const sub = {fsd:[{Topic:'html',course:'Beginner',content:['tags','table','form']},
{
    Topic:"css",course:"begginer",content:["tags",'table','form']
}

]
}
for(var x of sub.fsd)
{
    console.log(x.Topic)
    console.log(x.course)
    console.log(x.content)
}
function changecolor()
{
	var button=document.getElementById('btn1');
	button.style.backgroundColor="red";
	button.innerText="already clicked";

}

function greetings()
{
	var time=new Date();
	var hours=time.getHours();
	var minutes=time.getMinutes();
	var msg;

	if(hours<12)
	{
		msg="Good Morning! \n current Time="+hours +":" +minutes;
	}
	else if(hours<16)
	{
		msg="Good Afternoon!\ncurrent Time="+hours +":" +minutes;
	}
	else
	{
		msg="Good Evening! \n current Time="+hours +":" +minutes;
	}
	window.alert(msg);
}

function sum()
{
	var num1=parseFloat(document.getElementById("t1").value);
	var num2=parseFloat(document.getElementById("t2").value);
	var sum=num1+num2;
	var textbox=document.getElementById("t3");
	textbox.value=sum;

}
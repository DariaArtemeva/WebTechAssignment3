
var X = [0];
var Y1 = [0];
var Y2 = [1];

var pX = [];
var pY1 = [];
var pY2 = [];

var line1, line2, data1, data2, source;

var updateData = true;
var sinSh = true;
var cosSh = true;

var source = new EventSource("http://old.iolab.sk/evaluation/sse/sse.php");


function loadData()
{
  source.addEventListener("message", function(e)
  {
    listenerFunctionContent(e);
	});
}


function stopLoading()
{
  updateData = false;
 
  pX = X.slice();
  pY1 = Y1.slice();
  pY2 = Y2.slice();
  
}
function pltSin()
{
  if(sinSh == true)
  {
    sinSh = false;
  }
  else
  {
    sinSh = true;
  }

  myCanvas();
}

function pltCos()
{
  if(cosSh == true)
  {
    cosSh = false;
  }
  else
  {
    cosSh = true;
  }

  myCanvas();
}
function listenerFunctionContent(e)
{
  var data = JSON.parse(e.data);
  document.getElementById("onloadData").innerHTML = e.data;

  var sliderVal = sessionStorage.getItem("sliderValue");

  if(+data.x == 0)
  {
    Y1[0] = (data.y1);
    Y2[0] = (data.y2);
  }
  else
  {
    X.push((data.x));
    Y1.push(sliderVal*(data.y1));
    Y2.push(sliderVal*(data.y2));
  }

  if(updateData == true)
  {
    myCanvas();
  }
  if(updateData == false){
    return -1;
  }
}

function myCanvas()
{
  line1 = {
    x: (updateData == true) ? X : pX,
    y: (updateData == true) ? Y1 : pY1,
    type: 'line',
    name: 'Sin',
    line: {
      color: 'red',
      width: 2
    }
  };

  line2 = {
    x: (updateData == true) ? X : pX,
    y: (updateData == true) ? Y2 : pY2,
    type: 'line',
    name: 'Cos',
    line: {
      color: 'blue',
      width: 2
    }
  };

  data1 = [line1];
  data2 = [line2];

  var layout = {
    title: 'Plotly',
    showlegend: true
  };

  Plotly.newPlot(graph, [], layout);

  if(sinSh == true && cosSh == true)
  {
    Plotly.addTraces(graph, data1);
    Plotly.addTraces(graph, data2);
  }
  else if(sinSh == true && cosSh == false)
  {
    Plotly.addTraces(graph, data1);
  }
  else if(sinSh == false && cosSh == true)
  {
    Plotly.addTraces(graph, data2);
  }
}
function sliderClick(){

    var sliderItem= document.getElementById('slider');
    
    if(sliderItem.checked){
      document.getElementById("sliderdiv").style.opacity = 1;
    }else{
      document.getElementById("sliderdiv").style.opacity = 0;
  }
  }
  
  function inputClick(){
  
    var inputItem = document.getElementById('input');
   
    if(inputItem.checked){
      document.getElementById("inputdiv").style.opacity = 1;
    }else{
      document.getElementById("inputdiv").style.opacity = 0;
    }
  }
  
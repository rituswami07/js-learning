window.arr = [];



function switchPage(pageId) {


    var a =  
      `<div class="add-box" style="height:500px">
    <div class="heading-block">
      <h2>Information of School</h2>
      <p>Add information</p>
    </div>
    <div class="input">
    Student Name : <input class="input-box" id="name" type="text" /><br/><br/>

    Father Name : <input class="input-box" id="name1" type="text" /><br/><br/>
    
    Mother Name : <input class="input-box" id="name2" type="text"/><br/><br/>
    
    Class      : <input class="input-box" id="name3" type="text" /><br/><br/>

    Roll no   : <input class="input-box" id="name4" type="text" /><br/><br/>

    Id       : <input class="input-box" id="name5" type="text" /><br/><br/>

    </div><br/><br/>

    <button class="submit-btn" onclick="subMit()">Submit</button>
      <div id="result"></div>
    <div class="img-1">
     <img src="th.jpeg-6" width="300px" height="300px">
  </div>`


  var b =  `<div class="add-box" style="height:500px">
  <div class="heading-block">
    <h2>Information of School</h2>
    <p>Edit information of school</p>
  </div>
  <div class="input">
  Student Name : <input class="input-box" id="name" type="text" /><br/><br/>

  Father Name : <input class="input-box" id="name1" type="text" /><br/><br/>
  
  Mother Name : <input class="input-box" id="name2" type="text"/><br/><br/>
  
  Class      : <input class="input-box" id="name3" type="text" /><br/><br/>

  Phone no   : <input class="input-box" id="name4" type="text" /><br/><br/>

  Id       : <input class="input-box" id="name5" type="text" /><br/><br/>

  </div><br/><br/>

  <button class="submit-btn" onclick="subMit()">Submit</button>
    <div id="result"</div>
  <div class="img-1">
   <img src="th.jpeg-6" width="300px" height="300px">
   
 </div>
 </div>`

  var c = `<div class="list-box">
  <h2>List of Student</h2>
  <p>Make a list of school student</p>

 <div class="table">
  <table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Roll no</th>
    </tr>
    <tr>
      <td>Peter</td>
      <td>Griffin</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Amit</td>
      <td>Sharama</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Babita</td>
      <td>Swanson</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Divya</td>
      <td>Shigh</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Joe</td>
      <td>Brown</td>
      <td>5</td>
    </tr>
  </table>
  </div>
 </div>`


 var d = `<div class="last-box">
           <h2>Show the delete button</h2>
           <div class="delet-btn">Delete</div>
         </div>`

    if (pageId == 0) {
        
      document.getElementById("demo").innerHTML = a;
    } else if (pageId == 1) {
      document.getElementById("demo").innerHTML = b;
    } else if (pageId == 2) {
      list();
    } else if (pageId == 3) {
      document.getElementById("demo").innerHTML = d;
    }

}

function subMit() {
  let name = document.getElementById("name").value;


  let fname = document.getElementById("name1").value;


  let mname = document.getElementById("name2").value;


  let cl = document.getElementById("name3").value;


  let roll = document.getElementById("name4").value;


  let id = document.getElementById("name5").value;

  let obj = {
    Student : name,
    Fathername  : fname,
    Mname   : mname,
    Class   : cl,
    Roll : roll,
    Id    : id
  };
  window.arr.push(obj);
 
}

function list(){
  let text = "";

  var html = "<table border='1px solid>";
  html = "<tr>";

  for (let i = 0; i < window.arr.length; i++){
    var studentRecord = window.arr[i];
   text = studentRecord.Student + "<br>" + studentRecord.Fathername + "<br>" + studentRecord.Mname + "<br>" + studentRecord.Class + "<br>" + studentRecord.Roll + "<br>" + studentRecord.Id + "<br>";
   html = "<td>" + window.arr[i]+ "</td>";
   html = "</tr>";
   html = "</table>";
          ///console.log(window.arr[i].Student)
  }

  document.getElementById("demo").innerHTML = text;

}

 switchPage(pageId(2));




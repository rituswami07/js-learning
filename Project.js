function switchPage(pageId) {


    var a =  `<div class="add-box" style="height:500px">
    <div class="heading-block">
      <h2>Information of School</h2>
      <p>Add information</p>
    </div>
    <div class="input">
    Student Name : <input class="input-box" id="name" type="text" /><br/><br/>

    Father Name : <input class="input-box" id="name" type="text" /><br/><br/>
    
    Mother Name : <input class="input-box" id="name" type="text"/><br/><br/>
    
    Class      : <input class="input-box" id="name" type="text" /><br/><br/>

    Phone no   : <input class="input-box" id="name" type="text" /><br/><br/>

    Id       : <input class="input-box" id="name" type="text" /><br/><br/>

    </div><br/><br/>

    <div class="submit-btn">
      <h3>Submit</h3></div>
    <div class="img-1">
     <img src="th.jpeg-6" width="300px" height="300px">
     
  </div>
  </div>`


  var b =  `<div class="add-box" style="height:500px">
  <div class="heading-block">
    <h2>Information of School</h2>
    <p>Edit information of school</p>
  </div>
  <div class="input">
  Student Name : <input class="input-box" id="name" type="text" /><br/><br/>

  Father Name : <input class="input-box" id="name" type="text" /><br/><br/>
  
  Mother Name : <input class="input-box" id="name" type="text"/><br/><br/>
  
  Class      : <input class="input-box" id="name" type="text" /><br/><br/>

  Phone no   : <input class="input-box" id="name" type="text" /><br/><br/>

  Id       : <input class="input-box" id="name" type="text" /><br/><br/>

  </div><br/><br/>

  <div class="submit-btn">
    <h3>Submit</h3></div>
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
      document.getElementById("demo").innerHTML = c;
    } else if (pageId == 3) {
      document.getElementById("demo").innerHTML = d;
    }


  

  console.log(pageId(0));
}
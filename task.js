var keyval;

//main function for submit button
function fn_main() {
    var name = document.getElementById("inp1").value;
    var feedback = document.getElementById("inp2").value;
    console.log(name);
    console.log(feedback);
	
	
    if (name == "" || feedback == "") {
        alert("Name and feedback value is empty");
    } else {
        var storagekey = localStorage.length;
		
		//setting value in local storage
        localStorage.setItem(storagekey, JSON.stringify({
            uname: name,
            ufeed: feedback
        }));
		
		//Getting value from local storage
        var value = JSON.parse(localStorage.getItem(storagekey));
        console.log(value);
        document.getElementById('output').innerHTML += "<div id=div" + storagekey + " style='margin-top:25px;'>" +
            "<span>" +"<b>"+ name +"</b>" + "</span>" +"<button id='delete_btn' class='btn btn-primary btn-xs' style='float:right;' onclick=fn_delete('" + storagekey + "')>DELETE</button>" +
            "  "+"<button id='edit_btn' class='btn btn-primary btn-xs' style='float:right;  margin-right:10px;' onclick=fn_edit('" + storagekey + "') >EDIT</button>"+ "<br/> <span>" + feedback + "</span>" +
           "<hr>"+"</div>";
        //document.getElementById('output').innerHTML="<div width='30%'>"+"<button //id='but2'>EDIT</button>"+" "+"<button id='but2'>DELETE</button>"+"</div>"+"<hr>";
        document.getElementById('inp1').value = "";
        document.getElementById('inp2').value = "";
    }
};



//function for edit button
function fn_edit(key) {
    console.log("This is edit button function for " + key);
    var ok = JSON.parse(localStorage.getItem(key));
    document.getElementById("inp1").value = (ok.uname);
    document.getElementById("inp2").value = (ok.ufeed);
    document.getElementById("submit_btn").style.display = "none";
    document.getElementById("update_btn").style.display = "inline";
    keyval = key;
    console.log(key);
};


//function for update button
function fn_update() {
    var updated_name = document.getElementById("inp1").value;
    var updated_feed = document.getElementById("inp2").value;
	if (updated_name == "" || updated_feed == "") 
	{
        alert("Name and feedback value is empty");
    }else
	{
	//updating value in local storage
    localStorage.setItem(keyval, JSON.stringify({
        uname: updated_name,
        ufeed: updated_feed
    }));
	
	//Getting value from local storage
    var updated_values = JSON.parse(localStorage.getItem(keyval));
    console.log(updated_values);

    document.getElementById("div" + keyval).innerHTML = "<div><span>" +"<b>"+ updated_values.uname +"</b>" +"<button id='delete_btn' class='btn btn-primary btn-xs' style='float:right' onclick=fn_delete('" + keyval + "')>DELETE</button>" +	"<button id='edit_btn' class='btn btn-primary btn-xs' style='float:right; margin-right:10px;' onclick=fn_edit('" + keyval + "')>EDIT</button>"  + "<br/></span>" + "<span>" + updated_values.ufeed + "</span>" +"<hr>"+"</div>";

    document.getElementById("submit_btn").style.display = "inline";
    document.getElementById("update_btn").style.display = "none";

    document.getElementById('inp1').value = "";
    document.getElementById('inp2').value = "";
	}
};



//function for delete button
function fn_delete(key) {
    if (confirm("your input will be deleted")) {
        document.getElementById("div" + key).innerHTML = "";
    }
};
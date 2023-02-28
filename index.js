    var _name,_contact,_email,_status;//variables for input textbox   
    var data_name,data_contact,data_email,data_status;//variables for row data
    var data_row
    var rowIndex
    var table = document.getElementById("table");

    document.getElementById("add-btn").addEventListener("click", add_btn);
    document.getElementById("update-btn").addEventListener("click", update_btn);
    document.getElementById("delete-btn").addEventListener("click", delete_btn);            

    function updateVal(){

        _name = document.getElementById("name-text");
        _contact = document.getElementById("contact-text");
        _email = document.getElementById("email-text");
        _status = document.getElementById("status-text");    
        
    } 
    
    function clearTextbox(){

        _name.value = "";
        _contact.value = "";
        _email.value = "";
        _status.value = "";     
    } 

    function add_btn(){
        updateVal();
        if(_name.value != ""){
            data_row = document.createElement("tr")     
            data_row.tabIndex="0"      
            data_row.addEventListener("click", getIndex);
            table.appendChild(data_row)

            data_name = document.createElement("td")
            data_contact = document.createElement("td")
            data_email = document.createElement("td")
            data_status = document.createElement("td")

            data_name.innerHTML = _name.value;
            data_contact.innerHTML = _contact.value;
            data_email.innerHTML = _email.value;
            data_status.innerHTML = _status.value;

            data_row.appendChild(data_name)
            data_row.appendChild(data_contact)
            data_row.appendChild(data_email)
            data_row.appendChild(data_status)

            clearTextbox()
        } 
        else{
            console.log("name field cannot be empty")
        }       
    }

    function getIndex(){
        rowIndex = this.rowIndex
        var selected_row = table.rows[rowIndex]
        
        _name.value = selected_row.cells[0].innerHTML
        _contact.value = selected_row.cells[1].innerHTML
        _email.value = selected_row.cells[2].innerHTML
        _status.value = selected_row.cells[3].innerHTML        
    }

    function update_btn(){
        if(rowIndex>0 && _name.value != ""){
            updateVal()
            var selected_row = table.rows[rowIndex]
            selected_row.cells[0].innerHTML = _name
            selected_row.cells[1].innerHTML = _contact
            selected_row.cells[2].innerHTML = _email
            selected_row.cells[3].innerHTML = _status
            rowIndex =0

            clearTextbox()
        }     
        else if(rowIndex>0 && _name.value === ""){
            console.log("name field cannot be empty")
        }
        else{
            console.log("no row selected")
        }   
    }

    function delete_btn(){
        if(rowIndex>0){
        table.removeChild(table.children[rowIndex])
        rowIndex =0;
        clearTextbox()
        }
        else{
            console.log("no row selected")
        }
        
    }
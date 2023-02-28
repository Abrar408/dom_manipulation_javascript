    var name;
    var contact;
    var email;
    var status;

    var data_name
    var data_contact
    var data_email
    var data_status

    var name_text = document.getElementById("name-text")
    var contact_text = document.getElementById("contact-text")
    var email_text = document.getElementById("email-text")
    var status_text = document.getElementById("status-text")

    var data_row

    var rowIndex

    var table = document.getElementById("table");

    document.getElementById("add-btn").addEventListener("click", add_btn);
    document.getElementById("update-btn").addEventListener("click", update_btn);
    document.getElementById("delete-btn").addEventListener("click", delete_btn);     
        

        function getVal(){

            name = document.getElementById("name-text").value;
            contact = document.getElementById("contact-text").value;
            email = document.getElementById("email-text").value;
            status = document.getElementById("status-text").value;
            return name,contact,email,status;
        
    }       

    function add_btn(){

        getVal();
        if(name != ""){
        data_row = document.createElement("tr")           
        data_row.addEventListener("click", getIndex);
        table.appendChild(data_row)

            data_name = document.createElement("td")
            data_contact = document.createElement("td")
            data_email = document.createElement("td")
            data_status = document.createElement("td")

        data_name.innerHTML = name
        data_contact.innerHTML = contact
        data_email.innerHTML = email
        data_status.innerHTML = status

        data_row.appendChild(data_name)
        data_row.appendChild(data_contact)
        data_row.appendChild(data_email)
        data_row.appendChild(data_status)

        name_text.value = ""
        contact_text.value = ""
        email_text.value = ""
        status_text.value = ""
    }
        
    }

    function getIndex(){
        rowIndex = this.rowIndex

        // name_text = document.getElementById("name-text")
        // contact_text = document.getElementById("contact-text")
        // email_text = document.getElementById("email-text")
        // status_text = document.getElementById("status-text")

        var selected_row = table.rows[rowIndex]
        
        name_text.value = selected_row.cells[0].innerHTML
        contact_text.value = selected_row.cells[1].innerHTML
        email_text.value = selected_row.cells[2].innerHTML
        status_text.value = selected_row.cells[3].innerHTML
        
    }
    function update_btn(){

        if(rowIndex>0){
            getVal()
            var selected_row = table.rows[rowIndex]
            selected_row.cells[0].innerHTML = name
            selected_row.cells[1].innerHTML = contact
            selected_row.cells[2].innerHTML = email
            selected_row.cells[3].innerHTML = status

            name_text.value = ""
            contact_text.value = ""
            email_text.value = ""
            status_text.value = ""
        }

        
    }

    function delete_btn(){
        if(rowIndex>0){
        table.removeChild(table.children[rowIndex])
        rowIndex =0;}
        else{
            console.log("No row selected")
        }
        
    }
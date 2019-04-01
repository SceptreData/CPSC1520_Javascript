// Enter JavaScript for the exercise here...
const theForm = document.querySelector('.frm-transactions');

const totalDebits = document.querySelector('.debits');
const totalCredit = document.querySelector('.credits');
const tableBody = document.querySelector('tbody');

const errorField = document.querySelector('.error');

// Build a list for our errors.
let errorList = document.createElement('ul');
errorList.classList.add('error-list');
errorField.appendChild(errorList);


theForm.addEventListener('submit', event =>  {
    //Stop the form from reloading the page
    event.preventDefault();

    //Clear Errors (to prepare for new ones!)
    clearErrors();

    let type =  getTransactionType();
    let desc = getDescription()
    console.log(desc);
    let cashVal = getCashValue();

    let trashIcon = buildTrashIcon();
        
    if (!isErrors()){
        let newRow = document.createElement('tr');

        let descElt = buildTableData(desc);
        let typeElt = buildTableData(type);
        let cashElt = buildTableData("$" + cashVal);
        cashElt.classList.add('transaction-value-itm', type);

        console.log('DOING IT');
        newRow.classList.add(type);
        newRow.appendChild(descElt);
        newRow.appendChild(typeElt);
        newRow.appendChild(cashElt);
        newRow.appendChild(trashIcon);

        tableBody.appendChild(newRow);
    }
    theForm.reset();
});

function buildTableData(str){
    let td = document.createElement('td');
    let txtNode = document.createTextNode(str)
    td.appendChild(txtNode);
    return td;
}

function getTransactionType(){
    let type = document.querySelector('select[name=type]');
    if (type.value === '') {
        logError("User must select transaction type.");
    }

    return type.value;
}

function getDescription(){
    let descInput = document.querySelector('input[name=description]');
    let desc = descInput.value;
    if (isEmptyOrWhiteSpace(desc)) {
        logError("Description field cannot be empty.");
    }
    return desc;
}

function getCashValue(){
    let cash = document.querySelector('input[name="currency"]');
    if (cash.value < 0) {
        logError('Cash must be a positive number.');
    }
    return Number(cash.value).toFixed(2);
}


function buildTrashIcon(){
    let icon = document.createElement('i');
    icon.classList.add('delete', 'fa', 'fa-trash-o');
    return icon;
}


function logError(msg){
    let err = document.createElement('li');
    let errMsg = document.createTextNode(msg);
    err.appendChild(errMsg);
    errorList.appendChild(err);
}

function isErrors(){
    return errorList.hasChildNodes();
}

function clearErrors() {
    // While the error list has children, remove them.
    while (errorList.firstChild){
        errorList.removeChild(errorList.firstChild);
    }
}

function isEmptyOrWhiteSpace(str) {
    return !str || !str.trim();
}
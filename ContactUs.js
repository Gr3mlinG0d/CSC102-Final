
function validateForm(){
    const FirstName= document.getElementById('First Name').value;
    const LastName = document.getElementById('Last Name').value;
    const FullName= FirstName+LastName;
    console.log(FullName)
    const ZipCode = document.getElementById('Zip Code').value;

    if(FullName >= 21)
    {
        if (ZipCode >5) { 
            alert("Too Many Characters");
            return;
        }
        alert("Success!");
        document.getElementById('registrationForm').submit ();
    }
}
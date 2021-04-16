anchor.addEventListener('click',(e)=>{
    console.log(155);
    e.preventDefault();
   if(form.name.value!==''){  
    console.log(15);
        db.collection('order').add({
            Name:form.Name.value,
            Address:form.Address.value,
            City:form.City.value,
            Zip:form.Zip.value,
            Phone:form.Phone.value,
            Company:form.Company.value
        });
        form.name.value='';
       // window.setTimeout(location.reload(),1000);
       console.log(155);
       setTimeout("location.reload(true);", 1000);
    }
   
})

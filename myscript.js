anchor.addEventListener('click',(e)=>{

    e.preventDefault();
   if(form.name.value!==''){  
    console.log(15);
        db.collection('order').add({
            Name:form.Name.value,
            Address:form.Address.value,
            City:form.City.value,
            Zip:form.Zip.value,
            Phone:form.Phone.value,
            Company:form.Company.value,
            Date: firebase.firestore.Timestamp.fromDate(new Date())
        });
        form.name.value='';
        form.style.display="none";
        h2.innerHTML="Thank You For Placing Order"
       // window.setTimeout(location.reload(),1000);
    //   var order=db.collection("order").doc('total');
   // order.update({
    //      order:firebase.firestore.FieldValue.increament(1)
   // });
   
      // setTimeout("location.reload(true);", 1000);
    }
   
})

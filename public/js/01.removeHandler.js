'use strict';

(function (){

    let surveyIdField;

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        surveyIdField = document.getElementById('_id');

        document.getElementById('submit').addEventListener('click',send);
    }//end of init

    async function send(){
        // clearMessage();
        const _id = surveyIdField.value;
        
        try{
            const options = {
                method:'POST',
                body: JSON.stringify({_id}),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const data = await fetch('/api/delete/survey',options);

            console.log(data)

            const result = await data.json();

            console.log(result)

            if(result.message){
                console.log(result.message);
            }



        }
        catch(error){
            document.getElementById('messagearea').innerHTML = `<div>${error.message}</div>`;
        }
    }

})();
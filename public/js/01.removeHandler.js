'use strict';

(function (){

    let surveyIdField;

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        surveyIdField = document.getElementById('_id');

        document.getElementById('submit').addEventListener('click',send);
    }//end of init

    async function send(){
        clearMessage();
        const surveyID = surveyIdField.value;

        try{
            const options = {
                method:'POST',
                body: JSON.stringify({surveyID}),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const data = await fetch('api/delete/surveys',options);



        }
        catch(error){
            document.getElementById('messagearea').innerHTML = `<div>${error.message}</div>`;
        }
    }

})
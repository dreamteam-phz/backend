'use strict';

(function(){

    document.addEventListener('DOMContentLoaded', init);

    const populateCell = (data) =>{
        const td = document.createElement('td');
        td.textContent = data;
        return td;
    };

    async function init(){
        try{
            const data = await fetch('/api/formscores',
                // {headers: {"Access-Control-Allow-Origin":"*"}}
            );
            const dataJson = await data.json();
            console.log(dataJson)
            const resultSet = document.getElementById('resultSet');

            for( let datum of dataJson){
                const tr = document.createElement('tr');
                tr.appendChild(populateCell(datum._id));
                tr.appendChild(populateCell(datum.score));
                tr.appendChild(populateCell(datum.message));
                resultSet.appendChild(tr);
            };
        }
        catch(error){
            document.getElementById('messagearea').innerHTML = `<div>${error.message}</div>`;
        };
    };

})();
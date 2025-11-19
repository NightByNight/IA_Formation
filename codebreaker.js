const textfield = document.getElementById('sse-envents');

function handleEvent(event){
    try{
        const json = JSON.parse(event.data);
        console.log("Receive event:", json);
        if(json && typeof json.data == 'string'){
            textfield.textContent += json.data;
            textfield.scrollTop = testField.scrollHeight;
        }
    } catch(e) {

    }
}

for(let channel = 1; channel <= 100; channel ++){
    const es = new EventSource("https://challs.secuia.fr/stream?channel=codebreaker_${channel}");
    es.addEventListener('message', handleEvent);
}


document.getElementById('submitButton').addEventListener('click', function () {
    let jsonInput = document.getElementById('jsonInput').value;
    let responseContainer = document.getElementById('responseContainer');
    
    try {
        let jsonData = JSON.parse(jsonInput);
        
        fetch('http://localhost:8080/bfhl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => {
            responseContainer.innerHTML = '<pre>' + JSON.stringify(data, null, 4) + '</pre>';
        })
        .catch(error => {
            responseContainer.innerHTML = '<div class="alert alert-danger">Error: ' + error.message + '</div>';
        });

    } catch (error) {
        responseContainer.innerHTML = '<div class="alert alert-danger">Invalid JSON format</div>';
    }
});

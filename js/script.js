function loadTool(toolName) {
    $.ajax({
        url: 'tools/' + toolName + '.html',
        type: 'GET',
        success: function(response) {
            $('#main').html(response);
        },
        error: function(xhr, status, error) {
            console.error('Error loading tool:', error);
        }
    });
}
function loadToolIframe(toolName) {
    // Create an iframe element
    var iframe = document.createElement('iframe');
    iframe.src = 'tools/' + toolName + '.html'; // Set the source of the iframe
    iframe.style.width = '100%'; // Set width to 100%
    iframe.style.height = '100%'; // Set height to 100%
    iframe.style.border = 'none'; // Remove border

    // Clear existing content in the main element
    var mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    // Append the iframe to the main element
    mainElement.appendChild(iframe);
}


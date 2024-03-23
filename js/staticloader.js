function loadToolIframe(toolName) {
    // Create an iframe element
    var iframe = document.createElement('iframe');
    iframe.src = 'https://codetestgroup.github.io/opensource-tools-assets/activities/tools/' + toolName + '.html'; // Set the source of the iframe
    iframe.style.width = '100%'; // Set width to 100%
    iframe.style.height = '100%'; // Set height to 100%
    iframe.style.border = 'none'; // Remove border

    // Clear existing content in the main element
    var mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    // Append the iframe to the main element
    mainElement.appendChild(iframe);
}




$(document).ready(function() { // load sidebar
            // Fetch the sidebar content
            $.get('https://codetestgroup.github.io/opensource-tools-assets/static/sidebar/sidebar.html', function(data) {
                // Inject the fetched HTML into the sidebar element
                $('#sidebar').html(data);
            });
        });

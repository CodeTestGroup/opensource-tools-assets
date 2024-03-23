function loadToolIframe(toolName) {
    // Create an iframe element
    var iframe = document.createElement('iframe');
    iframe.src = 'https://codetestgroup.github.io/opensource-tools-assets/activities/activities/' + toolName + '/index.html'; // Set the source of the iframe
    iframe.style.width = '100%'; // Set width to 100%
    iframe.style.height = '100%'; // Set height to 100%
    iframe.style.border = 'none'; // Remove border

    // Clear existing content in the main element
    var mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    // Append the iframe to the main element
    mainElement.appendChild(iframe);
}




$(document).ready(function() {
    // Load the sidebar content
    $.get('https://codetestgroup.github.io/opensource-tools-assets/static/sidebar/sidebar.html', function(data) {
        // Inject the fetched HTML into the sidebar element
        $('#sidebar').html(data);

        // Load the CSS file for the sidebar
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://codetestgroup.github.io/opensource-tools-assets/css/styles.css'; // Path to your CSS file
        document.head.appendChild(link);
    });
});


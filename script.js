document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username.toLowerCase() === 'varun' && password === 'varun@123') {
        window.location.href = 'https://www.instagram.com/varunkalpande/?igsh=MWkxdWltN3d5ZTFnMQ%3D%3D';
    } else {
        errorMessage.style.display = 'block';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('errorMessage').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('errorMessage').style.display = 'none';
});
         

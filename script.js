const bar = document.querySelector('.bar');

bar.addEventListener('animationend', function() {
  window.location.href = 'recall.html';
});

window.onload=function() {
    
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
  
    const numDisplay = document.getElementById('numDisplay');
    numDisplay.textContent = `${num1} ${num2}`;
    localStorage.setItem('num1', num1);
    localStorage.setItem('num2', num2);
  }
  


document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
  
    editor.value = localStorage.getItem('editorText') || '';
  
    editor.addEventListener('input', function() {
      localStorage.setItem('editorText', editor.value);
    });
  });
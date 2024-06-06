function handleKeydown(event) {
  const code = event.code;
  const key = event.key;
  const which = event.which;

  document.getElementById("code").innerText = code;
  document.getElementById("key").innerText = key;
  document.getElementById('which').innerText = which;
}

document.addEventListener('keydown', handleKeydown);
alert('Pěkně vítám')
 let jmeno = prompt('Napiš svoje jméno')
    document.write('Ty jsi ' + jmeno + ', rád tě poznávám <br>' )
 let dotaz = confirm('Chceš pokračovat v JavaScriptu?')
    if (dotaz)
        document.write('Tak jdeme na to')
    else
        document.write('Tak nic')
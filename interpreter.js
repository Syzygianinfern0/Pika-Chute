// This is from the view-source:http://trove42.com/pikachu-programming-language/ 
// Lines 160-313 as of writing this

function compiler(code) {
    PiPikachu = [], PikaPikachu = [];
    try {
        var ip = document.getElementById('ip').value.replace(/\s\s+/g, ' ').trim().split(' ');
        for (i = 0; i < ip.length; i++)
            PiPikachu.push(ip[i]);
    } catch (e) {
        document.getElementById('op').value = "Invalid input!";
    }

    lines = code.split(/\r?\n/g);
    op = "";
    for (i = 0; i < lines.length; i++) {
        var pikachu = [], f = 0;
        var currentLine = lines[i].replace(/\s\s+/g, ' ').trim();
        if (currentLine.split(' ').length == 2) {
            switch (currentLine) {
                case "pi pika":
                    PikaPikachu.push(PiPikachu[PiPikachu.length - 1]);
                    f = 1;
                    break;
                case "pika pi":
                    PiPikachu.push(PikaPikachu[PikaPikachu.length - 1]);
                    f = 1;
                    break;
                case "pi pikachu":
                    PiPikachu.pop();
                    f = 1;
                    break;
                case "pika pikachu":
                    PikaPikachu.pop();
                    f = 1;
                    break;
                case "pikachu pikachu":
                    if (PiPikachu[PiPikachu.length - 1] == PikaPikachu[PikaPikachu.length - 1]) {

                        n = pikachucount(lines[i + 1]).toString();
                        if (n.endsWith("found ")) {
                            document.getElementById('op').value = n + "on line " + (i + 1);
                        } else {
                            i = parseInt(n) - 2;
                        }
                    } else i++;
                    f = 1;
                    break;
                case "pika pika":
                    if (PiPikachu[PiPikachu.length - 1] != PikaPikachu[PikaPikachu.length - 1]) {
                        n = pikachucount(lines[i + 1]).toString();
                        if (n.endsWith("found ")) {
                            document.getElementById('op').value = n + "on line " + (i + 2);
                        } else {
                            i = parseInt(n) - 2;
                        }
                    } else i++;
                    f = 1;
                    break;
                default:
                    document.getElementById('op').value = "Invalid syntax on line " + (i + 1);
                    alert(currentLine);
                    alert(PiPikachu + "\n" + PikaPikachu);
                    return;
            }
        }

        if (f == 1) continue;
        if (currentLine.endsWith("pi pikachu")) {
            pikachu = PiPikachu;
            currentLine = currentLine.substr(0, currentLine.length - 10).trim();
        } else if (currentLine.endsWith("pika pikachu")) {
            pikachu = PikaPikachu;
            currentLine = currentLine.substr(0, currentLine.length - 12).trim();
        } else {
            document.getElementById('op').value = "Invalid syntax on line " + (i + 1);
            alert(currentLine);
            return;
        }

        if (currentLine == "pi pika") {
            pikachu.push(pikachu[pikachu.length - 2] + pikachu[pikachu.length - 1]);
        } else if (currentLine == "pika pi") {
            pikachu.push(pikachu[pikachu.length - 2] - pikachu[pikachu.length - 1]);
        } else if (currentLine == "pi pikachu") {
            pikachu.push(pikachu[pikachu.length - 2] * pikachu[pikachu.length - 1]);
        } else if (currentLine == "pikachu") {
            pikachu.push(pikachu[pikachu.length - 2] / pikachu[pikachu.length - 1]);
        } else if (currentLine == "pika pikachu") {
            op = op.concat(pikachu.pop());
        } else if (currentLine == "pikachu pikachu") {
            op = op.concat(String.fromCharCode(pikachu.pop()));
        } else if (currentLine == "") {
            pikachu.pop();
        } else {
            n = pikachucount(currentLine).toString();
            if (n.endsWith("found ")) {
                document.getElementById('op').value = n + "on line " + (i + 1);
                return;
            } else {
                pikachu.push(parseInt(n));
            }
        }
    }
    document.getElementById('op').value = op;
}

function pikachucount(pi) {
    prv = "", nprv = 0, pikachu = 0;
    pi = pi.trim().split(' ');
    for (a = 0; a < pi.length; a++)
        if (pi[a] == "pi" || pi[a] == "pika" || pi[a] == "pikachu") {
            if (nprv == 1 && prv == pi[a])
                return pi[a] + " " + pi[a] + " " + pi[a] + " found ";
            else if (prv == pi[a])
                nprv++;
            else
                nprv = 0;
            pikachu++;
            prv = pi[a];
        } else return "Non-pikachu language found ";

    return pikachu;
}
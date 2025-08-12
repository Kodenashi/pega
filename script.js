function toggleReason() {
    let osadValue = document.getElementById('osadYN').value;
    let reasonWrapper = document.getElementById('reasonWrapper');
    if (osadValue === "Y") {
        reasonWrapper.style.display = 'block';
    } else {
        reasonWrapper.style.display = 'none';
        document.getElementById('osadReason').value = ""; 
    }
}

function updatePreview() {
    let osadValue = document.getElementById('osadYN').value;
    let reasonText = osadValue === "Y" ? `\nREASON: ${document.getElementById('osadReason').value}` : "";

    let text =
`CID: ${document.getElementById('cid').value}
CPROD: ${document.getElementById('cprod').value}
PHONE#: ${document.getElementById('phone').value}
NAME: ${document.getElementById('name').value}
AUTHENTICATED (Y/N): ${document.getElementById('authenticated').value}
DOMAIN: ${document.getElementById('domain').value}
CONCERN: ${document.getElementById('concern').value}
ACTION DONE: ${document.getElementById('actionDone').value}
NEXT ACTION: ${document.getElementById('nextAction').value}
OSAD (Y/N): ${osadValue}${reasonText}`;

    document.getElementById('output').textContent = text;

    if (text.trim() !== "") {
        document.getElementById('output').style.display = 'block';
        document.getElementById('copyBtn').style.display = 'inline-block';
        document.getElementById('resetBtn').style.display = 'inline-block';
    } else {
        document.getElementById('output').style.display = 'none';
        document.getElementById('copyBtn').style.display = 'none';
        document.getElementById('resetBtn').style.display = 'none';
    }
}

function copyNotes() {
    let text = document.getElementById('output').textContent;
    if (text.trim() !== "") {
        navigator.clipboard.writeText(text).then(() => {
            alert("Notes copied to clipboard!");
        });
    } else {
        alert("Please fill in some fields before copying.");
    }
}

function resetForm() {
    document.getElementById('pegaForm').reset();
    document.getElementById('reasonWrapper').style.display = 'none';
    document.getElementById('output').style.display = 'none';
    document.getElementById('copyBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';
}

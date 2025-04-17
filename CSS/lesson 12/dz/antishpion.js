document.addEventListener('keydown', function(event) {
    const isCtrlU = event.ctrlKey && event.keyCode === 85;
    const isF12 = event.keyCode === 123;
    
    if (isCtrlU || isF12) {
        event.preventDefault();
        event.stopPropagation();
        event.returnValue = false;
        return false;
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

//define a callback for our observer
const callback = function(mutations, o) {
    for(let mutation of mutations) {
        if (mutation.type === 'childList') {
            //get the message element
            var dialogElement = document.getElementById("ngdialog1");
            //check if the message was created
            if (dialogElement != null) {
                //if so, remove it.
                dialogElement.remove();
                console.log("The message was removed.");
            }
        }
    }
};

//create an observer instance using our callback
const observer = new MutationObserver(callback);
//call our observer
observer.observe(document.body, { childList: true, subtree: true });
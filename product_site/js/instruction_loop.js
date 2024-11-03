// Create instruction for each download method
var windows = ['Download windows installer on the website.', 'Follow the installer prompt.', 'You can now use the app!'];
var mac = ['Download MacOS installer on the website.', 'Follow the installer prompt and add path variable.', 'You can now use the app!'];
var linux = ['Download Linux installer on the website.', 'Follow the installer prompt and type in command on terminal.', 'You can now use the app!'];
var android = ['Download Android installer on the website.', 'Follow the installer prompt.', 'You can now use the app on phone!'];
var ios = ['Download IOS installer on the website.', 'Follow the installer prompt.', 'You can now use the app on phone!'];


// Get the message element that displays message 
var new_message = document.querySelector('#download-tutorial');

var installer = document.querySelectorAll('.boxes');
var windows_installer = installer[0];
var mac_installer = installer[1];
var linux_installer = installer[2];
var android_installer = installer[3];
var ios_installer = installer[4];

var instruction = document.querySelectorAll('.text');
var list = document.querySelector('#list');

// If winodws download is pressed
windows_installer.addEventListener('click', () => {
    // Change message and its visibility
    new_message.textContent = "Download instruction for windows";
    list.style.display = 'block';

    // Use a while loop to loop through the instruction and add it to the list
    // I use while loop because this operation is simple and while loop offers a simple ways of writing the loop
    var i = 0;
    while(i < windows.length){
        instruction[i].textContent = windows[i];
        i ++;
    }
})

// If MacOS download is pressed
mac_installer.addEventListener('click', () => {
    
    // Change message and its visibility
    new_message.textContent = "Download instruction for MacOS";
    list.style.display = 'block';

    // Use a while loop to loop through the instruction and add it to the list
    // I use while loop because this operation is simple and while loop offers a simple ways of writing the loop
    var i = 0;
    while(i < mac.length){
        instruction[i].textContent = mac[i];
        i ++;
    }
})

// If Linux download is pressed
linux_installer.addEventListener('click', () => {

    // Change message and its visibility
    new_message.textContent = "Download instruction for Linux";
    list.style.display = 'block';

    // Use a while loop to loop through the instruction and add it to the list
    // I use while loop because this operation is simple and while loop offers a simple ways of writing the loop
    var i = 0;
    while(i < linux.length){
        instruction[i].textContent = linux[i];
        i ++;
    }
})

// If android download is pressed
android_installer.addEventListener('click', () => {

    // Change message and its visibility
    new_message.textContent = "Download instruction for Android";
    list.style.display = 'block';

    // Use a while loop to loop through the instruction and add it to the list
    // I use while loop because this operation is simple and while loop offers a simple ways of writing the loop
    var i = 0;
    while(i < android.length){
        instruction[i].textContent = android[i];
        i ++;
    }
})

// If IOS download is pressed
ios_installer.addEventListener('click', () => {

    // Change message and its visibility
    new_message.textContent = "Download instruction for IOS";
    list.style.display = 'block';

    // Use a while loop to loop through the instruction and add it to the list
    // I use while loop because this operation is simple and while loop offers a simple ways of writing the loop
    var i = 0;
    while(i < ios.length){
        instruction[i].textContent = ios[i];
        i ++;
    }
})
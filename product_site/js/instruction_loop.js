// Create instruction for each download method
var windows_list = ['Download windows installer on the website.', 'Follow the installer prompt.', 'You can now use the app!'];
var mac_list = ['Download MacOS installer on the website.', 'Follow the installer prompt and add path variable.', 'You can now use the app!'];
var linux_list = ['Download Linux installer on the website.', 'Follow the installer prompt and type in command on terminal.', 'You can now use the app!'];
var android_list = ['Download Android installer on the website.', 'Follow the installer prompt.', 'You can now use the app on phone!'];
var ios_list = ['Download IOS installer on the website.', 'Follow the installer prompt.', 'You can now use the app on phone!'];

var installer = document.querySelectorAll('.boxes');
var windows_installer = installer[0];
var mac_installer = installer[1];
var linux_installer = installer[2];
var android_installer = installer[3];
var ios_installer = installer[4];

// Function to customize the install instruction on different operating system
function install(system_name, instruction_list){
    // Get the message element that displays message 
    var new_message = document.querySelector('#download-tutorial');

    // Get the list step element and the instruction element
    var list = document.querySelector('#list');
    var instruction = document.querySelectorAll('.text');

    // Change message and its visibility
    new_message.textContent = "Download instruction for " + system_name + ".";
    list.style.display = 'block';

    // Use a while loop to loop through the instruction and add it to the list
    // I use while loop because this operation is simple and while loop offers a simple ways of writing the loop
    var i = 0;
    while(i < instruction_list.length){
        instruction[i].textContent = instruction_list[i];
        i ++;
    }
}

// If winodws download is pressed
windows_installer.addEventListener('click', () => {
    install("Windows", windows_list);
})

// If MacOS download is pressed
mac_installer.addEventListener('click', () => {
    install("MacOS", mac_list);
})

// If Linux download is pressed
linux_installer.addEventListener('click', () => {
    install("Linux", linux_list);
})

// If android download is pressed
android_installer.addEventListener('click', () => {
    install("Android", android_list);
})

// If IOS download is pressed
ios_installer.addEventListener('click', () => {
    install("IOS", ios_list);
})
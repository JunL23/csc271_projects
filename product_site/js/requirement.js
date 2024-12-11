// Get all the requirement buttons
var windows = document.querySelector('#Windows');
var mac = document.querySelector('#MacOS');
var linux = document.querySelector('#Linux');
var android = document.querySelector('#Android');
var ios = document.querySelector('#IOS');


// Get the requirement table elements
var min_ram = document.querySelector('#ram_minimum_requirement');
var max_ram = document.querySelector('#ram_maximum_requirement');
var min_space = document.querySelector('#space_minimum_requirement');
var max_space = document.querySelector('#space_maximum_requirement');


windows.addEventListener('click', function() {
    min_ram.textContent = '1 GB';
    max_ram.textContent = '2 GB';
    min_space.textContent = '2 GB';
    max_space.textContent = '3 GB';
});

mac.addEventListener('click', function() {
    min_ram.textContent = '1 GB';
    max_ram.textContent = '3 GB';
    min_space.textContent = '4 GB';
    max_space.textContent = '5 GB';
});

linux.addEventListener('click', function() {
    min_ram.textContent = '1 GB';
    max_ram.textContent = '2 GB';
    min_space.textContent = '1 GB';
    max_space.textContent = '2 GB';
});

android.addEventListener('click', function() {
    min_ram.textContent = '3 GB';
    max_ram.textContent = '5 GB';
    min_space.textContent = '5 GB';
    max_space.textContent = '6 GB';
});

ios.addEventListener('click', function() {
    min_ram.textContent = '3 GB';
    max_ram.textContent = '4 GB';
    min_space.textContent = '5 GB';
    max_space.textContent = '7 GB';
});
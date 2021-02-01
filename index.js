

let sideBar = [["Home", "Profile"],["Setting", "Logout"]]

for (var i = 0; i < sideBar.length; i++) {
    for (var j = 0; j < sideBar[i].length; j++) {
    document.write('<p class="jstext">' + sideBar[i][j] + '</p>');
    }
}

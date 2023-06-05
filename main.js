var images = ["Idle_demo1.gif", "gustavoandbrick.png", "mrstick.gif"];
var names = ["Peppino","Gustavo & Brick","Mr.Stick"];

var i = 0
function update() {
    i++;
    var numberOfFamilyMembersInArray = 2;
    if (i > numberOfFamilyMembersInArray)
    {
        i = 0;
    }

    var updatedImage = images[i];
    var updatedname = names[i];

    document.getElementById("FamilyMemberImage").src = updatedImage;
    document.getElementById("FamilyMemberName").innerHTML = updatedname;
}
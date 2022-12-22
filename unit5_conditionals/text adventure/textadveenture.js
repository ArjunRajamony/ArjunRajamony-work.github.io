let adventure = prompt("You find yourself in a dark forest. Do you go left, right, or straight ahead?");

if (adventure === "left") {
  let choice = prompt("You come across a river. Do you try to cross it or follow it downstream?");

  if (choice === "cross it") {
    alert("You manage to cross the river and find a clearing on the other side. You see a cabin and decide to investigate.");
  } else {
    alert("You follow the river downstream and come across a waterfall. You decide to turn back and try the other path.");
  }
} else if (adventure === "right") {
  let choice = prompt("You come across a fork in the road. Do you go left or right?");

  if (choice === "left") {
    alert("You find yourself in a clearing with a small cottage. You decide to knock on the door and see if anyone is home.");
  } else {
    alert("You continue down the path and come across a dense thicket. You decide it's too risky to continue and turn back.");
  }
} else {
  let choice = prompt("You come across a clearing with a strange looking tree in the center. Do you go closer to investigate or turn back?");

  if (choice === "go closer") {
    alert("As you approach the tree, you notice a hidden door in the trunk. You decide to go inside and see what's inside.");
  } else {
    alert("You turn back and decide to try one of the other paths.");
  }
}

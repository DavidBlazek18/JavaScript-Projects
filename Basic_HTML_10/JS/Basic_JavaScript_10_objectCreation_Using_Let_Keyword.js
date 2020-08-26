

let deli_sandwich = { 
sandwich_protein: "ham",
sandwich_carbohydrate: "whole-wheat bun",
sandwich_dairy: "provolone cheese",
vegetable: "tomato",
sandwich_topping: "Italian dressing",
description : function()    {
    return "The delicatessen will prepare a " + this.sandwich_protein + " sandwich on a " + this.sandwich_carbohydrate + ", topped with " + this.sandwich_dairy + " " + this.vegetable + " " + this.sandwich_topping + ".";
}
};
document.getElementById("letKeyword_Demo").innerHTML = deli_sandwich.description();

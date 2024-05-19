const object = document.getElementById("pointer");

document.addEventListener("mousemove", (e) => {
object.style.left = e.pageX + 'px';
object.style.top = e.pageY + 'px';
});
document.addEventListener("mouseenter", () => {
    object.style.visibility = 'visible';
});
document.addEventListener("mouseout", () => {
object.style.visibility = 'hidden';
});
window.onload = function() {
    document.getElementById("a").onclick = function() {
        changeGLTF(
            "assets/squirrel.glb"
        );
    };

    function changeGLTF(path) {
        var el = document.getElementById("index").contentWindow.model;
        el.setAttribute("gltf-model", path);
    }
};
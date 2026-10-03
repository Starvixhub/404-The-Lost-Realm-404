const homeButton =
    document.getElementById("homeButton");


/* =========================
   RETURN HOME
========================= */

homeButton.addEventListener("click", () => {

    document.body.style.transition =
        "opacity 0.8s ease";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "/";

    }, 800);

});


/* =========================
   MAGIC CURSOR
========================= */

document.addEventListener("mousemove", (event) => {

    const spark =
        document.createElement("span");

    spark.className =
        "cursor-spark";

    spark.style.position = "fixed";

    spark.style.left =
        `${event.clientX}px`;

    spark.style.top =
        `${event.clientY}px`;

    spark.style.width = "4px";
    spark.style.height = "4px";

    spark.style.borderRadius = "50%";

    spark.style.background =
        "#c084fc";

    spark.style.boxShadow =
        "0 0 12px #c084fc";

    spark.style.pointerEvents =
        "none";

    spark.style.zIndex = "20";

    spark.style.transition =
        "all 0.8s ease";

    document.body.appendChild(spark);


    requestAnimationFrame(() => {

        spark.style.transform =
            "translateY(-25px) scale(0)";

        spark.style.opacity = "0";

    });


    setTimeout(() => {

        spark.remove();

    }, 800);

});
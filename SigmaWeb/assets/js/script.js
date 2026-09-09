
// =====================================
// INFORMACIÓN DE LOS BRAINROTS
// =====================================

function mostrarBrainrot(nombre) {

    let mensaje = "";

    if (nombre === "Tralalero Tralala") {

        mensaje = "🦈 Tralalero Tralala: Nivel de brainrot 55/67. ¡Mucha laura!";

    } else if (nombre === "Bombardiro Crocodilo") {

        mensaje = "🐊 Bombardiro Crocodilo: Nivel de brainrot 60/67. Chad total.";

    } else if (nombre === "Tung Tung Tung Sahur") {

        mensaje = "🪵 Tung Tung Tung Sahur: Nivel de brainrot 67/67. Mi padre.";

    } else {

        mensaje = "Brainrot desconocido.";

    }

    alert(mensaje);
}


// =====================================
// BOTÓN ¿QUÉ ES UN BRAINROT?
// =====================================

function mostrarMensaje() {

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent =
        "Un sigma es una persona que toma monster BLANCA (la que toma nuestro amigo Jeffrey), usa un auto híbrido, va con la mochila abierta y juega Valorant y LOL. 💀";
}


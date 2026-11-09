
// =========================================
// 1. EMISSION FACTORS
// =========================================

const DIAS_ESCOLARES = 5;

const DISTANCIA_DIARIA = 10;

// Estimated emissions per passenger per kilometer.
const FACTORES_TRANSPORTE = {
    bus: 0.089,
    privado: 0.192,
    compartido: 0.096,
    bicicleta: 0
};

// Estimated emissions per sheet of paper.
const CO2_POR_HOJA = 0.005;


// =========================================
// 2. ECO-POINTS SYSTEM
// =========================================

const PUNTOS_TRANSPORTE = {
    bus: 30,
    privado: 10,
    compartido: 25,
    bicicleta: 40
};

const PUNTOS_RECICLAJE = {
    0: 0,
    1: 10,
    2: 20,
    3: 30
};


// =========================================
// 3. TRANSLATIONS
// =========================================

const translations = {

    es: {

        languageLabel: "🌐 Idioma:",
        tagline: "VIDA SOSTENIBLE",

        headerDescription:
            "Descubre tu impacto ambiental y adopta pequeños hábitos para construir un futuro más sostenible.",

        formTitle: "🌍 Calcula tu impacto",

        formDescription:
            "Introduce tus hábitos diarios para estimar tu huella de carbono semanal y obtener tus Eco-Points.",

        transportLabel: "Medio de transporte al colegio",
        transportPlaceholder: "Selecciona una opción",
        busOption: "Bus",
        privateOption: "Carro privado",
        sharedOption: "Carro compartido",
        bikeOption: "Bicicleta/Caminando",

        paperLabel: "Hojas de papel usadas al día",
        paperPlaceholder: "Ej. 10",

        recyclingLabel: "Nivel de reciclaje",
        recyclingPlaceholder: "Selecciona una opción",

        noneOption: "Ninguno",
        lowOption: "Bajo",
        mediumOption: "Medio",
        highOption: "Alto",

        calculateButton: "Calcular mi impacto →",

        resultsTitle: "🌿 Tus resultados ambientales",

        resultsDescription:
            "Estos son los resultados estimados según tus hábitos.",

        co2Label: "HUELLA DE CARBONO SEMANAL",
        co2Unit: "kg CO₂ / semana",

        pointsLabel: "TUS ECO-POINTS",
        pointsUnit: "de 100 puntos",

        printButton: "🖨️ Imprimir / Guardar Reporte PDF",

        footerText:
            "Bolívar Eco-Calculator | Construyendo un futuro más verde 🌎",

        footerDisclaimer:
            "Los cálculos ambientales son estimaciones.",

        errorEmpty:
            "Por favor, completa todos los campos.",

        errorPaper:
            "Introduce una cantidad válida de hojas (entre 0 y 500).",

        excellent:
            "¡Excelente! Tus hábitos contribuyen a cuidar el planeta.",

        good:
            "¡Buen trabajo! Todavía puedes mejorar algunos hábitos.",

        improve:
            "Puedes adoptar hábitos más sostenibles para mejorar tu impacto ambiental.",

        certificateSubtitle:
            "CERTIFICADO DE IMPACTO AMBIENTAL",

        certificateTitle:
            "Reconocimiento de Compromiso Ecológico",

        certificateIntro:
            "Este certificado presenta los resultados de tu evaluación de hábitos ambientales.",

        certificateCO2Label:
            "HUELLA DE CARBONO SEMANAL",

        certificatePointsLabel:
            "ECO-POINTS",

        certificateDataTitle:
            "Datos de la evaluación",

        certificateTransportLabel:
            "Medio de transporte:",

        certificatePaperLabel:
            "Hojas utilizadas al día:",

        certificateRecyclingLabel:
            "Nivel de reciclaje:",

        certificateDateLabel:
            "Fecha:",

        certificateMessageTitle:
            "🌿 Tu compromiso con el planeta",

        certificateDeclaration:
            "Cada pequeño cambio contribuye a construir un futuro más sostenible. ¡Gracias por cuidar nuestro planeta!",

        certificateFooter:
            "Bolívar Eco-Calculator | Colegio Bolívar",

        certificateDisclaimer:
            "Este documento presenta estimaciones educativas y no constituye una medición oficial.",

        transportNames: {
            bus: "Bus",
            privado: "Carro privado",
            compartido: "Carro compartido",
            bicicleta: "Bicicleta/Caminando"
        },

        recyclingNames: {
            0: "Ninguno",
            1: "Bajo",
            2: "Medio",
            3: "Alto"
        }

    },


    en: {

        languageLabel: "🌐 Language:",
        tagline: "SUSTAINABLE LIVING",

        headerDescription:
            "Discover your environmental impact and adopt small habits to build a more sustainable future.",

        formTitle: "🌍 Calculate Your Impact",

        formDescription:
            "Enter your daily habits to estimate your weekly carbon footprint and earn Eco-Points.",

        transportLabel: "Transportation to school",
        transportPlaceholder: "Select an option",
        busOption: "Bus",
        privateOption: "Private car",
        sharedOption: "Carpool",
        bikeOption: "Bicycle/Walking",

        paperLabel: "Sheets of paper used per day",
        paperPlaceholder: "E.g. 10",

        recyclingLabel: "Recycling level",
        recyclingPlaceholder: "Select an option",

        noneOption: "None",
        lowOption: "Low",
        mediumOption: "Medium",
        highOption: "High",

        calculateButton: "Calculate My Impact →",

        resultsTitle: "🌿 Your Environmental Results",

        resultsDescription:
            "Here are your estimated results based on your habits.",

        co2Label: "WEEKLY CARBON FOOTPRINT",
        co2Unit: "kg CO₂ / week",

        pointsLabel: "YOUR ECO-POINTS",
        pointsUnit: "out of 100 points",

        printButton: "🖨️ Print / Save PDF Report",

        footerText:
            "Bolívar Eco-Calculator | Building a greener tomorrow 🌎",

        footerDisclaimer:
            "Environmental calculations are estimates.",

        errorEmpty:
            "Please complete all fields.",

        errorPaper:
            "Enter a valid number of sheets (between 0 and 500).",

        excellent:
            "Excellent! Your habits contribute to protecting the planet.",

        good:
            "Great job! There are still some habits you can improve.",

        improve:
            "You can adopt more sustainable habits to improve your environmental impact.",

        certificateSubtitle:
            "ENVIRONMENTAL IMPACT CERTIFICATE",

        certificateTitle:
            "Recognition of Environmental Commitment",

        certificateIntro:
            "This certificate presents the results of your environmental habits assessment.",

        certificateCO2Label:
            "WEEKLY CARBON FOOTPRINT",

        certificatePointsLabel:
            "ECO-POINTS",

        certificateDataTitle:
            "Assessment Details",

        certificateTransportLabel:
            "Transportation:",

        certificatePaperLabel:
            "Sheets used per day:",

        certificateRecyclingLabel:
            "Recycling level:",

        certificateDateLabel:
            "Date:",

        certificateMessageTitle:
            "🌿 Your Commitment to the Planet",

        certificateDeclaration:
            "Every small change contributes to building a more sustainable future. Thank you for caring for our planet!",

        certificateFooter:
            "Bolívar Eco-Calculator | Colegio Bolívar",

        certificateDisclaimer:
            "This document provides educational estimates and does not constitute an official measurement.",

        transportNames: {
            bus: "Bus",
            privado: "Private car",
            compartido: "Carpool",
            bicicleta: "Bicycle/Walking"
        },

        recyclingNames: {
            0: "None",
            1: "Low",
            2: "Medium",
            3: "High"
        }

    }

};


// =========================================
// 4. APPLICATION STATE
// =========================================

let currentLanguage = "es";

let lastCalculation = null;


// =========================================
// 5. ELEMENT REFERENCES
// =========================================

const formulario = document.getElementById("ecoForm");

const resultados = document.getElementById("resultados");

const error = document.getElementById("error");

const languageSelector =
    document.getElementById("languageSelector");

const printButton =
    document.getElementById("printButton");


// =========================================
// 6. LANGUAGE FUNCTION
// =========================================

function changeLanguage(language) {

    // Prevent unsupported language values.
    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    const t = translations[language];

    // Update document language.
    document.documentElement.lang = language;

    // Update all interface text.
    Object.keys(t).forEach(key => {

        if (typeof t[key] === "string") {

            const element = document.getElementById(key);

            if (element) {
                element.textContent = t[key];
            }

        }

    });

    // Update paper placeholder.
    document.getElementById("papel").placeholder =
        t.paperPlaceholder;

    // Update visible validation message.
    if (error.style.display === "block") {

        const paperValue =
            document.getElementById("papel").value;

        const invalidPaper =
            paperValue === "" ||
            !Number.isInteger(Number(paperValue)) ||
            Number(paperValue) < 0 ||
            Number(paperValue) > 500;

        error.textContent = invalidPaper
            ? t.errorPaper
            : t.errorEmpty;

    }

    // Preserve and update existing results.
    if (lastCalculation) {

        updateResultMessage();

        updateCertificate();

    }

}


// Listen for language changes.
languageSelector.addEventListener("change", function() {

    changeLanguage(this.value);

});


// =========================================
// 7. FORM VALIDATION AND CALCULATION
// =========================================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const t = translations[currentLanguage];

    error.textContent = "";

    error.style.display = "none";

    resultados.hidden = true;

    const transporte =
        document.getElementById("transporte").value;

    const papel =
        document.getElementById("papel").value;

    const reciclaje =
        document.getElementById("reciclaje").value;


    // Validate empty fields.
    if (
        transporte === "" ||
        papel === "" ||
        reciclaje === ""
    ) {

        error.textContent = t.errorEmpty;

        error.style.display = "block";

        return;

    }


    // Validate paper quantity.
    const hojas = Number(papel);

    if (
        !Number.isInteger(hojas) ||
        hojas < 0 ||
        hojas > 500
    ) {

        error.textContent = t.errorPaper;

        error.style.display = "block";

        return;

    }


    // =====================================
    // CARBON FOOTPRINT CALCULATION
    // =====================================

    const emisionesTransporte =
        FACTORES_TRANSPORTE[transporte] *
        DISTANCIA_DIARIA *
        DIAS_ESCOLARES;

    const emisionesPapel =
        hojas *
        CO2_POR_HOJA *
        DIAS_ESCOLARES;

    const huellaSemanal =
        emisionesTransporte + emisionesPapel;


    // =====================================
    // ECO-POINTS CALCULATION
    // =====================================

    const puntosTransporte =
        PUNTOS_TRANSPORTE[transporte];

    const puntosReciclaje =
        PUNTOS_RECICLAJE[reciclaje];

    const puntosPapel = Math.max(
        0,
        30 - (hojas * 0.5)
    );

    const totalEcoPoints = Math.round(
        puntosTransporte +
        puntosReciclaje +
        puntosPapel
    );


    // Save calculation for later use.
    lastCalculation = {

        transporte: transporte,

        papel: hojas,

        reciclaje: reciclaje,

        huella: huellaSemanal,

        puntos: totalEcoPoints

    };


    // Display results.
    document.getElementById("co2").textContent =
        huellaSemanal.toFixed(2);

    document.getElementById("ecoPoints").textContent =
        totalEcoPoints;


    // Show results.
    resultados.hidden = false;

    // Update result message and certificate.
    updateResultMessage();

    updateCertificate();

    // Enable PDF report button.
    printButton.disabled = false;

    resultados.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

});


// =========================================
// 8. RESULT MESSAGE
// =========================================

function updateResultMessage() {

    if (!lastCalculation) {
        return;
    }

    const t = translations[currentLanguage];

    let message;

    if (lastCalculation.puntos >= 80) {

        message = t.excellent;

    } else if (lastCalculation.puntos >= 50) {

        message = t.good;

    } else {

        message = t.improve;

    }

    document.getElementById("mensaje").textContent =
        message;

}


// =========================================
// 9. CERTIFICATE GENERATION
// =========================================

function updateCertificate() {

    if (!lastCalculation) {
        return;
    }

    const t = translations[currentLanguage];

    const data = lastCalculation;


    // Carbon footprint.
    document.getElementById("certificateCO2").textContent =
        data.huella.toFixed(2) + " kg CO₂";


    // Eco-Points.
    document.getElementById("certificatePoints").textContent =
        data.puntos + " / 100";


    // Transportation.
    document.getElementById("certificateTransport").textContent =
        t.transportNames[data.transporte];


    // Paper consumption.
    document.getElementById("certificatePaper").textContent =
        data.papel;


    // Recycling level.
    document.getElementById("certificateRecycling").textContent =
        t.recyclingNames[data.reciclaje];


    // Evaluation date.
    const date = new Date().toLocaleDateString(

        currentLanguage === "es" ? "es-CO" : "en-US",

        {
            year: "numeric",
            month: "long",
            day: "numeric"
        }

    );

    document.getElementById("certificateDate").textContent =
        date;


    // Certificate message.
    let message;

    if (data.puntos >= 80) {

        message = t.excellent;

    } else if (data.puntos >= 50) {

        message = t.good;

    } else {

        message = t.improve;

    }

    document.getElementById("certificateMessage").textContent =
        message;

}


// =========================================
// 10. PRINT / SAVE PDF
// =========================================

function printCertificate() {

    if (!lastCalculation) {
        return;
    }

    // Update certificate before printing.
    updateCertificate();

    // Open the browser's native print dialog.
    window.print();

}


// Connect print button.
printButton.addEventListener("click", printCertificate);


// =========================================
// 11. INITIALIZATION
// =========================================

// Start application in Spanish.
changeLanguage("es");

// Disable report button until a calculation exists.
printButton.disabled = true;

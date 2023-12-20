function arrow_right() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

function arrow_left() {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
}

function arrow_right1() {
    document.getElementById("third").style.display = "block";
    document.getElementById("second").style.display = "none";
}

function arrow_right2() {
    document.getElementById("forth").style.display = "block";
    document.getElementById("third").style.display = "none";
}

function arrow_left1() {
    document.getElementById("third").style.display = "none";
    document.getElementById("second").style.display = "block";
}

function arrow_left2() {
    document.getElementById("forth").style.display = "none";
    document.getElementById("third").style.display = "block";
}

function arrow_right3() {
    document.getElementById("forth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
}

function arrow_right4() {
    document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";
}

function arrow_left3() {
    document.getElementById("forth").style.display = "block";
    document.getElementById("fifth").style.display = "none";
}

function arrow_left4() {
    document.getElementById("fifth").style.display = "block";
    document.getElementById("sixth").style.display = "none";
}

function arrow_right5() {
    document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "block";
}

function arrow_left5() {
    document.getElementById("sixth").style.display = "block";
    document.getElementById("seventh").style.display = "none";
}

function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  
  if (userAgent.includes("iOS")) {
    return "iOS";
  } else if (userAgent.includes("Android")) {
    return "Android";
  } else if (userAgent.includes("Xiaomi")) {
    return "Xiaomi";
  } else {
    return "Unknown";
  }
}

const operatingSystem = getOperatingSystem();

if (operatingSystem === "iOS") {
  document.getElementById("iphone_operating_section").style.display = "block";
  document.getElementById("windows").style.display = "none";
} else if (operatingSystem === "Android") {
    document.getElementById("iphone_operating_section").style.display = "block";
    document.getElementById("windows").style.display = "none";
} else if (operatingSystem === "Xiaomi") {
    document.getElementById("iphone_operating_section").style.display = "block";
    document.getElementById("windows").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    // Dummy-Daten für Vereine
    const vereineData = {
      "16": [
        { name: "AUSTRIAN BASKETFIGHTERS", adresse: "Erdbrustgasse 18, Wien", telefonnummer: "06644435577" }
      ],
      "12": [
        { name: "BASKET FLAMES UNION", adresse: "Sagedergasse 10-12, Wien", telefonnummer: "069919432292" },
      ],
      "21": [
        { name: "BASKET-ROLLING", adresse: "Arnoldgasse 2/9/38, Wien", telefonnummer: "069910374378" },
        { name: "KKV MATRIX", adresse: "Brünnerstraße 190/16/3, Wien", telefonnummer: "066480322400" }
      ],
      "22": [
        { name: "BASKETBALL KLUB RAPID", adresse: "Gisela Legath Gasse 5/Top , Wien", telefonnummer: "06767365515" },
        { name: "SV STARS BASKETBALL", adresse: "Hirschstettner Str. 119/1/26, Wien", telefonnummer: "06766744195" },
        { name: "VIENNA KANGAROOS", adresse: "Süßenbrunnerstraße 64/4/5, Wien", telefonnummer: "06764023929" },
        { name: "VIENNA TIMBERWOLVES", adresse: "Bernoullistraße 9, Wien", telefonnummer: "888888888" }
      ],
      "18": [
        { name: "BC VIENNA 87", adresse: "Haizingergasse 37, Wien", telefonnummer: "06648536551" }
      ],
      "3": [
        { name: "UKJ ROCKETS SIMMERING", adresse: "Leberstraße 11, Wien", telefonnummer: "067762843716" }
      ],
      "14": [
        { name: "UNION WEST WIEN", adresse: "Linzer Straße 431, Wien", telefonnummer: "0181364800" }
      ],
      "15": [
        { name: "VIENNA GIANTS", adresse: "Storchengasse 14, Wien", telefonnummer: "06802247690" }
      ],
      "20": [
        { name: "WAT BRIGITTENAU", adresse: "Hopsagasse 5, Wien", telefonnummer: "+4313325188" }
      ]
      // Weitere Bezirke und Vereine hier hinzufügen
    };
  
    const bezirkFilter = document.getElementById("bezirkFilter");
    const vereineContainer = document.getElementById("vereine");
  
    bezirkFilter.addEventListener("change", function () {
      const selectedBezirk = this.value;
  
      if (selectedBezirk === "Alle") {
        // Wenn "Alle" ausgewählt ist, zeige alle Vereine+
        vereineContainer.innerHTML = "";
  
        const table = document.createElement("table");
        table.classList.add("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const th1 = document.createElement("th");
        const th2 = document.createElement("th");
        const th3 = document.createElement("th");
        const th4 = document.createElement("th");
  
        th1.textContent = "Verein";
        th2.textContent = "Bezirk";
        th3.textContent = "Adresse";
        th4.textContent = "Telefonnummer";
  
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        thead.appendChild(tr);
        table.appendChild(thead);
  
        const tbody = document.createElement("tbody");
  
        // Iteriere über alle Bezirke und Vereine
        for (const bezirk in vereineData) {
          const vereineInBezirk = vereineData[bezirk];
  
          vereineInBezirk.forEach(verein => {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
  
            td1.textContent = verein.name;
            td2.textContent = bezirk;
            td3.textContent = verein.adresse;
            td4.textContent = verein.telefonnummer;
  
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
          });
        }
  
        table.appendChild(tbody);
        vereineContainer.appendChild(table);
      } else {
        // Zeige die Vereine im ausgewählten Bezirk
        const vereineInBezirk = vereineData[selectedBezirk] || [];
        vereineContainer.innerHTML = "";
  
        if (vereineInBezirk.length === 0) {
          vereineContainer.textContent = "Keine Vereine gefunden.";
        } else {
          const table = document.createElement("table");
          table.classList.add("table");
          const thead = document.createElement("thead");
          const tr = document.createElement("tr");
          const th1 = document.createElement("th");
          const th2 = document.createElement("th");
          const th3 = document.createElement("th");
          const th4 = document.createElement("th");
  
          th1.textContent = "Verein";
          th2.textContent = "Bezirk";
          th3.textContent = "Adresse";
          th4.textContent = "Telefonnummer";
  
          tr.appendChild(th1);
          tr.appendChild(th2);
          tr.appendChild(th3);
          tr.appendChild(th4);
          thead.appendChild(tr);
          table.appendChild(thead);
  
          const tbody = document.createElement("tbody");
  
          // Erstelle Listenelemente für jeden Verein
          vereineInBezirk.forEach(verein => {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
  
            td1.textContent = verein.name;
            td2.textContent = selectedBezirk;
            td3.textContent = verein.adresse;
            td4.textContent = verein.telefonnummer;
  
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
          });
  
          table.appendChild(tbody);
          vereineContainer.appendChild(table);
        }
      }
    });
  });
  
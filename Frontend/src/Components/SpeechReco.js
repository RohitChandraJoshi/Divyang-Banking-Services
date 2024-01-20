import annyang from "annyang";
import { useEffect } from "react";
import React from "react";

function TestSpeech() {
  useEffect(() => {
    annyang.start();
    const commands = {
      hello: () => {
        console.log("hello");
      },
      "sign up": function () {
        console.log(12);
        window.location.href = `/signup`;
      },
      login: function () {
        console.log(12);
        window.location.href = "/login";
      },
      "enter username *value": (value) => {
        const input = document.getElementById("name");
        console.log(input);
        input.value = input ? value : null;
      },
      "enter email *value": (value) => {
        const input = document.getElementById("email");
        input.value = input ? value : null;
      },
      "enter password *value": (value) => {
        const input = document.getElementById("password");
        console.log(input);
        input.value = input ? value : null;
      },
      back: () => {
        // Go back in the browser history
        window.history.back();
      },
      submit: () => {
        const form = document.getElementById("form");
        console.log("Form element:", form);
        console.log(12);
        if (form) {
          form.submit();
        }
      }
      
    };

    annyang.addCommands(commands);
  });

  return <div></div>;
}

export default TestSpeech;

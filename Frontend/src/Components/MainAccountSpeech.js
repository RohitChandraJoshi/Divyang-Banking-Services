import React, { useEffect, useRef } from "react";
import annyang from "annyang";
import { Link, useParams } from "react-router-dom";

export default function AccountSpeech({ person }) {
  const { id } = useParams();
  const formRef = useRef(null);
  useEffect(() => {
    annyang.start();
    const commands = {
      dashboard: function () {
        window.location.href = `/dashboard/${id}`;
      },
      commands: function () {
        window.location.href = `/dashboard/${id}`;
      },
      account: function () {
        window.location.href = `/dashboard/${id}/account`;
      },
      transfer: function () {
        window.location.href = `/dashboard/${id}/transfer`;
      },
      logout: function () {
        window.location.href = `/`;
      },
      "enter username *value": (value) => {
        const input = document.getElementById("username");
        console.log(input);
        input.value = input ? value : null;
      },
      "enter amount *value": (value) => {
        const input = document.getElementById("amount");
        console.log(input);
        input.value = input ? value : null;
      },
      "enter purpose *value": (value) => {
        const input = document.getElementById("purpose");
        console.log(input);
        input.value = input ? value : null;
      },
      "transfer money": () => {
        const form = document.getElementById("form");
        form.submit()
      },
            back: () => {
        // Go back in the browser history
        window.history.back();
      },
    };
    annyang.addCommands(commands);
  });
  return <div></div>;
}

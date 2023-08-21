const request = require("request");
const fetch = require("node-fetch");

exports.pushUpdate = async function () {
  try {
    const response = await fetch(
      "https://api.github.com/users/andreepratama27"
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  async function getTranslatedData() {
    try {
      // to convert from string to encoded format we use URLSearchParams
      const encodeData = new URLSearchParams();
      // append the data with key and value
      encodeData.append("source_language", sourceLanguage);
      encodeData.append("target_language", targetLanguage);
      encodeData.append("text", data);

      const option = {
        method: "post",
        url: "https://text-translator2.p.rapidapi.com/translate",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
        data: encodeData, // payload // request body
      };
      const res = await axios.request(option);
      setResult(res.data.data.translatedText);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <select
        name="source"
        onChange={(e) => {
          setSourceLanguage(e.target.value);
        }}
        value={sourceLanguage}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
        <option value="ml">Malayalam</option>
        <option value="ta">Tamil</option>
      </select>
      <br />
      <select
        name="target"
        onChange={(e) => {
          setTargetLanguage(e.target.value);
        }}
        value={targetLanguage}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ml"> Malayalam</option>
        <option value="bn">Bengali</option>
        <option value="ta">Tamil</option>
      </select>
      <br />
      <input
        name="data"
        placeholder="enter data here"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <br />
      <button onClick={getTranslatedData}>translate</button>
      <br />
      <p>{result}</p>
    </div>
  );
}

export default App;

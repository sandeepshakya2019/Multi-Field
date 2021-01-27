import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
// import { CsvToHtmlTable } from "react-csv-to-table";
// import { CSVReader } from "react-papaparse";
import { readString } from "react-papaparse";
import "./M.css";

function Multifield() {
  const [csvdata, setCsvdata] = useState("");
  //   const [csvdata2, setCsvdata2] = useState("");

  const handleFiles = (files) => {
    // files = files.base64;
    var reader = new FileReader();
    reader.onload = function (e) {
      const results = readString(reader.result).data;
      // var results = readString.parse(reader.result);
      // console.log(results[0]);
      let m = [];
      for (let i = 0; i < results.length; i++) {
        m.push(results[i]);
      }
      // console.log(m[1][0]);
      setCsvdata(m);
    };
    reader.readAsText(files[0]);
  };

  return (
    <div className="container-fluid">
      <h1>Multi-Field</h1>
      <br />
      <div>
        <b>Upload the CSV File :</b>
        <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
          <button className="btn">Upload</button>
        </ReactFileReader>
      </div>
      {csvdata ? (
        <table className="table table-striped">
          {csvdata.map((e) => (
            <tbody className="tbody">
              <th className="t" scope="col">
                {e[0]}
              </th>
              <th className="t" scope="col">
                {e[1]}
              </th>
              <th className="t" scope="col">
                {e[2]}
              </th>
              <th className="t" scope="col">
                {e[3]}
              </th>
              <th className="t" scope="col">
                {e[4]}
              </th>
            </tbody>
          ))}
        </table>
      ) : null}
    </div>
  );
}

export default Multifield;

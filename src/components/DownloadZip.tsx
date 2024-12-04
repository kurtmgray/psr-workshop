'use client';
import React, { useEffect, useState } from 'react';
import JSZip from 'jszip';
import { JsonFile } from '../utils/types';

export default function DownloadZipFile() {
  const [jsonData, setJsonData] = useState<JsonFile[]>([]); // To store the JSON contents

  useEffect(() => {
    console.log('useEffect');
  }, [jsonData]);

  const fetchAndExtractJson = async () => {
    try {
      console.log('fetchAndExtractJson');
      const response = await fetch(
        'https://api.legiscan.com/?key=14c483b810fd32a27d4a4447521488a2&op=getDataset&access_key=4x5pB4n03XkHM17nGaIAHN&id=2016'
      ); // Replace with your API endpoint
      console.log('before await');
      const data = await response.json();
      console.log('after await');
      if (data.status === 'OK' && data.dataset.zip) {
        console.log('data fetched');
        const base64Zip = data.dataset.zip;

        // Decode Base64 data to binary
        const binaryData = atob(base64Zip);
        const byteNumbers = new Uint8Array(binaryData.length);
        for (let i = 0; i < binaryData.length; i++) {
          byteNumbers[i] = binaryData.charCodeAt(i);
        }

        // Create a Blob from the binary data
        const blob = new Blob([byteNumbers], { type: 'application/zip' });

        // Use JSZip to extract files
        const zip = await JSZip.loadAsync(blob);
        console.log('zip loaded');
        // Traverse the ZIP and extract JSON files
        const extractedData: JsonFile[] = [];
        const targetPath = 'CA/2023-2024_Regular_Session/bill/';
        zip.forEach(async (relativePath, file) => {
          if (
            relativePath.startsWith(targetPath) &&
            relativePath.endsWith('.json')
          ) {
            const fileContent = await file.async('string'); // Read file as text
            extractedData.push({
              path: relativePath,
              content: JSON.parse(fileContent),
            }); // Parse JSON
          }
        });
        console.log('json extracted');
        console.log(extractedData);
        setJsonData(extractedData); // Store JSON data in state
      } else {
        console.error("Invalid response or missing 'zip' data.");
      }
    } catch (error) {
      console.error('Error fetching or processing the ZIP file:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchAndExtractJson}>Fetch and Extract JSON</button>
      <div>
        {jsonData.length > 0 ? (
          jsonData.map((json) => (
            <div key={json.path} style={{ margin: '1rem' }}>
              <h3>
                {json.content.bill.bill_number}: {json.content.bill.title}
              </h3>
              <p>{json.content.bill.description}</p>
              {json.content.bill.calendar.map((calendar, i) => (
                <div key={i} style={{ margin: '1rem' }}>
                  <p>
                    {calendar.date}, {calendar.time}
                  </p>
                  <p>{calendar.location}</p>
                  <p>{calendar.description}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No JSON files extracted yet.</p>
        )}
      </div>
    </div>
  );
}

//     const [fileUrl, setFileUrl] = useState<string | null>(null);

//   const fetchAndPrepareFile = async () => {
//     try {
//       const response = await fetch(
//         'https://api.legiscan.com/?key=14c483b810fd32a27d4a4447521488a2&op=getDataset&access_key=4x5pB4n03XkHM17nGaIAHN&id=2016'
//       ); // Replace with your API endpoint
//       const data = await response.json();

//       if (data.status === 'OK' && data.dataset.zip) {
//         const base64Zip = data.dataset.zip;

//         // Decode the Base64 data to binary
//         const binaryData = atob(base64Zip);
//         const byteNumbers = new Uint8Array(binaryData.length);
//         for (let i = 0; i < binaryData.length; i++) {
//           byteNumbers[i] = binaryData.charCodeAt(i);
//         }

//         // Create a Blob
//         const blob = new Blob([byteNumbers], { type: data.dataset.mime_type });

//         // Generate a URL for the Blob
//         const url = URL.createObjectURL(blob);
//         setFileUrl(url);
//       } else {
//         console.error("Invalid response or missing 'zip' data.");
//       }
//     } catch (error) {
//       console.error('Error fetching or processing the data:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchAndPrepareFile}>Fetch and Prepare File</button>
//       {fileUrl && (
//         <a href={fileUrl} download="dataset.zip">
//           Download ZIP File
//         </a>
//       )}
//     </div>
//   );
// }

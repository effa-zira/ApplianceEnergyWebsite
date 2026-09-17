if (document.getElementById('data-container')) {
    
    // Parse the CSV file exported from KNIME
    Papa.parse("tv_data.csv", {
        download: true,
        header: true,          // Use first row as column headers
        dynamicTyping: true,   // Auto-convert numbers
        skipEmptyLines: true,
        
        complete: function(results) {
            const data = results.data;
            const container = document.getElementById('data-container');
            
            // Check if data loaded
            if (data.length === 0) {
                container.innerHTML = "<p>No data available.</p>";
                return;
            }
            
            // Build the HTML table
            let tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Screen Size (cm)</th>
                            <th>Star Rating</th>
                            <th>Energy Consumption (kWh/year)</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            // Loop through each row from KNIME
            data.forEach(row => {
                // Skip rows without a brand
                if (!row.Brand_Reg) return;
                
                tableHTML += `
                    <tr>
                        <td>${row.Brand_Reg || 'N/A'}</td>
                        <td>${row.Model_No || 'N/A'}</td>
                        <td>${row.screensize || 'N/A'}</td>
                        <td>${row.Star || 'N/A'}</td>
                        <td>${row['Labelled energy consumption (kWh/year)'] || 'N/A'}</td>
                    </tr>
                `;
            });
            
            tableHTML += `</tbody></table>`;
            container.innerHTML = tableHTML;
        },
        
        error: function(error) {
            console.error("Error loading CSV:", error);
            document.getElementById('data-container').innerHTML = 
                "<p>Error loading data. Please make sure tv_data.csv is in the same folder.</p>";
        }
    });
}
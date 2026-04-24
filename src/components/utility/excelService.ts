import * as XLSX from 'xlsx';

import { dataSets } from '../charts/Charts';

export const downloadDashboardexcel = (): void => {
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    // Mapeo de datos a formato de hoja de cálculo
    const sheets = [
        {data: dataSets.imcVariationHistogramData, name: "Variación IMC"},
        {data: dataSets.participationsByMonthData, name: "Participaciones por Mes"},
        {data: dataSets.CareAdherenceData, name: "Adherencia del Cuidado"},
        {data: dataSets.pharmacologicalAdherenceData, name: "Adherencia Farmacológica"}
    ];
    sheets.forEach(sheet => {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(sheet.data);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheet.name);
    });

    // Generar archivo Excel y descargarlo
    XLSX.writeFile(workbook, "Reporte_Dashboard.xlsx");
}